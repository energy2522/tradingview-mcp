---
name: drawing-management
description: Inspect, add, or remove TradingView chart drawings and annotations. Use for trend lines, horizontal levels, labels, shapes, and chart-markup requests.
---

# Drawing Management

Use `draw_list` to inspect drawings and `draw_get_properties` for a specific drawing's points and settings. Use `draw_shape` to create supported lines, shapes, or text annotations. For a trend line, provide both points; for a support or resistance level, use a horizontal line.

Use `draw_remove_one` only for the specified entity ID. `draw_clear` removes every drawing and always requires explicit confirmation immediately before the call. New drawings modify the user's saved chart state, so confirm their placement and text when the request is ambiguous.
