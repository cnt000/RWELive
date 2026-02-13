# Global AI Rules

This project uses RedwoodSDK running on Cloudflare Workers.

Hard constraints:
- Edge runtime only
- No Node.js APIs
- No Express-style servers
- No long blocking operations
- No in-memory global state

State rules:
- Realtime state must use Durable Objects
- Persistence must use D1
- Cache must use KV
- Large objects must use R2

Architecture rules:
- Follow Clean Architecture
- Separate Domain, Application, Infrastructure
- No business logic inside route handlers
- All mutations must go through application services

Security rules:
- RBAC required
- Validate all inputs
- Assume hostile environment

If uncertain about API, search inside /docs/redwoodsdk-source first.
Never invent RedwoodSDK APIs.
