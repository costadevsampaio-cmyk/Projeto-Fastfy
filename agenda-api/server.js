import app from './src/app.js';

const start = async () => {
  try {
    await app.listen({ port: process.env.PORT || 3000 });
    console.log('Servidor rodando na porta 3000 🚀');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();