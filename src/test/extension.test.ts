import * as assert from 'assert';
import { determineTargetCase, transformText } from '../toggleCase';

suite('Toggle Case', () => {
	test('transforms to upper case when selection has lowercase letters', () => {
		const input = 'HeLlo world';
		const output = transformText(input);

		assert.strictEqual(determineTargetCase(input), 'upper');
		assert.strictEqual(output, 'HELLO WORLD');
	});

	test('transforms to lower case when selection has no lowercase letters', () => {
		const input = 'API_VERSION';
		const output = transformText(input);

		assert.strictEqual(determineTargetCase(input), 'lower');
		assert.strictEqual(output, 'api_version');
	});

	test('returns lower transformation when only symbols or digits are selected', () => {
		const input = '123-456';
		const output = transformText(input);

		assert.strictEqual(determineTargetCase(input), 'lower');
		assert.strictEqual(output, '123-456');
	});

	test('handles non-Latin lowercase characters', () => {
		const input = 'Привет мир';
		const output = transformText(input);

		assert.strictEqual(determineTargetCase(input), 'upper');
		assert.strictEqual(output, 'ПРИВЕТ МИР');
	});
});
