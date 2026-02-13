# ADR-001: Bounded Contexts and Layer Boundaries

- Status: Accepted
- Date: 2026-02-13

## Context

The platform must be edge-native on Cloudflare Workers, support realtime interactions, and remain maintainable at production scale. We need explicit ownership boundaries to avoid business logic leaking into route handlers.

## Decision

Adopt these bounded contexts:

1. Identity and Access
2. Live Session
3. Chat and Q/A
4. Plugin Runtime
5. Suggestions and Engagement
6. Content and Media
7. Integrations (YouTube)

Adopt Clean Architecture layering:

- `domain`: entities, value objects, invariants
- `application`: use cases and orchestration
- `infrastructure`: D1/KV/R2/DO/adapters
- `presentation`: route handlers and transport mapping only

Business logic in route handlers is forbidden.

## Consequences

- Improves testability and change isolation.
- Reduces coupling between external APIs and core business rules.
- Requires disciplined boundary enforcement in code review.

## Compliance Rules

- Mutations must enter through application services.
- Presentation may validate transport shape, not business policy.
