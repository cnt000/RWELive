# ADR-005: Realtime Architecture with Durable Objects

- Status: Accepted
- Date: 2026-02-13

## Context

Realtime chat and engagement require stateful coordination with strong per-room consistency in an otherwise stateless Workers model.

## Decision

Use Durable Objects as the realtime authority:

- One Durable Object per logical live room/stream.
- Maintain connection registry and broadcast flow in the room object.
- Apply room-local rate limiting and moderation gates in the realtime path.
- Use key-based sharding by room/event identifier.

## Consequences

- Strong consistency within each room instance.
- Horizontal scalability across room identifiers.
- Requires careful key design for very large events.

## Compliance Rules

- Realtime state must not rely on global in-memory process state.
- Route handlers delegate realtime coordination to Durable Objects.
