# GitHub Actions Demo

This is a sample Node.js/TypeScript project demonstrating CI/CD with GitHub Actions.

## Features

- Express.js API with TypeScript
- Jest for testing
- ESLint for code linting
- GitHub Actions workflow for CI/CD
- Code coverage reporting

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier

## GitHub Actions Workflow

The CI/CD pipeline includes:

1. Running on multiple Node.js versions (18.x, 20.x)
2. Installing dependencies
3. Running linting checks
4. Running tests
5. Building the application
6. Uploading code coverage
7. Deployment stage (when merging to main)

## Project Structure

```
.
├── src/
│   └── index.ts
├── tests/
│   └── index.test.ts
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
├── tsconfig.json
└── jest.config.js
```
