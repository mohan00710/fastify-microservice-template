# 🚀 TypeScript Fastify Microservice Template

A production-ready, scalable microservice template built with TypeScript, Fastify, and modern development tools. This template provides a solid foundation for building high-performance microservices with comprehensive tooling, testing, and deployment configurations.

## ✨ Features

### 🏗️ Core Framework
- **[Fastify](https://www.fastify.io/)** - High-performance web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Node.js 20+](https://nodejs.org/)** - Latest LTS runtime

### 🔒 Security & Performance
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection
- **Under Pressure** - Health monitoring
- **Input Validation** - Zod schema validation

### 🧪 Testing & Quality
- **Jest** - Testing framework with coverage
- **Supertest** - HTTP assertions
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Lint-staged** - Pre-commit linting
- **Commitlint** - Conventional commits

### 📚 Documentation & API
- **Swagger/OpenAPI** - Auto-generated API docs
- **TypeScript Declarations** - Full type definitions
- **JSDoc** - Code documentation

### 🐳 DevOps & Deployment
- **Docker** - Containerization
- **Docker Compose** - Local development
- **GitHub Actions** - CI/CD pipeline
- **Multi-stage builds** - Optimized production images

### 📊 Monitoring & Observability
- **Pino** - Structured logging
- **Prometheus Metrics** - Performance monitoring
- **Health Checks** - Service status endpoints
- **Under Pressure** - System resource monitoring

## 📋 Prerequisites

- **Node.js** >= 20.0.0
- **npm** >= 10.0.0
- **Docker** >= 24.0.0 (optional)
- **Git** >= 2.40.0

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd microservice-template

# Install dependencies
npm install

# Setup environment
cp .env.example .env
```

### 2. Configure Environment

Edit `.env` file with your configuration:

```bash
# Server Configuration
NODE_ENV=development
PORT=3000
HOST=0.0.0.0

# Database Configuration (if needed)
DATABASE_URL=postgresql://user:password@localhost:5432/microservice_db

# Redis Configuration (if needed)
REDIS_URL=redis://localhost:6379

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000

# Logging
LOG_LEVEL=info

# Monitoring
ENABLE_METRICS=true
METRICS_PATH=/metrics

# Security
BCRYPT_ROUNDS=12
```

### 3. Start Development

```bash
# Start development server with hot reload
npm run dev

# Server will be running at http://localhost:3000
```

### 4. Verify Installation

```bash
# Check health endpoint
curl http://localhost:3000/api/v1/health

# View API documentation
open http://localhost:3000/docs
```

## 📁 Project Structure

```
microservice-template/
├── .github/                    # GitHub Actions & templates
│   └── workflows/
│       ├── ci.yml             # CI/CD pipeline
├── .husky/                    # Git hooks
│   ├── pre-commit             # Pre-commit hooks
│   └── commit-msg             # Commit message validation
├── src/                       # Source code
│   ├── config/                # Configuration files
│   │   ├── config.ts          # Environment configuration
│   │   └── plugins.ts         # Fastify plugins setup
│   ├── controllers/           # Route controllers
│   ├── services/              # Business logic services
│   ├── models/                # Data models
│   ├── routes/                # API routes
│   │   ├── index.ts           # Route registration
│   │   └── health.ts          # Health check routes
│   ├── middleware/            # Custom middleware
│   ├── utils/                 # Utility functions
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Common types
│   ├── app.ts                 # Fastify app configuration
│   └── server.ts              # Server entry point
├── tests/                     # Test files
│   ├── unit/                  # Unit tests
│   ├── integration/           # Integration tests
│   │   └── health.test.ts     # Health endpoint tests
│   ├── fixtures/              # Test data
│   └── setup.ts               # Test configuration
├── docs/                      # Documentation
├── scripts/                   # Build & deployment scripts
├── coverage/                  # Test coverage reports
├── dist/                      # Compiled JavaScript (generated)
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── .dockerignore              # Docker ignore rules
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose setup
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.test.json         # TypeScript test configuration
├── jest.config.js             # Jest test configuration
├── eslint.config.mjs          # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .lintstagedrc.json         # Lint-staged configuration
├── commitlint.config.js       # Commitlint configuration
├── audit-ci.json              # Security audit configuration
├── README.md                  # This file
└── CHANGELOG.md               # Version history
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server with hot reload
npm run build            # Build for production
npm run start            # Start production server

# Testing
npm test                 # Run all tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report

# Code Quality
npm run lint             # Lint code
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # Check TypeScript types
npm run type-check:test  # Check test TypeScript types

# Git & Commits
npm run commit           # Interactive commit with Commitizen
npm run prepare          # Setup git hooks (automatically run)

# Security
npm run audit            # Run security audit
npm run security         # Run Snyk security scan
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
    - Write code with proper TypeScript types
    - Add tests for new functionality
    - Update documentation if needed

3. **Run quality checks**
   ```bash
   npm run lint:fix
   npm run format
   npm run type-check
   npm test
   ```

4. **Commit your changes**
   ```bash
   npm run commit
   # Follow the conventional commit prompts
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🧪 Testing

### Test Structure

- **Unit Tests** - Test individual functions/modules
- **Integration Tests** - Test API endpoints and service interactions
- **Test Coverage** - Minimum 80% coverage required

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- health.test.ts

# Run tests in watch mode during development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Writing Tests

```typescript
// Example test file: tests/integration/example.test.ts
import { buildApp } from '@/app';
import { FastifyInstance } from 'fastify';

describe('Example API', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = await buildApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return expected response', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/v1/example',
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      success: true,
      data: expect.any(Object)
    });
  });
});
```

## 📚 API Documentation

### Swagger/OpenAPI

Visit `http://localhost:3000/docs` when the server is running to access the interactive API documentation.

### Available Endpoints

#### Health Check
- **GET** `/api/v1/health` - Service health status

```json
{
  "status": "ok",
  "timestamp": "2024-08-01T12:00:00.000Z",
  "uptime": 123.456
}
```

#### Metrics (if enabled)
- **GET** `/metrics` - Prometheus metrics endpoint

### Adding New Routes

1. **Create route file** in `src/routes/`
2. **Register route** in `src/routes/index.ts`
3. **Add Swagger schema** for documentation
4. **Write tests** for the new endpoints

Example route:

```typescript
// src/routes/users.ts
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export async function userRoutes(app: FastifyInstance): Promise<void> {
  app.get('/users', {
    schema: {
      description: 'Get all users',
      tags: ['Users'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  name: { type: 'string' },
                  email: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    // Implementation here
    return reply.send({ success: true, data: [] });
  });
}
```

## 🐳 Docker & Deployment

### Local Development with Docker

```bash
# Start all services (app, postgres, redis)
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

### Production Build

```bash
# Build production image
docker build -t microservice:latest .

# Run production container
docker run -p 3000:3000 --env-file .env microservice:latest
```

### Multi-stage Docker Build

The Dockerfile uses multi-stage builds for optimization:

- **Base** - Common Node.js Alpine setup
- **Dependencies** - Production dependencies only
- **Build** - TypeScript compilation
- **Runtime** - Final optimized image

### Environment Variables

The application uses environment-based configuration. See `.env.example` for all available options.

Required variables:
- `JWT_SECRET` - JWT signing secret
- `NODE_ENV` - Environment (development/production/test)

Optional variables:
- `DATABASE_URL` - Database connection string
- `REDIS_URL` - Redis connection string
- `PORT` - Server port (default: 3000)

## 🔄 CI/CD Pipeline

### GitHub Actions

The repository includes a comprehensive CI/CD pipeline that runs on:
- Push to `main` and `develop` branches
- Pull requests to `main`

### Pipeline Steps

1. **Code Quality**
    - ESLint linting
    - TypeScript type checking
    - Prettier formatting check

2. **Security**
    - npm audit for vulnerabilities
    - Snyk security scanning

3. **Testing**
    - Unit and integration tests
    - Coverage reporting
    - Test results upload

4. **Build**
    - TypeScript compilation
    - Docker image build
    - Multi-arch builds (optional)

5. **Deployment** (configure as needed)
    - Staging deployment
    - Production deployment
    - Container registry push

### Setting up CI/CD

1. **Enable GitHub Actions** in your repository
2. **Add secrets** for deployment:
    - `SNYK_TOKEN` - For security scanning
    - `DOCKER_HUB_TOKEN` - For container registry
    - Add deployment-specific secrets

3. **Configure environments** in GitHub settings
4. **Customize pipeline** in `.github/workflows/ci.yml`

## 🔒 Security

### Security Features

- **Helmet** - Security headers (CSP, HSTS, etc.)
- **CORS** - Configurable cross-origin policies
- **Rate Limiting** - Request throttling
- **Input Validation** - Zod schema validation
- **JWT Authentication** - Secure token handling
- **bcrypt** - Password hashing
- **Security Audits** - Automated vulnerability scanning

### Security Best Practices

1. **Environment Variables** - Never commit secrets
2. **JWT Secrets** - Use strong, random secrets
3. **Rate Limiting** - Configure appropriate limits
4. **Input Validation** - Validate all inputs
5. **Dependencies** - Keep dependencies updated
6. **Auditing** - Regular security audits

### Security Scanning

```bash
# Run npm audit
npm run audit

# Run Snyk scan (requires account)
npm run security
```

## 📊 Monitoring & Observability

### Logging

Structured logging with Pino:

```typescript
// Use the Fastify logger
app.log.info('Service started');
app.log.error({ err }, 'Error occurred');

// Custom logging
import pino from 'pino';
const logger = pino();
logger.info({ userId: 123 }, 'User action');
```

### Metrics

Prometheus metrics available at `/metrics`:

- HTTP request duration
- HTTP request count
- System resource usage
- Custom business metrics

### Health Checks

Multiple health check endpoints:

- `/api/v1/health` - Basic health status
- System resource monitoring via Under Pressure
- Database connectivity checks (if configured)

### Adding Custom Metrics

```typescript
import client from 'prom-client';

// Create custom metric
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code']
});

// Use in route handler
const end = httpRequestDuration.startTimer({
  method: request.method,
  route: request.routerPath
});

// ... handle request ...

end({ status_code: reply.statusCode });
```

## 🤝 Contributing

### Development Setup

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install** dependencies: `npm install`
4. **Create** feature branch: `git checkout -b feature/name`
5. **Make** your changes
6. **Test** your changes: `npm test`
7. **Commit** using conventional commits: `npm run commit`
8. **Push** and create a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/):

```
feat: add new user authentication
fix: resolve memory leak in user service
docs: update API documentation
style: fix code formatting issues
refactor: improve error handling
test: add unit tests for user service
chore: update dependencies
```

### Code Style

- **TypeScript** - Strict mode enabled
- **ESLint** - Extended TypeScript rules
- **Prettier** - Consistent formatting
- **100% test coverage** - Required for critical paths

### Pull Request Process

1. Update documentation if needed
2. Add tests for new functionality
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review from maintainers

## 📈 Performance

### Optimization Features

- **Fastify** - High-performance framework
- **Multi-stage Docker builds** - Minimal image size
- **TypeScript** - Compile-time optimizations
- **Pino** - Fast, structured logging
- **Under Pressure** - Resource monitoring

### Performance Tips

1. **Use Fastify plugins** for shared functionality
2. **Implement caching** where appropriate
3. **Optimize database queries** and connections
4. **Monitor resource usage** with metrics
5. **Use streaming** for large responses

## 🔧 Configuration

### Environment Configuration

All configuration is handled through environment variables with Zod validation:

```typescript
// src/config/config.ts
const configSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string().min(1),
  // ... other config
});

export const config = configSchema.parse(process.env);
```

### Adding Configuration

1. **Define** in schema with validation
2. **Document** in `.env.example`
3. **Use** via imported config object
4. **Test** configuration parsing

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

#### Module Resolution Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Git Hooks Not Working
```bash
# Reinstall husky
npm run prepare
npx husky install
```

#### Docker Build Issues
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t microservice .
```

#### Test Path Mapping Issues
- Ensure `jest.config.js` has correct `moduleNameMapping`
- Check `tsconfig.test.json` extends main config
- Verify path aliases match between configs

### Getting Help

1. **Check logs** for detailed error messages
2. **Run diagnostics**: `npm run type-check`
3. **Check dependencies**: `npm outdated`
4. **Review configuration** in `.env`
5. **Open an issue** with reproduction steps

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Fastify Team](https://www.fastify.io/) - Amazing web framework
- [TypeScript Team](https://www.typescriptlang.org/) - Type safety
- [Jest Team](https://jestjs.io/) - Testing framework
- [Prettier](https://prettier.io/) - Code formatting
- [ESLint](https://eslint.org/) - Code linting
- [Husky](https://typicode.github.io/husky/) - Git hooks

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/your-org/microservice-template/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/microservice-template/discussions)
- **Security**: Email security@yourorg.com for security issues

---

**Happy coding! 🚀**

Made with ❤️ for building scalable microservices.