# RedwoodSDK — Authoritative Context

Runtime:
- Cloudflare Workers
- V8 isolate
- No Node runtime

Core capabilities:
- Server functions
- Edge rendering
- Durable Objects integration
- D1 database
- KV storage
- R2 storage

Design philosophy:
- Edge-first
- Strong typing
- Minimal infrastructure abstraction

Realtime:
- Must use Durable Objects
- One DO per logical room
