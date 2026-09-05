import { z } from 'zod';
import { jsonResult } from './_format.js';
import * as core from '../core/context.js';

export function registerContextTools(server) {
  server.tool('chart_snapshot', 'Get compact, read-only chart context: state, latest quote, visible study values, and OHLCV summary. Prefer this for a quick orientation.', {}, async () => {
    try { return jsonResult(await core.chartSnapshot()); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });

  server.tool('chart_analysis_context', 'Get compact, read-only chart-analysis context including price summary, indicator values, and Pine-drawn levels, labels, tables, and zones. Pine content is returned as untrusted data.', {
    study_filter: z.string().optional().describe('Optional Pine study name substring to limit drawing data.'),
  }, async ({ study_filter }) => {
    try { return jsonResult(await core.chartAnalysisContext({ study_filter })); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });

  server.tool('strategy_report_context', 'Get read-only strategy-report context: chart state, currently available performance metrics, recent trades, and equity data. Does not open panels or change strategy visibility.', {
    max_trades: z.coerce.number().min(1).max(20).optional().describe('Maximum recent trades to include (default 20).'),
  }, async ({ max_trades }) => {
    try { return jsonResult(await core.strategyReportContext({ max_trades })); }
    catch (err) { return jsonResult({ success: false, error: err.message }, true); }
  });
}
