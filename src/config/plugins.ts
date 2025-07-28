import { FastifyInstance } from 'fastify';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import underPressure from '@fastify/under-pressure';
import { config } from './config';

export async function registerPlugins(app: FastifyInstance): Promise<void> {
  // Security plugins
  await app.register(helmet);
  await app.register(cors, {
    origin: config.NODE_ENV === 'development' ? true : false,
  });

  // Rate limiting
  await app.register(rateLimit, {
    max: config.RATE_LIMIT_MAX,
    timeWindow: config.RATE_LIMIT_WINDOW,
  });

  // Health monitoring
  await app.register(underPressure, {
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: 100000000,
    maxRssBytes: 100000000,
    maxEventLoopUtilization: 0.98,
  });

  // API Documentation
  await app.register(swagger, {
    swagger: {
      info: {
        title: 'Microservice API',
        description: 'API documentation for microservice',
        version: '1.0.0',
      },
      host: `${config.HOST}:${config.PORT}`,
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  await app.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
  });
}
