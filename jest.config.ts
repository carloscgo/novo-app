import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  resolver: '<rootDir>/jest.resolver.cjs',
  testRegex: '__tests__/.*\\.test\\.(tsx|ts|js|jsx)$',
  coveragePathIgnorePatterns: ['<rootDir>/src/main.tsx', '<rootDir>/src/utils/', '^.+\\.d\\.ts$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  transformIgnorePatterns: ['\\.json', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: false,
      },
    ],
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [1343]
      },
      astTransformers: {
        before: [
          {
            path: 'node_modules/ts-jest-mock-import-meta',
            options: {
              metaObjectReplacement: {
                env: {
                  VITE_APP_NAME: "",
                  VITE_GC_KEY: "",
                  VITE_FB_KEY: "",
                  VITE_FB_PROJECTID: "",
                  VITE_FB_DATABASEURL: "",
                  VITE_FB_AUTHDOMAIN: "",
                  VITE_FB_STORAGEBUCKET: "",
                  VITE_FB_MESSAGINGSENDERID: "",
                  VITE_FB_APPID: "",
                }
              }
            }
          }
        ],
      }
    }
  }
}

export default jestConfig
