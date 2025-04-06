import { Router } from "express";
import metricsController from "../controllers/metricsController";
import authMiddleware from "../middlewares/authMiddleware";
import userAuthorizeMiddleware from "../middlewares/userAuthorizeMiddleware";

const router = Router();

router.get(
    "/total-equipments", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin"]), 
    metricsController.getTotalEquipments
);

router.get(
    "/low-memory-equipments", 
    authMiddleware, 
    userAuthorizeMiddleware(["admin"]), 
    metricsController.getLowMemoryEquipments
);

export default router;
