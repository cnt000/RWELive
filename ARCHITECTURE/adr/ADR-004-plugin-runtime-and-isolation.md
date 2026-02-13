# ADR-004: Plugin Runtime and Isolation Strategy

- Status: Accepted
- Date: 2026-02-13

## Context

The product requires extensibility through plugins while preserving stability, security, and per-event isolation.

## Decision

Use a contract-first plugin architecture:

- Every plugin must implement `PluginContract`.
- No dynamic code execution is allowed.
- Plugin activation must be toggleable by authorized operators.
- Plugin state is isolated per event.

Lifecycle:

1. Register plugin definition
2. Configure plugin instance for event
3. Activate/deactivate through application service
4. Execute through typed boundary inputs and outputs

## Consequences

- Predictable behavior and safer rollout of extensions.
- Plugin authors work within stricter constraints.
- Requires explicit compatibility/versioning policy later.

## Compliance Rules

- Plugin logic may not bypass RBAC or validation boundaries.
- Event-level isolation is mandatory for all plugin data.
