# RedwoodSDK — Authoritative Usage Rules

We are using RedwoodSDK on Cloudflare Workers.

Constraints:

- No Node.js APIs
- Edge runtime only
- Use Durable Objects for realtime
- Use D1 for persistence
- Use KV for caching
- Use R2 only for large assets

Architectural Rules:

- Never mix domain logic with infrastructure
- Use server functions for mutations
- Use streaming for live updates
- No long blocking operations
