Implement Lottery plugin.

Requirements:
- Admin can open/close registration.
- Users can join.
- QR code join link supported.
- Winner selection server-side (crypto secure).
- Wheel animation only client-side.
- Winner broadcast in realtime.

Architecture:
- Durable Object: LotteryRoom
- State:
  {
    isOpen: boolean
    participants: User[]
    winner?: User
  }

Deliver:
- Lottery Durable Object
- Admin APIs (open, close, draw)
- User API (join)
- React Lottery UI
- Anti-cheat checks
