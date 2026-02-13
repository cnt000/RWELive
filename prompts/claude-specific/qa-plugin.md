Implement Q/A plugin.

Features:
- Authenticated users submit question.
- Admin approves question.
- Admin marks question answered.
- Realtime broadcast of approved questions.

Architecture:
- Durable Object QARoom
- State:
  {
    pending: Question[]
    approved: Question[]
    answered: Question[]
  }

Deliver:
- APIs for submit, approve, answer
- React UI (user + admin panel)
- Validation and rate limiting
