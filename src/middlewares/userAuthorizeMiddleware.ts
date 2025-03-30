import { Request, Response, NextFunction } from "express";

const authorizeMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Verifica se a autenticação já ocorreu e `req.user` está definido
    if (!req.user) {
      res.status(401).json({ message: "Acesso negado. Usuário não autenticado." });
      return;
    }

    console.log("Verificando permissão do usuário:", req.user);
    console.log("Roles permitidas:", roles);

    // Verifica se o usuário tem permissão para acessar a rota
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: "Acesso negado. Permissão insuficiente." });
      return;
    }

    next(); // Permite o acesso à rota
  };
};

export default authorizeMiddleware;
