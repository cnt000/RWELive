# ADR-006: Persistence Model with D1, KV, and R2

- Status: Accepted
- Date: 2026-02-13

## Context

We need durable persistence, fast read paths, and large object storage with cloud-native primitives aligned to Workers runtime constraints.

## Decision

Storage responsibilities:

- D1: system of record for relational and transactional business data
- KV: cache and low-latency read acceleration
- R2: large object and media storage
- Durable Objects: hot realtime state and coordination

Initial D1 tables (proposal):

- users, roles, permissions, user_roles
- live_events, event_memberships
- messages, questions
- plugin_definitions, plugin_instances
- suggestions
- audit_logs

## Consequences

- Clear separation of durable vs cached vs large object data.
- More predictable operational behavior and capacity planning.
- Requires cache invalidation strategy around D1 mutations.

## Compliance Rules

- Persistence of business state goes through D1 via application services.
- KV is not an authoritative source of record.
