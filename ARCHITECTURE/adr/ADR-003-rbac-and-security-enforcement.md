# ADR-003: RBAC and Security Enforcement Model

- Status: Accepted
- Date: 2026-02-13

## Context

The platform handles live interactions and privileged moderation actions in a hostile environment. We need consistent authorization and validation at every mutable boundary.

## Decision

Adopt scoped RBAC with roles:

- Viewer
- Moderator
- Host
- Admin

Scopes:

- Global scope
- Event scope
- Room scope

Enforcement model:

- Authentication and input validation at ingress boundaries.
- Authorization checks in application services before mutations.
- Audit logging for privileged actions.

## Consequences

- Strong default security posture.
- Slightly higher implementation overhead for policy checks.
- Better traceability for operational incidents.

## Compliance Rules

- No privileged mutation without RBAC verification.
- All external inputs are treated as untrusted.
