import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  userId: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    return;  // Não retorna, apenas finaliza a execução aqui
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET || 'your_secret_key') as DecodedToken;
    req.user = decoded;  //'decoded' tem a propriedade 'userId' corretamente tipada no arquivo types/express.d.ts
    next(); 
  } catch (err) {
    res.status(400).json({ message: 'Token inválido.' });
    return;  
  }
};

export default authMiddleware;
