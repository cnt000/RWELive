Implement authentication for Google and Slack OAuth.

Requirements:
- Both providers usable by admin and normal users.
- Persist users in D1.
- Schema: { id, email, name, provider, role, createdAt }
- Role default: "user"
- Admin assigned via whitelist in ENV variable ADMIN_EMAILS

Implement:
- /api/auth/google
- /api/auth/google/callback
- /api/auth/slack
- /api/auth/slack/callback
- Secure session cookie (HttpOnly, SameSite=Lax)
- Session persistence via KV
- Middleware to attach user to request

Ensure:
- No Node-specific libraries.
- Token verification done properly.
- Error handling clean and structured.

Generate files one by one.
