import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  userId: string;
  role: string; 
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET || 'your_secret_key') as DecodedToken;
    
    req.user = { userId: decoded.userId, role: decoded.role };

    console.log("Usuário autenticado via middleware:", req.user);
    
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token inválido.' });
    return;
  }
};

export default authMiddleware;
