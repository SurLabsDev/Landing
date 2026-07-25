import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hay un package-lock.json en el home del usuario y Next infería ESE como
  // raíz del workspace. Fijarla evita que resuelva rutas fuera del proyecto.
  turbopack: {
    root: __dirname,
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
