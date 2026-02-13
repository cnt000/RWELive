# Cloudflare Workers Execution Model

Workers are:
- Stateless
- Event-driven
- CPU time limited

Durable Objects:
- Provide stateful singleton per ID
- Strong consistency per instance
- Horizontal scaling via key sharding
