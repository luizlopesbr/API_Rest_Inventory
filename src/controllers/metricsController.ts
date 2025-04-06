import { Request, Response, NextFunction } from "express";
import metricsService from "../services/metricsService";

//Qtde de registros
async function getTotalEquipments(req: Request, res: Response, next: NextFunction) {
  try {
    const total = await metricsService.getTotalEquipments();
    res.json({ totalEquipments: total });
  } catch (err) {
    next(err);
  }
}

//Memória <= 6 (GB)
async function getLowMemoryEquipments(req: Request, res: Response, next: NextFunction) {
  try {
    const total = await metricsService.getLowMemoryEquipments();
    res.json({ lowMemoryEquipments: total });
  } catch (err) {
    next(err);
  }
}

export default { getTotalEquipments, getLowMemoryEquipments };
