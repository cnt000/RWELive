# CLAUDE CODE -- ENTERPRISE ARCHITECTURE PROMPTS

## 0️⃣ SYSTEM PROMPT --- Enterprise Mode

You are a Principal Software Architect designing a production-grade,
edge-native live event platform using RedwoodSDK and Cloudflare.

Priorities: - Clean Architecture - Domain-driven design (DDD-lite) -
Separation of concerns - Security-first design - Observability -
Scalability - Extensibility (plugin-first system) - Strong typing -
Minimal dependencies - Edge runtime compatibility only

Never: - Mix infrastructure and domain logic - Use Node-only APIs -
Generate monolithic files - Hide architectural decisions

Always: - Propose architecture before code - Define domain boundaries -
Define contracts (types/interfaces) - Justify technical decisions
briefly - Optimize for maintainability

------------------------------------------------------------------------

## 1️⃣ Project Framing (Conference Narrative Prompt)

We are building an enterprise-grade Live Companion Platform.

Core principles: - Edge-first architecture - Real-time state consistency
without centralized servers - Pluggable feature system - OAuth-based
identity federation - Admin-controlled dynamic configuration

Tasks: 1. Define system architecture diagram (logical layers). 2. Define
bounded contexts. 3. Define core domain models. 4. Define infrastructure
boundaries. 5. Define scaling strategy. 6. Define failure modes.

Focus only on architecture and reasoning.

------------------------------------------------------------------------

## 2️⃣ Layered Architecture Definition

Design the project using the following layers:

1.  Presentation Layer (React UI)
2.  Application Layer (Use cases)
3.  Domain Layer (Entities & Business Rules)
4.  Infrastructure Layer (Cloudflare bindings, DB, Durable Objects)

Define: - Responsibilities of each layer - Dependency direction rules -
Folder structure reflecting this separation

------------------------------------------------------------------------

## 3️⃣ Identity & Access Architecture

Design a federated authentication system using:

-   Google OAuth
-   Slack OAuth

Requirements: - Stateless edge-friendly session handling - Secure
HttpOnly cookie - Role-based access control (RBAC) - Admin whitelist via
environment variable - Middleware-based authorization enforcement

Deliver: 1. Identity domain model 2. Auth use cases 3. Session service
abstraction 4. Middleware enforcement 5. Security threat analysis

------------------------------------------------------------------------

## 4️⃣ Realtime Architecture

Design a globally scalable realtime system using Durable Objects.

Requirements: - One ChatRoom Durable Object per live stream - Horizontal
sharding strategy - Rate limiting strategy - Message persistence
strategy - Reconnect strategy - Abuse mitigation

Deliver architecture, scalability analysis (100k users) and cost
estimation model.

------------------------------------------------------------------------

## 5️⃣ Plugin System --- Enterprise Design

Goals: - Toggleable - Extensible - Isolated - Secure

Constraints: - No dynamic code execution - Runtime activation only -
State isolation per event

Deliver: 1. Plugin contract interface 2. Registry service 3. Activation
lifecycle 4. Versioning strategy 5. Security model

------------------------------------------------------------------------

## 6️⃣ Lottery Plugin --- Production Grade

Requirements: - Secure random selection - Anti-cheat guarantees - Audit
trail persistence - QR-based registration - Idempotent APIs - Admin-only
actions enforced

Deliver domain entities, Durable Object design, audit logging and
failure analysis.

------------------------------------------------------------------------

## 7️⃣ Q/A Plugin --- Moderation Architecture

Features: - Question submission - Moderation queue - Approval -
Highlighting - Mark as answered

Include anti-spam protection, rate limiting and replay capability.

------------------------------------------------------------------------

## 8️⃣ YouTube Integration --- Enterprise Design

Requirements: - Admin configures channel ID - Fetch active broadcasts -
Fallback to Search API - Cache responses in KV (TTL configurable) -
Persist selected live in settings table - Audit log selection changes

Deliver integration abstraction, caching strategy and failure handling
logic.

------------------------------------------------------------------------

## 9️⃣ Observability & Operational Design

Design:

-   Structured logging strategy
-   Error categorization
-   Metrics strategy
-   Alert strategy
-   Durable Object tracing strategy
-   Debug mode strategy

Edge-compatible only.

------------------------------------------------------------------------

## 🔟 Scalability & Evolution Strategy

Analyze behavior under:

-   1k concurrent users
-   10k concurrent users
-   100k concurrent users
-   Multi-event support
-   Multi-tenant support

Propose sharding model, partitioning strategy and cost analysis.

------------------------------------------------------------------------

## 1️⃣1️⃣ Security Review Prompt

Perform a full enterprise security review including:

-   OAuth attack vectors
-   Session fixation
-   CSRF
-   XSS
-   Durable Object abuse
-   Privilege escalation

Provide threat model and mitigation strategies.

------------------------------------------------------------------------

## 🎤 Conference Closing Prompt

Summarize this architecture as if presenting at a senior engineering
conference.

Explain: - Why edge-first matters - Why Durable Objects replace Redis
clusters - Why plugin-first architecture enables extensibility -
Trade-offs vs Kubernetes-based systems - Lessons learned
