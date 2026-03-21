import prisma from '../config/prisma.js';
import bcrypt from 'bcrypt';

const create = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error('Todos os campos são obrigatórios');
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    throw new Error('Email já cadastrado');
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  };
};


// 👇 NOVA FUNÇÃO
const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Email e senha são obrigatórios');
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Senha inválida');
  }

  return user;
};


// 👇 EXPORTANDO AS DUAS
export default { create, login };