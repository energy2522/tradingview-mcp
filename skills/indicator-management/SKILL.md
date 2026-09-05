---
name: indicator-management
description: Find, add, remove, configure, show, or hide TradingView indicators, strategies, and community scripts. Use when the user asks to manage studies on a chart.
---

# Indicator Management

Read `chart_get_state` first to get current studies and their session-specific entity IDs. Use `indicator_search` to find built-ins, strategies, community scripts, or saved scripts, then `indicator_add` to add a selected result.

Use `chart_manage_indicator` for a direct built-in add/remove operation, `indicator_set_inputs` to configure a study, and `indicator_toggle_visibility` to show or hide it. Use full TradingView names for direct adds, such as `Relative Strength Index` rather than `RSI`.

Adding, removing, changing, or hiding a study changes the user's chart. Confirm intent if it is not explicit, and report the returned entity ID for any study the user may want to adjust later in this session.
