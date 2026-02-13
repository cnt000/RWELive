Implement a realtime chat system.

Architecture:
- One Durable Object per live stream.
- WebSocket-based.
- Persist last 200 messages in D1.
- In-memory buffer for fast broadcast.

Features:
- Send message
- Emoji reactions
- Broadcast to all connected clients
- Rate limiting per user (simple cooldown)

Deliver:
1. ChatRoom Durable Object
2. /api/chat/connect endpoint
3. Message validation logic
4. React Chat component
5. Types for message payload

All logic must be edge-compatible.
Avoid any Redis or external services.
