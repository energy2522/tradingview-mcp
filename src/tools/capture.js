import { z } from 'zod';
import { imageResult, jsonResult } from './_format.js';
import * as core from '../core/capture.js';

export function registerCaptureTools(server) {
  server.tool('capture_screenshot', 'Take a screenshot of the TradingView chart', {
    region: z.string().optional().describe('Region to capture: full, chart, strategy_tester (default full)'),
    filename: z.string().optional().describe('Custom filename (without extension)'),
    method: z.string().optional().describe('Capture method: cdp (Page.captureScreenshot) or api (chartWidgetCollection.takeScreenshot) (default cdp)'),
    wait_for_render: z.boolean().optional().describe('Wait for the chart canvas to stabilize before capturing. Use after chart_set_symbol or chart_set_timeframe to avoid stale frames.'),
  }, async ({ region, filename, method, wait_for_render }) => {
    try {
      const result = await core.captureScreenshot({
        region, filename, method, waitForRender: wait_for_render, includeImageData: method !== 'api',
      });
      const { image_data, mime_type, ...summary } = result;
      return image_data ? imageResult(summary, image_data, mime_type) : jsonResult(summary);
    }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });
}
