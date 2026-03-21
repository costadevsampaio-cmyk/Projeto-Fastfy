import contactService from '../services/contact.service.js';

const create = async (request, reply) => {
  try {
    const contact = await contactService.create(
      request.body,
      request.user.id
    );
    return reply.code(201).send(contact);
  } catch (err) {
    return reply.code(400).send({ error: err.message });
  }
};

const findAll = async (request, reply) => {
  return contactService.findAll(request.user.id);
};

const update = async (request, reply) => {
  try {
    const contact = await contactService.update(
      Number(request.params.id),
      request.body,
      request.user.id
    );
    return contact;
  } catch (err) {
    return reply.code(400).send({ error: err.message });
  }
};

const remove = async (request, reply) => {
  try {
    await contactService.remove(
      Number(request.params.id),
      request.user.id
    );
    return { message: 'Contato deletado' };
  } catch (err) {
    return reply.code(400).send({ error: err.message });
  }
};

export default { create, findAll, update, remove };