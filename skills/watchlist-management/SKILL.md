---
name: watchlist-management
description: Read or edit a TradingView watchlist. Use when the user asks to view, add, bulk-add, or remove watchlist symbols.
---

# Watchlist Management

Use `watchlist_get` to inspect the active list and its quotes. Use `watchlist_add` for one symbol, `watchlist_add_bulk` for a deliberate list of symbols, and `watchlist_remove` only for symbols the user explicitly identified.

Adding or removing symbols changes the user's watchlist. Confirm bulk additions and removals if the exact symbol list is not explicit. Report the resulting symbols and any failures rather than silently retrying with guessed tickers.
