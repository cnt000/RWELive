# ADR-007: YouTube Integration Boundary (ACL)

- Status: Accepted
- Date: 2026-02-13

## Context

External integrations must not leak third-party semantics into the core domain model or break edge/runtime constraints.

## Decision

Introduce an anti-corruption layer (ACL) for YouTube integration:

- Infrastructure adapter receives external payloads.
- Adapter validates and normalizes payloads into internal commands/events.
- Application services orchestrate state transitions.
- Realtime updates are emitted through Durable Objects.

Reliability requirements:

- Idempotency keys for external event processing.
- Retry strategy for transient failures.
- Reject malformed payloads after validation.

## Consequences

- Domain remains decoupled from third-party API changes.
- Integration complexity stays isolated in infrastructure adapters.
- Requires clear observability for external failure modes.

## Compliance Rules

- No YouTube-specific logic inside domain entities.
- All integration payloads must be validated before use.
