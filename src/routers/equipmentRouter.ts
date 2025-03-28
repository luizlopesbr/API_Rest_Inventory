import express from 'express';
import equipmentController from '../controllers/equipmentController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

// As rotas abaixo estarão protegidas
router.get("/:id", authMiddleware, equipmentController.getEquipment);
router.get("/", authMiddleware, equipmentController.getEquipments);
router.post("/", authMiddleware, equipmentController.postEquipment);
router.patch("/:id", authMiddleware, equipmentController.patchEquipment);
router.delete("/:id", authMiddleware, equipmentController.deleteEquipment);

export default router;
