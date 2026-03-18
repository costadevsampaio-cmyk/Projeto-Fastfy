import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import dotenv from 'dotenv';

import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = Fastify();

// JWT
app.register(jwt, {
  secret: process.env.JWT_SECRET
});

// Rotas
app.register(userRoutes);

// rota teste
app.get('/', async () => {
  return { message: 'API rodando 🚀' };
});

export default app;