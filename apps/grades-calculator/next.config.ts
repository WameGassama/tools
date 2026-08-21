import { loadEnvConfig } from "@next/env"
import type { NextConfig } from "next"
import path from "path"

// Monorepo root (two levels up) holds the shared .env with RESEND_API etc. –
// Next.js only auto-loads .env files from this app's own directory otherwise.
// forceReload is required: Next.js already ran loadEnvConfig for this app's
// own (env-file-less) directory before next.config.ts is evaluated, so a
// plain call here would be a no-op and silently keep RESEND_API unset.
loadEnvConfig(path.join(__dirname, "..", ".."), process.env.NODE_ENV !== "production", console, true)

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@workspace/ui"],
  turbopack: {
    root: path.join(__dirname, "../../.."),
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
        as: "*.ts",
      },
    },
  },
}

export default nextConfig
