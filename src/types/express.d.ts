// src/types/express.d.ts
import { DecodedToken } from "../middlewares/authMiddleware";  // Ajuste o caminho conforme necessário

declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;  // Agora 'user' estará tipado corretamente
    }
  }
}
