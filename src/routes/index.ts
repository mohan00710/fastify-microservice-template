import { FastifyInstance } from 'fastify';
import { healthRoutes } from './health';

export async function registerRoutes(app: FastifyInstance): Promise<void> {
  await app.register(healthRoutes, { prefix: '/api/v1' });
}
