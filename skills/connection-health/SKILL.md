---
name: connection-health
description: Check, diagnose, or restore the local TradingView Desktop connection. Use when the user asks whether TradingView is connected, healthy, running, available, or not working.
---

# TradingView Connection Health

Use this workflow before other live TradingView work when connection status is unknown.

1. Call `tv_health_check` first.
2. Report the result plainly. Distinguish: local-network access unavailable, CDP port unreachable, no TradingView chart target, and chart API unavailable. Do not label TradingView disconnected from a single `fetch failed` result until local access to `127.0.0.1:9222` has been available and retried.
3. Use `tv_ui_state` for a focused view of open panels and controls, or `tv_discover` only when diagnosing available internal API paths.
4. If TradingView is not running with CDP enabled, explain that `tv_launch` can start it. Get the user's confirmation before calling it because its default behavior can close an existing TradingView instance.
5. Use `tv_update` only when the user explicitly asks to update this MCP. Explain that it updates the local installation and requires an MCP restart.

Never infer that a successful MCP server startup means the TradingView Desktop connection is healthy; `tv_health_check` verifies the live CDP connection.
