# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public landing page for **Surlabs**, a software factory in Montevideo, Uruguay. Single-page marketing site, Spanish-language, dark-only, deployed to Vercel (`git@github.com:SurLabsDev/Landing.git`).

Origin brief lives in [tmp_prompt/prompt.txt](tmp_prompt/prompt.txt). Two constraints from it still hold: **the site must read as an established company** (never surface that it's a two-person startup), and **no emojis anywhere — use icon glyphs instead**.

The audience is **small local businesses** (restaurants, clinics, real estate, gyms), not technical buyers. That decides most design arguments: the visitor is evaluating whether these people can be trusted with their business, and the clickable demos are the proof.

## Commands

```bash
npm install        # node_modules is NOT present in a fresh clone — run this first
npm run dev        # dev server on :3000
npm run build      # production build (also the only real typecheck — tsc has noEmit)
npm run lint       # bare `eslint` via flat config
npm start          # serve the production build
```

There is **no test framework** — no Jest/Vitest/Playwright, no `test` script. `npm run build` + `npm run lint` are the full verification surface. Don't claim tests pass; run the build.

## Stack

Next.js 16 App Router · React 19 · TypeScript (strict) · Tailwind CSS v4 · `@phosphor-icons/react`. Path alias `@/*` → `./src/*`.

**There is no animation library, and that is deliberate.** Framer Motion was removed for performance (`ff2fbf0`, `1091a6d`), and a later GSAP experiment was removed too when the scroll-hijack it powered got cut. If you think you need one, read the animation section below first.

## Design system

The site went through a full visual overhaul. The rules below are the system, not preferences — breaking one of them makes the page inconsistent.

**Palette** — defined in the `@theme` block of [src/app/globals.css](src/app/globals.css). Tailwind v4 is CSS-first, so **there is no `tailwind.config.js`**.

| Token | Value | Use |
|---|---|---|
| `ink` | `#0d0c0b` | Page background. Warm near-black, never `#000` |
| `ink-raised` / `ink-sunken` | `#171512` / `#080807` | Surfaces and recessed sections |
| `bone` / `bone-dim` / `bone-faint` | `#f0ebe3` / `#a39c91` / `#6b665e` | Text scale, never `#fff` |
| `ember` / `ember-hot` | `#e4571b` / `#ff6a2b` | **The only accent on the page** |

**Accent discipline.** One accent, whole page. Roughly one ember element per viewport: the primary CTA, a headline word, a hover state, a rule line. If you are adding a second accent color, you are breaking the system.

**Ember buttons must use `text-ink`, never `text-bone`.** Bone on ember is 3.12:1 and fails WCAG AA. Ink on ember is 5.21:1 and passes. This is why every ember button in the codebase has black text.

**One radius, everywhere: `rounded-brand` (6px).** Defined once as `--radius-brand` in the `@theme` block. Buttons, cards, inputs, images and panels all use it. An automated check confirms the rendered page contains exactly one border-radius value. To soften or sharpen the whole site, change that one token. Circles (the logo disc) are exempt because they're circles, not rounded rectangles. Do not introduce a second radius.

**Typography** — Bricolage Grotesque (variable, with the `opsz` and `wdth` axes requested in [layout.tsx](src/app/layout.tsx)) plus JetBrains Mono for small labels. Use the helper classes rather than hand-tuning: `.type-display` and `.type-display-tight` (condensed widths and negative tracking for headlines), `.type-body`, `.type-label`. The character comes from the **width axis**, not the weight.

**Zero section eyebrows.** Small uppercase labels above section headlines are banned; the headline carries the section. `.type-label` exists only for card metadata (the sector chips) and footer column headings.

**Section headers stack.** Headline on top, body paragraph below at `max-w-[58ch]`. Do **not** build "big headline left, small explainer paragraph floating right" — it reads as templated.

**Every section uses a different layout family.** Hero is an asymmetric split, Work is a horizontal gallery, Services is an asymmetric bento, Process is a timeline, Contact is a split with the form. Adding a section means picking a family that isn't taken.

## Architecture

### Page composition

[src/app/page.tsx](src/app/page.tsx) mounts `ScrollAnimator`, `Header`, five sections and `Footer`. Anchors are load-bearing for old links: `#proyectos`, `#demos` (a preserved alias sitting inside the Work section), `#servicios`, `#metodologia`, `#contacto`.

Server Components by default. Only four files are `"use client"`: `Header` (menu + scroll state), `WorkTrack` (gallery scroll state), `Contact` (form), `ScrollAnimator`.

### Motion: CSS plus one IntersectionObserver

[ScrollAnimator.tsx](src/components/ui/ScrollAnimator.tsx) adds `.in-view` to elements carrying `animate-on-scroll`, `animate-line-x`, or `animate-line-y`, then unobserves them. A MutationObserver picks up late-mounted nodes. Stagger with inline `style={{ transitionDelay }}`. That handles every reveal on the page and costs almost nothing.

Everything else is plain CSS: the hero entrance (`animate-rise`), hover transitions, the logo needle.

**Never use `window.addEventListener("scroll")`** for page-level effects. It runs every frame and janks. The header's scrolled state watches a sentinel div with IntersectionObserver instead; copy that pattern. (An `onScroll` on a specific horizontal container, like the gallery's progress bar, is fine — it only fires while that element scrolls, and it writes straight to the DOM via a ref rather than to React state.)

New animation class? Register it in three places: the CSS, `ScrollAnimator`'s selector string, and the `<noscript>` reset in [layout.tsx](src/app/layout.tsx) that un-hides animated content when JS is off. Also add it to the `prefers-reduced-motion` block.

### The demo gallery does not hijack scroll

[WorkTrack.tsx](src/components/sections/WorkTrack.tsx) is a native horizontal scroll container (`overflow-x-auto` + `snap-x snap-mandatory`), identical on desktop and mobile. It was briefly built as a GSAP pinned pan; that was **cut on purpose** because it forced roughly 3600px of scrolling before a visitor could move past the section. For an audience of local business owners, trapping them is worse than impressing them.

What makes it work without a library:
- The next card always **peeks** past the edge (`w-[80vw]` on mobile). That peek is the affordance telling the user there is more sideways.
- Arrow buttons appear at `md:` and up for people without horizontal scroll hardware, and disable at each end.
- The progress bar is driven by the container's `onScroll`, written straight to a ref's `style.transform`. Never put scroll position in React state; it would re-render all 12 cards every frame.
- The native scrollbar is hidden (`.track-scroll`) **only because** the progress bar and arrows already communicate position. Do not hide it without leaving an equivalent cue.

If you ever re-introduce pinning or scroll-jacking here, you are undoing a deliberate decision.

**Auto-advance.** The track drifts continuously at `AUTO_PX_PER_SEC` (32 px/s) via `requestAnimationFrame`, so visitors notice there is more sideways. It is a steady glide, not a card-by-card jump. Two consequences worth knowing before you touch it:

- The frame loop writes `el.scrollLeft` directly, so the position is accumulated in a local float. Reading `scrollLeft` back each frame would round a half-pixel step to zero and the track would never move.
- **Scroll-snap is enabled only while auto-advance is off** (`auto ? "" : "snap-x snap-mandatory"`). Mandatory snap fights a continuous drift and makes it stutter. For the same reason the container has no `scroll-behavior: smooth` in CSS; the arrow buttons ask for smooth explicitly in `scrollBy`.

Auto-advancing carousels are normally an anti-pattern, so this one is fenced in by four rules, and **all four must survive any refactor**:

1. **The first user gesture kills it permanently** (`stopAuto`) — wheel, touch, pointer, key, or an arrow click. By then they have discovered the sideways axis, and continuing to move a click target they are aiming at only hurts.
2. Pointer-over and keyboard focus pause it while they last.
3. It does not run while the track is off screen (IntersectionObserver) or the tab is hidden.
4. It never starts under `prefers-reduced-motion`.

It ping-pongs at the ends rather than rewinding; snapping 3600px back to zero looks like a bug. At 32 px/s an untouched page needs about two minutes to reach an end, so in practice nobody sees the turn. The pause flags are refs, not state, so pausing never re-renders the 12 cards.

### The hero has no image, on purpose

[Hero.tsx](src/components/sections/Hero.tsx) is typographic only. It carried a demo screenshot; that was **removed at the client's request**. Two things follow:

- **The section is `min-h-[100dvh]` and its content is distributed, not centered.** Both halves of that sentence matter and they were learned the hard way. Full height is required so the next section never peeks above the fold; a sliver of the following headline showing at the bottom cheapens the whole page. But a compact block *centered* in a full-height section is exactly what reads as "there is too much empty space here". So the flex column uses `justify-between`: the headline anchors to the top, and the rule, subtext and CTAs anchor to the bottom. Negative space held between two anchored blocks reads as editorial composition; the same space wrapped around one floating block reads as a mistake.
- The `max-w-[24ch]` on the `h1` keeps it at **2 lines from 1024px to 1920px**. Changing the font scale means re-measuring that, and re-checking that `pxAsomados` stays 0 at every viewport.
- LCP is now a text node instead of an image, which is the fastest thing a browser can paint. If you ever add a visual back here, give it `priority` and re-check Core Web Vitals.

### Content lives in the components

No CMS, no data layer, no API routes.

- **[src/lib/demos.ts](src/lib/demos.ts)** — the 12 demos, plus `WHATSAPP_NUMBER`, `WHATSAPP_DISPLAY` and `CONTACT_EMAIL`. Ordered deliberately: the most relatable-to-a-local-business demos come first.
- `services` in [Services.tsx](src/components/sections/Services.tsx) — 4 items, each with an `area` string holding its bento span. **4 items means exactly 4 cells**; changing the count means re-shaping the grid, never leaving a blank tile.

  Two hard-won rules here. **The bento is asymmetric by width (7/5, then 5/7), never by row span.** An earlier version had one cell spanning two rows: it came out 528px tall holding 200px of content, and the 328px of leftover read as a bug, not as breathing room. And **the background screenshots stay blurred** (`blur-[9px]`, low opacity): sharp, you can read the demo's own headline sitting right above the card title, and the two compete. They are texture, not content.
- `steps` in [Process.tsx](src/components/sections/Process.tsx) — 4 steps. Deliberately **not numbered**; the verb is the label.

### The demos are a separate repo

Cards link to `https://demos.surlabs.tech/ejemplo1` … `/ejemplo12`, which live in the sibling project `../surlabs-demos`. Adding an entry to `demos.ts` does nothing unless that route exists and is deployed there.

**Screenshots are generated, not hand-made.** `public/demos/ejemploN.webp` are real captures at 1440x900, ~565 KB for all 12. Keep it that way: do not commit multi-megabyte PNGs.

**A plain headless screenshot silently produces broken captures.** The demos reveal content on scroll (IntersectionObserver entrance animations), and a headless capture never scrolls — so anything below the initial fold never animates in and lands as a blank area. This is not hypothetical: it shipped. `ejemplo7` sat in production with an empty chat panel and `ejemplo12` with no hero headline, and the missing content read as "that's how the demo looks."

The regeneration procedure must **scroll the whole page first**, then return to the top and wait for animations to settle. Drive it with `playwright-core` (in a scratch dir, not this repo):

```js
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(async () => {                       // dispara los observers
  const paso = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += paso) {
    window.scrollTo(0, y); await new Promise(r => setTimeout(r, 220));
  }
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise(r => setTimeout(r, 600));
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 900));
});
await page.waitForFunction(() =>                         // espera a que frenen
  document.getAnimations().filter(a => a.playState === 'running').length === 0,
  { timeout: 8000 }).catch(() => {});
await page.screenshot({ path: `raw${i}.png` });          // 1440x900 @2x
```

Then `sips -Z 1440 raw.png --out tmp.png && cwebp -q 80 -m 6 tmp.png -o public/demos/ejemploN.webp`.

**Verify by weight before committing.** A capture that comes out dramatically lighter than the one it replaces is almost always missing content, not better compressed: `ejemplo9` dropped 74% when its hero failed to render. Compare old and new byte sizes and open anything that moved more than ~15%.

**`ejemplo6` is a rotating carousel**, so which slide you catch is luck. The drinks slide sells better on a gastronomy card than the merchandise one; re-run until you get it, or keep the existing file.

### Contact is a WhatsApp deep link

[Contact.tsx](src/components/sections/Contact.tsx) posts nothing to a server. It templates the fields into a Spanish message and opens `wa.me/59891661552`. It also detects a blocked popup and offers a manual link, because a silently-swallowed submit is a lost lead. **Field names and order are preserved from the original form** — don't rename them casually.

### Analytics: synthetic page views, because custom events are paywalled

Vercel Web Analytics + Speed Insights, mounted once via [Metrics.tsx](src/components/ui/Metrics.tsx). The project is on the **Hobby plan**, and that dictates the whole design.

**`track()` does not work here and fails silently.** Vercel's plan matrix lists Custom Events as `-` for Hobby. Nothing in `@vercel/analytics` does plan detection: the call fires a real POST, returns 200, throws nothing, warns nothing, and never appears in the dashboard. Don't "fix" the tracking by switching to `track()` — you'd get a month of confident, empty data. Same for **UTM breakdowns**, which need the Web Analytics Plus add-on.

So conversions are recorded as **synthetic page views** at invented paths under `/ev/`, via `window.va("pageview", { route, path })` — the exact call `@vercel/analytics/next` makes on every route change. See [track.ts](src/lib/track.ts) for the event names.

Three rules that must survive a refactor:

- **Never replace this with redirect routes** (`/go/whatsapp` → 307 → `wa.me`). The tracker is a client-side script; on a server redirect the browser never renders HTML at that path, so nothing loads and **nothing is recorded**. A client-side interstitial would work but puts a flash and a delay on the most important path in the site.
- **Links carry `data-ev`, never `onClick`.** One delegated capture-phase listener in `Metrics` reads it, so Hero, Services and Footer stay Server Components and no per-link JS ships. Adding a measured link means adding the attribute and nothing else.
- **`trackEvent` primes `window.vaq` itself.** Events fired during mount (the traffic source) run *before* `<Analytics />`'s effect creates the queue, and were being dropped entirely. This was caught only by driving a real browser.

**Quota.** 50,000 events/month, pooled across every project on the team, page views and synthetic ones costing the same. A full visit here spends about 5, so the ceiling is near 10,000 visits/month; over it, Vercel pauses collection rather than billing. `surlabs-demos` currently has no analytics — if that changes, it eats the same budget. Speed Insights is a **separate, tighter** quota (10,000 data points, several per visit) and Hobby allows it on **one project only**, which is why it renders in production only.

**Verifying it.** `mode="development"` (anything that isn't a production Vercel deploy) loads Vercel's debug script, which logs `[view] <url>` to the console and sends nothing. Drive a real browser and read those console lines — see `scratchpad/verify-metrics.mjs`. Do **not** verify by stubbing `window.va`: the real script replaces it on load, so a spy only ever catches the first queued event and everything looks broken.

### SEO: one page, so the entity does the work

[site.ts](src/lib/site.ts) is the single source for the canonical URL, description and service list; metadata, `robots.ts`, `sitemap.ts` and the JSON-LD all read from it.

**The canonical host is `www.surlabs.tech`.** The apex redirects there, so `SITE_URL` carries the `www` and everything else derives from it. `metadataBase` used to point at the apex, which made every Open Graph URL resolve to the host that redirects. If the preference ever flips in the Vercel dashboard, change that one constant.

**The apex redirect is a 307, and it should be a 308.** A temporary redirect tells search engines to keep both hosts, splitting the signals. It's a domain setting in the Vercel dashboard, not something this repo can fix.

**Schema lives in [schema.ts](src/lib/schema.ts) as one `@graph`**, not three separate tags, so the nodes reference each other by `@id` and read as one entity. `ProfessionalService` declares only city and country: **there is no public street address and inventing one to unlock Google's local rich result is not an option.** The real lever for local search is a Google Business Profile, which is free and lives outside this repo.

**[faq.ts](src/lib/faq.ts) feeds both the visible section and the `FAQPage` schema, and that is not a convenience.** Marking up answers a visitor cannot see is grounds for a manual penalty, so the two can never diverge. The section renders every answer openly rather than in a `<details>` accordion for the same reason, plus the text is the whole asset: it is what gets indexed and what an AI assistant can quote.

The questions come from the real objections in `.agents/product-marketing.md`. **No prices or timelines appear because there is still no public pricing policy** — when there is one, the first answer is the one to change, and it will be the highest-value edit on the page.

**Don't chase keywords in the visible copy.** The body deliberately omits "desarrollo" and "pyme"; those ride in the description and the schema. The headlines are brand copy and stuffing them reads worse to humans and measurably worse to AI engines.

**`/ev/` is disallowed in robots.txt** — those paths are the synthetic analytics views, not pages. AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended) are allowed on purpose: getting named when someone asks an assistant for a developer in Montevideo is worth more than the visit it costs.

## Conventions

- All user-facing copy is **Rioplatense Spanish** ("Hablemos", "Contanos", "Probalo"). Code, comments and commits are English.
- **One CTA label per intent.** Contact is always "Hablemos" — nav, hero, services, footer. Never introduce "Contactanos" or "Escribinos" as a second label for the same action. (The WhatsApp block's "Escribinos ahora" is the channel itself, not a nav CTA.)
- **No em-dashes** (`—` or `–`) in any user-facing string. Use a regular hyphen, a comma or two sentences.
- **No invented numbers.** A "40% less absenteeism" claim was removed because no data backed it. There is currently no social proof on the site by choice: no clients to name yet, so trust is built with 12 working demos and a transparent process. Don't add fake testimonials or logo walls.
- Commits use conventional prefixes: `feat:`, `fix:`, `perf:`, `refactor:`, `style:`.
- Icons come from `@phosphor-icons/react/dist/ssr` (the SSR entry, so they render in Server Components). One family only. Keep imports named so `optimizePackageImports` can tree-shake.
- `cn()` in [src/lib/utils.ts](src/lib/utils.ts) exists but is currently used by zero components.

## Verifying visual changes

Chrome on macOS **clamps headless windows to a 500px minimum width**, so `--window-size=390,844` silently renders at 500 and crops the screenshot. Mobile bugs "found" that way are usually not real. For anything responsive, drive a real browser:

```bash
# in a scratch dir, not this repo
npm install playwright-core
# then launch with executablePath pointing at /Applications/Google Chrome.app/...
# and set an explicit viewport; also assert
# document.documentElement.scrollWidth === clientWidth to catch overflow
```

Sections below the fold need real scrolling: `scroll-behavior: smooth` defeats anchor-jump screenshots, and a tall viewport inflates `100dvh` so the hero swallows the whole capture.

## Repo quirks

- `.claude/worktrees/trusting-khorana-fd9b33/` is a stale detached-HEAD worktree pinned at `905c52b`. Not the working tree; never edit files there.
- `next.config.ts` pins `turbopack.root` because a stray `package-lock.json` in the user's home directory made Next infer the wrong workspace root.
- `.claude/` is untracked and not in `.gitignore`.
