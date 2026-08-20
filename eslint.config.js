import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist/', 'node_modules/'] },

  // Base JS rules
  js.configs.recommended,

  // React (flat recommended + new JSX transform — no React import needed)
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],

  // React Hooks
  pluginReactHooks.configs.flat['recommended-latest'],

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // Prop-types not used in this JS project (TypeScript is the real solution)
      'react/prop-types': 'off',
      // Allow unused vars when prefixed with _
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // Intentional empty catch blocks are common for clipboard/optional APIs
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
];
