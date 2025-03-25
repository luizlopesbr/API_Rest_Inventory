import Equipment from "../models/equipment";

// Função para buscar um equipamento pelo ID
async function getEquipment(id: string): Promise<Equipment | null> {
  try {
    return await Equipment.findById(id);
  } catch (err) {
    throw new Error("Erro ao buscar equipamento");
  }
}

// Função para buscar todos os equipamentos
async function getEquipments(): Promise<Equipment[]> {
  try {
    return await Equipment.find();
  } catch (err) {
    throw new Error("Erro ao buscar equipamentos");
  }
}

// Função para adicionar um novo equipamento
async function addEquipment(equipmentData: Equipment): Promise<Equipment> {
  try {
    const newEquipment = new Equipment(equipmentData);
    return await newEquipment.save();
  } catch (err) {
    throw new Error("Erro ao adicionar equipamento");
  }
}

// Função para atualizar um equipamento
async function updateEquipment(id: string, equipmentData: Equipment): Promise<Equipment | null> {
  try {
    return await Equipment.findByIdAndUpdate(id, equipmentData, { new: true });
  } catch (err) {
    throw new Error("Erro ao atualizar equipamento");
  }
}

// Função para excluir um equipamento
async function deleteEquipment(id: string): Promise<boolean> {
  try {
    const result = await Equipment.findByIdAndDelete(id);
    return result ? true : false;
  } catch (err) {
    throw new Error("Erro ao excluir equipamento");
  }
}

export default {
  getEquipment,
  getEquipments,
  addEquipment,
  updateEquipment,
  deleteEquipment
};
