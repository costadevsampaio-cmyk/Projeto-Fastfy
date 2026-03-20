import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

export default async function userRoutes(fastify) {
  fastify.post('/users', userController.create);
  fastify.post('/login', userController.login);

  // 🔒 rota protegida de teste
  fastify.get('/me', { preHandler: authMiddleware }, async (request, reply) => {
    return request.user;
  });
}