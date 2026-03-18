import userController from '../controllers/user.controller.js';


export default async function userRoutes(fastify) {
  fastify.post('/users', userController.create);
  fastify.post('/login', userController.login);
}