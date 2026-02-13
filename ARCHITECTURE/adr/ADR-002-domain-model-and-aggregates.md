# ADR-002: Domain Model and Aggregate Boundaries

- Status: Accepted
- Date: 2026-02-13

## Context

The platform includes realtime chat, moderation, plugins, and role-based permissions. We need clear aggregate boundaries and invariants before implementation.

## Decision

Define these core entities and aggregates:

- `User`, `Role`, `Permission`, `Membership`
- `LiveEvent`, `LiveRoom`
- `Message`, `Question`
- `PluginDefinition`, `PluginInstance`
- `Suggestion`
- `AuditRecord`

Aggregate ownership:

- Identity aggregate owns role assignment and permission resolution.
- LiveEvent aggregate owns event lifecycle state transitions.
- Chat/QA aggregate owns moderation state transitions.
- Plugin aggregate owns activation state and configuration validity.

## Consequences

- Invariants become explicit and enforceable in application services.
- Enables targeted persistence and caching strategies.
- Requires clear event contracts across aggregates.

## Compliance Rules

- Cross-aggregate updates must be coordinated by application services.
- Domain models remain storage-agnostic and transport-agnostic.
