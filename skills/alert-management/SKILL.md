---
name: alert-management
description: List, create, or delete TradingView price alerts. Use when the user asks to manage alerts on the current chart or symbol.
---

# Alert Management

Use `alert_list` to inspect current alerts. Use `alert_create` only with the user's explicit requested condition and settings; restate material details before creating an alert if they are ambiguous.

Use `alert_delete` for a specific alert ID only after identifying it. Deleting all alerts (`delete_all`) is destructive and requires explicit confirmation immediately before the call.
