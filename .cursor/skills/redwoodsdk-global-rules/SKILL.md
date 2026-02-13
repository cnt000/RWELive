---
name: redwoodsdk-global-rules
description: Enforces RWELive RedwoodSDK architecture and platform constraints for Cloudflare Workers. Use for any task in this repository to keep solutions edge-compatible, cleanly layered, state-correct, and security-focused.
---

# RedwoodSDK Global Rules

Apply these rules for all tasks in this repository.

## Platform Constraints (Hard)

- Runtime is edge-only.
- Do not use Node.js APIs.
- Do not use Express-style servers.
- Do not introduce long blocking operations.
- Do not rely on in-memory global state.

## State Constraints (Hard)

- Realtime state must use Durable Objects.
- Persistence must use D1.
- Cache must use KV.
- Large object storage must use R2.

## Architecture Constraints (Hard)

- Follow Clean Architecture boundaries.
- Keep Domain, Application, and Infrastructure separated.
- Do not place business logic in route handlers.
- Route handlers should orchestrate only.
- All mutations must go through application services.

## Security Constraints (Hard)

- Enforce RBAC on protected operations.
- Validate all inputs at boundaries.
- Assume a hostile environment by default.

## RedwoodSDK API Certainty Rule (Hard)

- If uncertain about a RedwoodSDK API, search inside `/docs/redwoodsdk-source` first.
- Do not invent RedwoodSDK APIs, helpers, or behavior.

## Conflict Handling

If a user request conflicts with these rules:

1. Stop and call out the exact conflict.
2. Do not implement the violating approach.
3. Offer one or more compliant alternatives.
4. Ask the user to explicitly confirm an exception before proceeding.

## Execution Checklist

- [ ] Uses edge-compatible APIs only
- [ ] Uses correct state storage primitive (DO/D1/KV/R2)
- [ ] Keeps business logic out of route handlers
- [ ] Routes mutations through application services
- [ ] Enforces RBAC and input validation
- [ ] Verifies uncertain RedwoodSDK APIs in `/docs/redwoodsdk-source`

## Example Prompts

- "Add a new realtime feature using RedwoodSDK."
- "Design a new mutation flow for this service."
- "Refactor this route to follow clean architecture."
