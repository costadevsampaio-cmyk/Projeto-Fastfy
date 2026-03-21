import contactController from '../controllers/contact.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

export default async function contactRoutes(fastify) {
  fastify.post('/contacts', { preHandler: authMiddleware }, contactController.create);
  fastify.get('/contacts', { preHandler: authMiddleware }, contactController.findAll);
  fastify.put('/contacts/:id', { preHandler: authMiddleware }, contactController.update);
  fastify.delete('/contacts/:id', { preHandler: authMiddleware }, contactController.remove);
}