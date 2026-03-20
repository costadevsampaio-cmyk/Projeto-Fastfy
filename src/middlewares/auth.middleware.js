export default async function authMiddleware(request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({ error: 'Não autorizado' });
  }
}