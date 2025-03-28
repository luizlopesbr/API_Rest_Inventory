import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../repositories/autenticationRepository';

// Função para registrar um usuário
export async function registerUser(username: string, password: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await createUser(username, hashedPassword);
    return newUser;
  } catch (error) {
    throw new Error('Erro ao registrar o usuário');
  }
}

// Função para autenticar o usuário e gerar um token JWT
export async function authenticateUser(username: string, password: string) {
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET || 'your_secret_key', { expiresIn: '10m' });
    return token;
  } catch (error) {
    throw new Error('Erro ao autenticar o usuário');
  }
}
