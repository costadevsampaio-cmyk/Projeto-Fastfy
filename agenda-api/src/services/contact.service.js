import prisma from '../config/prisma.js';

const create = async (data, userId) => {
  const { name, email, phone } = data;

  if (!name) {
    throw new Error('Nome é obrigatório');
  }

  return prisma.contact.create({
    data: {
      name,
      email,
      phone,
      userId
    }
  });
};

const findAll = async (userId) => {
  return prisma.contact.findMany({
    where: { userId }
  });
};

const update = async (id, data, userId) => {
  const contact = await prisma.contact.findFirst({
    where: { id, userId }
  });

  if (!contact) {
    throw new Error('Contato não encontrado');
  }

  return prisma.contact.update({
    where: { id },
    data
  });
};

const remove = async (id, userId) => {
  const contact = await prisma.contact.findFirst({
    where: { id, userId }
  });

  if (!contact) {
    throw new Error('Contato não encontrado');
  }

  return prisma.contact.delete({
    where: { id }
  });
};

export default { create, findAll, update, remove };