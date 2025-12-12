export type CaseTransformation = 'upper' | 'lower';

const LOWERCASE_PATTERN = /\p{Ll}/u;

export function determineTargetCase(text: string): CaseTransformation {
	return LOWERCASE_PATTERN.test(text) ? 'upper' : 'lower';
}

export function transformText(text: string): string {
	const target = determineTargetCase(text);
	return target === 'upper' ? text.toLocaleUpperCase() : text.toLocaleLowerCase();
}
