import userService from '../services/user.service.js';

const create = async (request, reply) => {
  try {
    const user = await userService.create(request.body);
    return reply.code(201).send(user);
  } catch (err) {
    return reply.code(400).send({ error: err.message });
  }
};


const login = async (request, reply) => {
  try {
    const user = await userService.login(request.body);

    const token = await reply.jwtSign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      { expiresIn: '1d' }
    );

    return { token };
  } catch (err) {
    return reply.code(400).send({ error: err.message });
  }
};

export default { create, login };