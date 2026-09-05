/**
 * Shared MCP response formatting helper.
 * All tool files use this instead of manually constructing MCP responses.
 */
export function jsonResult(obj, isError = false) {
  return {
    content: [{ type: 'text', text: JSON.stringify(obj, null, 2) }],
    ...(isError && { isError: true }),
  };
}

/** Return a JSON summary together with native MCP image content. */
export function imageResult(obj, base64, mimeType = 'image/png') {
  return {
    content: [
      { type: 'text', text: JSON.stringify(obj, null, 2) },
      { type: 'image', data: base64, mimeType },
    ],
  };
}
