---
name: ui-automation
description: Operate TradingView Desktop UI controls when a dedicated MCP tool cannot complete the requested task. Use for opening panels, finding controls, clicking, typing, keyboard shortcuts, mouse actions, scrolling, and advanced UI automation.
---

# TradingView UI Automation

Prefer a dedicated chart, data, Pine, alert, layout, or watchlist tool whenever one exists. For UI-only work, first use `tv_ui_state` or `ui_find_element`, then use `ui_open_panel`, `ui_click`, `ui_keyboard`, `ui_type_text`, `ui_hover`, `ui_scroll`, or `ui_mouse_click` as needed. Use `ui_fullscreen` only when requested.

Coordinate clicks and typing are fragile; verify the resulting UI state after each material action. `ui_evaluate` executes arbitrary JavaScript in the authenticated TradingView page. Use it only when the user explicitly requests advanced automation and no dedicated tool can do the job, with confirmation immediately before execution.
