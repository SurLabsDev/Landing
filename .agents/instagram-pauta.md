# Pauta en Meta · Plan para presupuesto chico

**Presupuesto de partida:** 100 UYU por día (~2,5 USD, ~70 USD al mes)
**Creado:** 2026-07-24

---

## Lo primero: qué se puede y qué no con esta plata

Conviene tenerlo claro antes de gastar el primer peso, para no sacar conclusiones equivocadas.

**No vas a salir de la fase de aprendizaje.** Meta necesita unas 50 conversiones semanales por conjunto de anuncios para optimizar de verdad. Vos vas a estar muy lejos. Consecuencias reales:

- La entrega va a ser irregular: días con muchas impresiones y días con casi ninguna.
- **No vas a poder comparar creatividades entre sí con rigor.** Si el anuncio A tiene mejor costo por resultado que el B con 15 conversiones de muestra, eso es ruido, no una señal.
- Meta va a sugerirte subir el presupuesto todo el tiempo. Ignoralo hasta que tengas datos propios.

**Qué sí podés esperar** (estimaciones para público local uruguayo, no promesas):

| Métrica | Rango esperable al mes |
|---|---|
| Gasto | ~3.000 UYU |
| Impresiones | 15.000 a 35.000 |
| Clics | 100 a 300 |
| **Conversaciones de WhatsApp** | **10 a 40** |

**Cómo juzgarlo:** por conversaciones y clientes, no por métricas de plataforma. Si en un mes tenés 20 conversaciones y cerrás una, la pauta se pagó sola varias veces. Si tenés 200 impresiones y cero conversaciones, ahí sí hay algo roto.

---

## La corrección importante sobre las creatividades

El manual moderno de Meta dice "producí volumen de creatividades y dejá que el algoritmo elija". **Eso asume presupuesto para repartir.** Con 2,5 dólares por día, seis creatividades reciben 40 centavos cada una y ninguna se entrega de verdad.

Con este presupuesto:

- **Tres creatividades como máximo, corriendo a la vez.**
- Se rotan **cada dos semanas**, no se acumulan.
- Cuando el presupuesto suba, ahí sí se pasa al modelo de volumen.

---

## Estructura de la campaña

Una sola campaña. Nada de probar públicos en paralelo: repartir esta plata es la forma más rápida de que no funcione nada.

| Campo | Valor | Por qué |
|---|---|---|
| **Objetivo** | Interacción → **Mensajes de WhatsApp** | Tu conversión real es una conversación, no una visita. Y esquiva el problema de no tener píxel |
| **Ubicación de conversión** | WhatsApp | |
| **Presupuesto** | A nivel campaña (CBO), 100 UYU/día | Deja que Meta mueva la plata entre creatividades sola |
| **Ubicaciones** | Automáticas | Con este presupuesto, restringir ubicaciones encarece todo |
| **Segmentación geográfica** | Montevideo + Canelones, radio de ciudad | |
| **Edad** | 28 a 60 | Un dueño de negocio establecido rara vez tiene menos de 28 |
| **Intereses** | **NINGUNO** | Ver abajo. Esto es contraintuitivo y es importante |

### Por qué no se cargan intereses

Desde el algoritmo Andromeda, **apilar intereses en Meta perjudica el rendimiento.** El sistema encuentra a la persona correcta mejor que tus filtros, y cada filtro que agregás le achica el margen de maniobra y te encarece el CPM.

La segmentación real va **adentro de la creatividad**. La palabra "restaurante" en el gancho hace dos cosas a la vez: le dispara la identidad al que mira, y le dice a Meta a quién mostrárselo. Esa es la palanca, no el panel.

Si el instinto te pide cargar "propietarios de pequeñas empresas", aguantá. Probalo recién cuando tengas un mes de datos con público amplio para comparar.

---

## Por qué NO se pauta ninguno de los tres Reels tal como están

Los tres terminan en **"link en la bio"**. Un anuncio tiene botón propio, así que mandar a la bio a alguien que nunca te vio es tirar el clic.

Los Reels quedan para orgánico. Para pauta van los estáticos de `carruseles/pauta/`, que ya cierran con WhatsApp.

Cuando quieras pautar video, hay que recortarles el cierre y reemplazarlo por uno mudo sin llamado a la acción, dejando que el botón de Meta haga ese trabajo.

---

## Las tres creatividades

Están en `../surlabs-social/carruseles/pauta/`, en 1080x1350.

| Archivo | Gancho | A quién le habla |
|---|---|---|
| `ad-gastro.png` | tu carta sigue siendo una **foto** | Restaurantes, bares, cafés |
| `ad-turnos.png` | el teléfono suena **mientras** estás atendiendo | Consultorios, peluquerías, gimnasios, estudios |
| `ad-general.png` | algo de tu negocio lo estás haciendo **a mano** | Cualquier rubro, la red de arrastre |

Las tres llevan la palabra del rubro adelante a propósito: es el disparador de identidad y la señal de segmentación al mismo tiempo.

### El texto del anuncio (va en Meta, no en la imagen)

En 2026 el texto largo rinde mejor que el corto, porque le da a Meta más contexto para entender a quién mostrárselo.

**Para `ad-gastro`:**

```
Tu carta sigue siendo una foto que mandás por WhatsApp.

El cliente la abre. No se lee. Pregunta el precio. Esperás. Contesta otro. Se enfría.

Hacemos cartas digitales que se actualizan solas, se ven bien en cualquier teléfono y no dependen de que alguien esté libre para contestar.

No es una promesa: tenemos doce productos funcionando y abiertos al público. Podés entrar y usarlos antes de hablar con nosotros.

Escribinos y te decimos si tu caso se puede resolver. Si no se puede, también te lo decimos.
```

**Para `ad-turnos`:**

```
El teléfono suena mientras estás atendiendo. No podés atender. Llamó a otro lado.

Un sistema de turnos no es un lujo de cadena grande. Es dejar de perder clientes por estar ocupado trabajando.

El cliente entra, elige el horario y reserva. Le llega el recordatorio solo. Vos ves la agenda del día de un vistazo.

Está funcionando y lo podés probar antes de hablar con nosotros.

Contanos cómo tomás los turnos hoy y te decimos qué se puede automatizar.
```

**Para `ad-general`:**

```
Todo negocio chico tiene una parte que sigue haciendo a mano: las reservas, los pedidos, la lista de precios, el stock en una planilla.

Funciona. Hasta que crecés y el cuello de botella pasás a ser vos contestando.

Construimos software a medida para negocios de Montevideo. Doce productos terminados, de doce rubros distintos, todos abiertos para que los pruebes antes de contratarnos.

Contanos en qué se te va el tiempo. Te decimos si se puede resolver y cuánto sale, sin vueltas.
```

**Botón:** Enviar mensaje
**Mensaje prellenado sugerido:** `Hola, vi el anuncio y quiero saber más.`

---

## Rutina semanal, 15 minutos

1. **Contestá los mensajes rápido.** Meta premia las cuentas que responden, y un dueño de pyme que escribe un martes a las 21 espera respuesta ese día.
2. Anotá en una planilla: rubro del que escribió, qué pidió, si cerró. **Ese es tu dato real**, no el panel de Meta.
3. No toques la campaña. Cambiar presupuesto o creatividades reinicia el aprendizaje, y a tu escala eso duele mucho.

**A las dos semanas:** rotá las tres creatividades por tres nuevas, usando el mismo molde con otro rubro adelante.

**Al mes:** mirá la planilla, no la plataforma. Si hay un rubro que escribe más que el resto, ese es el próximo Reel orgánico (posteo 6 del calendario) y la próxima tanda de estáticos.

---

## Antes de lanzar

En orden, porque cada uno depende del anterior:

1. Página de Facebook vinculada a `@surlabs.tech`. **Sin página de Facebook no se puede pautar**, aunque el anuncio salga solo en Instagram.
2. Administrador comercial (Meta Business Suite) con la página y la cuenta de Instagram adentro.
3. **Migrar el +598 91 661 552 a WhatsApp Business.** Es gratis, conserva el historial y es requisito para las campañas de clic a WhatsApp.
4. Conectar el WhatsApp Business al administrador comercial.
5. Medio de pago cargado. En Uruguay se suma IVA sobre el gasto publicitario, así que presupuestá un poco más de lo que ves en el panel.
