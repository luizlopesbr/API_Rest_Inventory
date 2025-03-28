import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

// Rota para registro de usuários
router.post('/register', authController.register);

// Rota para login de usuários
router.post('/login', authController.login);

// Rota para logout de usuários
router.post('/logout', authController.logout);

export default router;
