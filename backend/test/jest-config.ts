export const roots = ['<rootDir>/src'];
export const collectCoverageFrom = [
  '<rootDir>/src/**/*.ts',
  '!<rootDir>/src/main/**',
  '!<rootDir>/src/**/*-protocols.ts',
  '!**/protocols/**',
  '!**/test/**'
];
export const coverageDirectory = 'coverage';
export const testEnvironment = 'node';
export const preset = '@shelf/jest-mongodb';
export const transform = {
  '.+\\.ts$': 'ts-jest'
};
export const config = require('./jest-config')
export const testMatch = ['**/*.spec.ts']