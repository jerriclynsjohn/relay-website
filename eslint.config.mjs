import astroParser from 'astro-eslint-parser';

import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  },
  {
    files: ['**/*.svelte', '*.svelte'],
    languageOptions: {
      parserOptions: {
        svelteConfig
      }
    }
  },
  {
    files: ['tailwind.config.cjs', '**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  {
    ignores: ['dist/**', '.astro']
  }
];
