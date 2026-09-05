import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { chartAnalysisContext, chartSnapshot, strategyReportContext } from '../src/core/context.js';
import { imageResult } from '../src/tools/_format.js';

function mockDeps({ failing = [] } = {}) {
  const calls = [];
  const value = (name, result) => async (args) => {
    calls.push({ name, args });
    if (failing.includes(name)) throw new Error(`${name} unavailable`);
    return result;
  };

  return {
    calls,
    chart: { getState: value('getState', { success: true, symbol: 'AAPL' }) },
    data: {
      getQuote: value('getQuote', { success: true, close: 200 }),
      getStudyValues: value('getStudyValues', { success: true, values: [] }),
      getOhlcv: value('getOhlcv', { success: true, summary: {} }),
      getPineLines: value('getPineLines', { success: true, studies: [] }),
      getPineLabels: value('getPineLabels', { success: true, studies: [] }),
      getPineTables: value('getPineTables', { success: true, studies: [] }),
      getPineBoxes: value('getPineBoxes', { success: true, studies: [] }),
      getStrategyResults: value('getStrategyResults', { success: true, metrics: {} }),
      getTrades: value('getTrades', { success: true, trades: [] }),
      getEquity: value('getEquity', { success: true, data: [] }),
    },
  };
}

describe('Codex context tools', () => {
  it('builds a compact read-only chart snapshot', async () => {
    const deps = mockDeps();
    const result = await chartSnapshot({ _deps: deps });

    assert.equal(result.success, true);
    assert.equal(result.read_only, true);
    assert.equal(result.context_type, 'chart_snapshot');
    assert.deepEqual(Object.keys(result.context), ['chart', 'quote', 'study_values', 'ohlcv_summary']);
    assert.deepEqual(deps.calls.find((call) => call.name === 'getOhlcv').args, { summary: true });
  });

  it('bounds Pine labels and forwards the study filter', async () => {
    const deps = mockDeps();
    const result = await chartAnalysisContext({ study_filter: 'Profiler', _deps: deps });

    assert.equal(result.read_only, true);
    assert.equal(result.study_filter, 'Profiler');
    assert.deepEqual(deps.calls.find((call) => call.name === 'getPineLabels').args, {
      study_filter: 'Profiler', max_labels: 20,
    });
  });

  it('returns available context when an individual reader fails', async () => {
    const deps = mockDeps({ failing: ['getQuote'] });
    const result = await chartSnapshot({ _deps: deps });

    assert.equal(result.success, true);
    assert.equal(result.context.quote, undefined);
    assert.match(result.unavailable.quote, /getQuote unavailable/);
  });

  it('does not prepare Strategy Tester for strategy report context', async () => {
    const deps = mockDeps();
    const result = await strategyReportContext({ max_trades: 5, _deps: deps });

    assert.equal(result.read_only, true);
    assert.deepEqual(deps.calls.find((call) => call.name === 'getStrategyResults').args, { prepare: false });
    assert.deepEqual(deps.calls.find((call) => call.name === 'getTrades').args, { max_trades: 5, prepare: false });
    assert.deepEqual(deps.calls.find((call) => call.name === 'getEquity').args, { prepare: false });
  });
});

describe('MCP image responses', () => {
  it('returns image content beside the JSON summary', () => {
    const response = imageResult({ success: true, file_path: '/tmp/chart.png' }, 'cG5n');

    assert.equal(response.content.length, 2);
    assert.equal(response.content[0].type, 'text');
    assert.deepEqual(response.content[1], { type: 'image', data: 'cG5n', mimeType: 'image/png' });
  });
});
