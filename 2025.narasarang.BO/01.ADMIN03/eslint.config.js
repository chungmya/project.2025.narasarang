import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	{
		ignores: [
			'node_modules/**',
			'dist/**',
			'build/**',
			'**/*.min.js',
			'**/*.min.css',
			'**/*.map',
			'src/assets/css/**',
			'worklist/**',
		],
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				console: 'readonly',
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				setTimeout: 'readonly',
				setInterval: 'readonly',
				clearTimeout: 'readonly',
				clearInterval: 'readonly',
				fetch: 'readonly',
				Promise: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly',
				FormData: 'readonly',
				Event: 'readonly',
				CustomEvent: 'readonly',
				ResizeObserver: 'readonly',
				IntersectionObserver: 'readonly',
				MutationObserver: 'readonly',
				gsap: 'readonly',
				Swiper: 'readonly',
			},
		},
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': ['error', { endOfLine: 'crlf' }], // endOfLine 옵션 추가
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'prefer-const': 'error',
			'no-var': 'error',
			eqeqeq: 'error',
			curly: 'error',
			// 'linebreak-style': ['error', 'windows'], // 기존 'off'를 'error'로 변경
		},
	},
	{
		files: ['gulpfile.js', 'gulp/**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				require: 'readonly',
				module: 'readonly',
				exports: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				global: 'readonly',
				console: 'readonly',
			},
		},
		rules: {
			'no-console': 'off',
		},
	},
];
