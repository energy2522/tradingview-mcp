---
name: batch-operations
description: Run a defined TradingView action across multiple symbols or timeframes. Use for batch chart research, screening, or repeated symbol/timeframe tasks.
---

# Batch Operations

Use `batch_run` only after the user has specified the symbols, timeframes, and requested action. Confirm the scope before a large batch because it can change the visible chart repeatedly and take time. Keep batches as small as possible and use an appropriate delay to allow chart updates.

Summarize successful and failed items separately. Do not invent missing symbols, timeframes, or actions; ask for them when they materially affect the operation.
