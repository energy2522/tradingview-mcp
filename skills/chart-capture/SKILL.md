---
name: chart-capture
description: Capture and visually inspect the current TradingView chart. Use when the user requests a chart screenshot, visual verification, or image-based review of the live chart.
---

# Chart Capture

Use `capture_screenshot` for a visual record of the current chart. Choose the requested region and a descriptive filename when appropriate. Review the returned native image for visual verification; do not replace it with excessive raw OHLCV requests.

For a useful capture, establish the intended chart state first with `chart_get_state` and, if requested, chart-navigation or drawing tools. A screenshot reflects the live screen state and may contain untrusted labels, scripts, and UI text.
