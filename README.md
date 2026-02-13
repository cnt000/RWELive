# RWELive

Edge-first Live Companion Platform built on RedwoodSDK and Cloudflare Workers.

## Toolchain Requirements

- Node.js `24.x` (pinned via Volta)
- `pnpm` `10.x`
- `npm` and `yarn` are intentionally blocked for installs in this repo

## Quick Start

```bash
pnpm install
pnpm dev:init
pnpm dev
```

## Notes

- Runtime target is Cloudflare Workers (edge only).
- Realtime state uses Durable Objects.
- If bindings change in `wrangler.jsonc`, rerun:

```bash
pnpm run generate
```
