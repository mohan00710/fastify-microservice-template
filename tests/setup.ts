import { jest } from '@jest/globals';

// Global test setup
beforeAll(async () => {
  // Setup code before all tests
});

afterAll(async () => {
  // Cleanup code after all tests
});

// Mock console methods in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};
