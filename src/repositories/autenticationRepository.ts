import Authentication from '../models/authentication';

// Função para criar um usuário
export async function createUser(username: string, password: string) {
  const newUser = new Authentication({
    username,
    password,
  });

  await newUser.save();
  return newUser;
}

// Função para buscar um usuário pelo nome de usuário
export async function findUserByUsername(username: string) {
  return await Authentication.findOne({ username });
}
