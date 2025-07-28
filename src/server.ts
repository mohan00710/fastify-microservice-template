import { buildApp } from './app';
import { config } from '@/config/config';

async function start(): Promise<void> {
  try {
    const app = await buildApp();
    
    await app.listen({
      port: config.PORT,
      host: config.HOST,
    });

    console.log(`🚀 Server running on http://${config.HOST}:${config.PORT}`);
  } catch (err) {
    console.error('❌ Error starting server:', err);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM. Shutting down gracefully...');
  process.exit(0);
});

start();
