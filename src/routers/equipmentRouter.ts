import express from "express";
import equipmentController from "../controllers/equipmentController";

const router = express.Router();

router.get("/:id", equipmentController.getEquipment);
router.get("/", equipmentController.getEquipments);
router.post("/", equipmentController.postEquipment);
router.patch("/:id", equipmentController.patchEquipment);
router.delete("/:id", equipmentController.deleteEquipment);

export default router;
