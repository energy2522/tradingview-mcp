---
name: pine-develop
description: Full Pine Script development loop — write code, compile, fix errors, iterate. Use when building a new indicator or strategy in TradingView.
---

# Pine Script Development Loop

You are developing a Pine Script indicator or strategy in TradingView. Follow this loop precisely.

## Step 1: Understand the Goal

If not already clear, ask the user:
- What type? (indicator, strategy, library)
- What does it do? (entry/exit logic, overlay, oscillator, etc.)
- Overlay or separate pane?
- Any specific inputs or visual elements?

## Step 2: Inspect or Create the Script

- `pine_list_scripts` lists saved scripts and `pine_open` opens one by name.
- `pine_get_source` reads the script currently open in the Pine Editor.
- `pine_new` creates a blank indicator or strategy when the user wants a new script.

Use `pine_analyze` for an offline static check before touching the live chart.
Use `pine_check` when a server-side compile check is useful without opening the
chart. These checks do not replace compiling in TradingView.

## Step 3: Write the Pine Script

Draft the complete source, then use `pine_set_source` to put it into the Pine
Editor. Every script MUST include:
- `//@version=6` header
- Proper `indicator()` or `strategy()` declaration
- All user inputs with `input.*()` functions and groups
- Clear comments for each logical section

For strategies, include:
- `strategy.entry()` and `strategy.exit()` calls
- Position sizing via `strategy()` declaration
- Default commission and slippage settings

## Step 4: Compile

Use `pine_smart_compile` as the normal compile path. It detects the appropriate
button, compiles, checks errors, and reports study changes. Use `pine_compile`
only when a direct compile action is specifically needed. Then call
`pine_get_errors`; `pine_get_console` can provide compile messages and script
log output when diagnostics are insufficient.

## Step 5: Fix Errors

If errors are reported:
1. Read the error messages (line number + description)
2. Fix the specific lines and call `pine_set_source`
3. Compile again with `pine_smart_compile`
4. Repeat until 0 errors

Common Pine Script errors:
- **"Mismatched input"** — usually indentation (Pine uses 4-space indentation, not braces)
- **"Could not find function or function reference"** — typo in function name or wrong version
- **"Undeclared identifier"** — variable used before declaration
- **"Cannot call X with argument type Y"** — wrong parameter type

## Step 6: Verify on Chart

After clean compilation:
1. `capture_screenshot` — take a screenshot to verify it looks right
2. `data_get_strategy_results` — if it's a strategy, check performance
3. Show the user the results

## Step 7: Iterate

If the user wants changes:
1. Pull fresh with `pine_get_source` (in case TradingView modified anything)
2. Edit and apply with `pine_set_source`
3. Compile with `pine_smart_compile`
4. Screenshot to verify

Use `pine_save` only when the user explicitly asks to save the script; it
modifies their stored TradingView script. Always compile after every change.
Never claim "done" without a clean compile.
