# Durable Object Patterns

Chat Room Pattern:
- One Durable Object per live stream
- Maintain connected sockets map
- Broadcast on message

Rate Limiting:
- Track message count per user per minute
- Reject over threshold
