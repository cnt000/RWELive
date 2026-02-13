# Architecture Diagrams (Mermaid)

These diagrams are aligned with the current ADR pack and edge/runtime constraints.

## 1) Bounded Context Map

```mermaid
flowchart LR
    IA[Identity & Access]
    LS[Live Session]
    CQA[Chat & Q/A]
    PR[Plugin Runtime]
    SE[Suggestions & Engagement]
    CM[Content & Media]
    YT[Integrations: YouTube ACL]

    IA --> LS
    IA --> CQA
    IA --> PR
    LS --> CQA
    LS --> PR
    CQA --> SE
    PR --> SE
    CM --> LS
    YT --> LS
    YT --> CQA
```

## 2) Clean Architecture Layers

```mermaid
flowchart TB
    P[Presentation<br/>Routes / Edge UI mapping]
    A[Application<br/>Use Cases / Orchestration]
    D[Domain<br/>Entities / Value Objects / Policies]
    I[Infrastructure<br/>DO / D1 / KV / R2 / External Adapters]

    P --> A
    A --> D
    A --> I

    note1[No business logic in route handlers]
    note2[All mutations go through application services]
    P -.-> note1
    A -.-> note2
```

## 3) Realtime Flow with Durable Objects

```mermaid
sequenceDiagram
    participant Client
    participant Worker as Edge Route Handler
    participant RoomDO as Durable Object (Room)
    participant App as Application Service
    participant D1 as D1

    Client->>Worker: Send chat message
    Worker->>App: authorize + validate request
    App->>RoomDO: forward validated command
    RoomDO->>RoomDO: rate limit + moderation gate
    RoomDO->>D1: persist message metadata
    RoomDO-->>Client: broadcast message/event
```

## 4) Storage Responsibilities

```mermaid
flowchart LR
    APP[Application Services]
    DO[Durable Objects]
    D1[(D1<br/>System of Record)]
    KV[(KV<br/>Cache / Fast Reads)]
    R2[(R2<br/>Large Objects)]

    APP --> D1
    APP --> KV
    APP --> R2
    APP --> DO
    DO --> D1
    D1 -. cache refresh / invalidation .-> KV
```

## 5) RBAC Enforcement Path

```mermaid
flowchart LR
    U[User Request] --> B[Boundary Validation]
    B --> AUTH[Authentication]
    AUTH --> RBAC[RBAC Check<br/>Global/Event/Room Scope]
    RBAC -->|allowed| UC[Application Use Case]
    RBAC -->|denied| DENY[Reject + Audit]
    UC --> MUT[State Mutation]
    MUT --> AUDIT[Audit Log]
```

## 6) Plugin Lifecycle and Isolation

```mermaid
stateDiagram-v2
    [*] --> Registered
    Registered --> Configured
    Configured --> Active
    Active --> Inactive
    Inactive --> Active
    Active --> [*]

    note right of Active
      PluginContract required
      No dynamic code execution
      State isolated per event
    end note
```

## 7) YouTube Integration Boundary (ACL)

```mermaid
flowchart LR
    YT[YouTube API/Webhook]
    ACL[Integration Adapter<br/>Validation + Normalization]
    APP[Application Service]
    DO[Durable Object]
    CORE[Domain Model]

    YT --> ACL
    ACL --> APP
    APP --> CORE
    APP --> DO
```

## 8) C4 - Level 1 (System Context)

```mermaid
flowchart LR
    Viewer[Viewer]
    Moderator[Moderator]
    Host[Host]
    Admin[Admin]

    Platform[Live Companion Platform<br/>RedwoodSDK on Cloudflare Workers]

    YouTube[YouTube Platform]
    IdentityProvider[External Identity Provider]

    Viewer --> Platform
    Moderator --> Platform
    Host --> Platform
    Admin --> Platform

    Platform --> YouTube
    Platform --> IdentityProvider
```

## 9) C4 - Level 2 (Container)

```mermaid
flowchart TB
    subgraph Edge["Cloudflare Edge"]
        WebUI[Web App / Presentation]
        APIRoutes[Edge Route Handlers]
        AppSvc[Application Services]
        Domain[Domain Model]
        PluginRuntime[Plugin Runtime]
        RealtimeDO[Durable Objects]
    end

    D1[(D1)]
    KV[(KV)]
    R2[(R2)]
    YouTube[YouTube Integration Adapter]
    IdP[Identity Provider Adapter]

    WebUI --> APIRoutes
    APIRoutes --> AppSvc
    AppSvc --> Domain
    AppSvc --> PluginRuntime
    AppSvc --> RealtimeDO

    AppSvc --> D1
    AppSvc --> KV
    AppSvc --> R2
    AppSvc --> YouTube
    AppSvc --> IdP
```

## 10) C4 - Level 3 (Component: Realtime + Chat/QA)

```mermaid
flowchart LR
    Route[Chat Route Handler]
    Authz[Auth + RBAC Guard]
    ChatUseCase[ChatApplicationService]
    QuestionUseCase[QuestionApplicationService]
    ModerationPolicy[Moderation Policy]
    RateLimitPolicy[Rate Limit Policy]
    RoomDO[LiveRoom Durable Object]
    MessageRepo[Message Repository]
    QuestionRepo[Question Repository]
    AuditRepo[Audit Repository]
    D1[(D1)]
    KV[(KV)]

    Route --> Authz
    Authz --> ChatUseCase
    Authz --> QuestionUseCase

    ChatUseCase --> ModerationPolicy
    ChatUseCase --> RateLimitPolicy
    ChatUseCase --> RoomDO
    ChatUseCase --> MessageRepo
    ChatUseCase --> AuditRepo

    QuestionUseCase --> ModerationPolicy
    QuestionUseCase --> RoomDO
    QuestionUseCase --> QuestionRepo
    QuestionUseCase --> AuditRepo

    MessageRepo --> D1
    QuestionRepo --> D1
    AuditRepo --> D1
    ChatUseCase --> KV
```

## 11) C4 - Level 4 (Deployment / Runtime View)

```mermaid
flowchart TB
    UserDevice[User Device<br/>Browser]

    subgraph Cloudflare["Cloudflare"]
        Worker[RedwoodSDK Worker]
        subgraph DurableObjects["Durable Objects Namespace"]
            RoomA[Room DO: event-1]
            RoomB[Room DO: event-2]
            RoomN[Room DO: event-n]
        end
        D1[(D1 Database)]
        KV[(KV Namespace)]
        R2[(R2 Bucket)]
    end

    ExternalYT[YouTube APIs]
    ExternalIdP[Identity Provider]

    UserDevice --> Worker
    Worker --> RoomA
    Worker --> RoomB
    Worker --> RoomN
    Worker --> D1
    Worker --> KV
    Worker --> R2
    Worker --> ExternalYT
    Worker --> ExternalIdP
```
