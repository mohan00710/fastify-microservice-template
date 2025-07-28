import fastify, { FastifyInstance } from 'fastify';
import { config } from './config/config';
import { registerPlugins } from './config/plugins';
import { registerRoutes } from './routes';

export async function buildApp(): Promise<FastifyInstance> {
  const app = fastify({
    logger: {
      level: config.LOG_LEVEL,
      transport: config.NODE_ENV === 'development' ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      } : undefined,
    },
  });

  // Register plugins
  await registerPlugins(app);

  // Register routes
  await registerRoutes(app);

  return app;
}
