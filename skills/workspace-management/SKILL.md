---
name: workspace-management
description: Manage TradingView tabs, saved layouts, multi-pane chart grids, pane focus, and pane symbols. Use when the user asks to organize or switch their TradingView workspace.
---

# TradingView Workspace Management

Inspect before changing state: use `tab_list`, `layout_list`, and `pane_list`. Then use the narrowest matching tool:

- `tab_new`, `layout_new`, `tab_switch`, and `tab_close` for chart tabs.
- `layout_switch` for saved layouts.
- `pane_set_layout`, `pane_focus`, and `pane_set_symbol` for multi-pane grids.

Opening, switching, or changing layouts affects the user's workspace. `tab_close` requires explicit confirmation immediately before closing a tab. Confirm a new layout or grid arrangement when it was not precisely specified.
