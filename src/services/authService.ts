import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../repositories/autenticationRepository';

// Função para registrar um usuário
export async function registerUser(username: string, password: string, role: string, isAdmin: boolean) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await createUser(username, hashedPassword, role, isAdmin);
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

    // Gerando o token com 'userId' e 'role'
    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Agora o 'role' também é incluído no token
      process.env.SECRET || 'your_secret_key',
      { expiresIn: '5m' }
    );
    console.log(`Token retornado: ${token}`);
    
    return token;
  } catch (error) {
    throw new Error('Erro ao autenticar o usuário');
  }
}
