# ADR-008: Edge Runtime Compliance and Delivery Sequence

- Status: Accepted
- Date: 2026-02-13

## Context

The platform must remain compliant with strict edge constraints while progressing incrementally from architecture to implementation.

## Decision

Edge compliance rules are mandatory:

- Edge runtime only
- No Node.js APIs
- No Express-style server patterns
- No long blocking operations
- No in-memory global mutable state

Delivery sequence:

1. Architecture and ADR alignment
2. Folder scaffolding by layer and context
3. RedwoodSDK + Workers infrastructure setup
4. First vertical slice (Auth/RBAC)
5. Realtime chat via Durable Objects
6. Plugin system core
7. Feature plugins and integration surfaces

## Consequences

- Reduces rework and architecture drift.
- Enables controlled risk through vertical slices.
- Requires strict review gates against ADRs.

## Compliance Rules

- Any conflicting requirement must be handled via explicit ADR update.
- Uncertain RedwoodSDK APIs must be verified in `/docs/redwoodsdk-source`.
