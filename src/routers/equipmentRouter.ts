import express from 'express';
import equipmentController from '../controllers/equipmentController';
import authMiddleware from '../middlewares/authMiddleware';
import userAuthorizeMiddleware from '../middlewares/userAuthorizeMiddleware';

const router = express.Router();

// Rotas de equipamentos
router.get(
    "/:id", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin","user"]), 
    equipmentController.getEquipment
);
router.get(
    "/", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin","user"]), 
    equipmentController.getEquipments
);
router.post(
    "/", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin","user"]), 
    equipmentController.postEquipment
);
router.patch(
    "/:id", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin","user"]), 
    equipmentController.patchEquipment
);

router.delete(
    "/:id", 
    authMiddleware,//precisa estar logado
    userAuthorizeMiddleware(["admin","user"]), //apenas admin podem acessar
    equipmentController.deleteEquipment
);

export default router;
