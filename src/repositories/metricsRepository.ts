import equipment from "../models/equipment";

//Qtde de registros
async function countEquipments(): Promise<number> {
  return await equipment.countDocuments();
}

//Registro com memória <= 6 (GB)
async function countLowMemoryEquipments(threshold: number): Promise<number> {
  return await equipment.countDocuments({ memorysize: { $lte: threshold } });
}

export default { countEquipments, countLowMemoryEquipments };
