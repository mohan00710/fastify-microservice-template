module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/types/**/*',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        baseUrl: './src',
        paths: {
          '@/*': ['*'],
          '@/controllers/*': ['controllers/*'],
          '@/services/*': ['services/*'],
          '@/models/*': ['models/*'],
          '@/routes/*': ['routes/*'],
          '@/middleware/*': ['middleware/*'],
          '@/utils/*': ['utils/*'],
          '@/types/*': ['types/*'],
          '@/config/*': ['config/*']
        }
      }
    }
  }
};