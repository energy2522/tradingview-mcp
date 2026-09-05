---
name: chart-control
description: Inspect or change a TradingView chart's symbol, timeframe, chart type, visible date range, or active studies. Use for chart setup, navigation, symbol lookup, or chart-state questions.
---

# Chart Control

Start with `chart_get_state` to identify the active symbol, timeframe, chart type, and studies. Use `symbol_search` before setting an ambiguous ticker and `symbol_info` when exchange or instrument metadata matters.

Use the dedicated tools for changes:

- `chart_set_symbol`, `chart_set_timeframe`, and `chart_set_type` for chart setup.
- `chart_get_visible_range`, `chart_set_visible_range`, and `chart_scroll_to_date` for navigation.
- `chart_manage_indicator` for built-in indicator add/remove operations.

Changing chart state affects the user's visible workspace. Confirm a material change when it was not clearly requested, then refresh `chart_get_state` after changing a symbol, timeframe, or chart type. Entity IDs are session-specific.
