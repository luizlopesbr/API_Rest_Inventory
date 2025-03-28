import { Request, Response } from 'express';
import { registerUser, authenticateUser } from '../services/authService';

// Função para registrar um novo usuário
async function register(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const newUser = await registerUser(username, password);
    res.status(201).json({ message: 'Usuário registrado com sucesso', userId: newUser._id });
  } catch (err) {
    // Usando asserção de tipo para garantir que err tem a propriedade 'message'
    res.status(400).json({ message: (err as Error).message });
  }
}

// Função para autenticar um usuário e gerar um token JWT
async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    const token = await authenticateUser(username, password);
    res.status(200).json({ token });
  } catch (err) {
    // Usando asserção de tipo para garantir que err tem a propriedade 'message'
    res.status(400).json({ message: (err as Error).message });
  }
}

// Função para deslogar o usuário
async function logout(req: Request, res: Response) {
  res.status(200).json({ message: 'Usuário deslogado com sucesso' });
}

export default { register, login, logout };
