import metricsRepository from "../repositories/metricsRepository";

//Obtem o total de registros
async function getTotalEquipments(): Promise<number> {
  return await metricsRepository.countEquipments();
}

//Obtem a quantidade de máquinas com memória <= 6 (GB)
async function getLowMemoryEquipments(): Promise<number> {
  const threshold = 6; // Define o limite de memória para máquinas "fracas"
  return await metricsRepository.countLowMemoryEquipments(threshold);
}


export default { getTotalEquipments, getLowMemoryEquipments };
