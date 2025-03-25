import { Request, Response, NextFunction } from "express";
import equipmentRepository from "../repositories/equipmentRepository";

// Função para obter um equipamento
async function getEquipment(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id; // o MongoDB usa ObjectId (string)
  try {
    const equipment = await equipmentRepository.getEquipment(id);
    if (equipment) {
      res.json(equipment);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err); // Passa erro para o middleware de tratamento
  }
}

// Função para obter todos os equipamentos
async function getEquipments(req: Request, res: Response, next: NextFunction) {
  try {
    const equipments = await equipmentRepository.getEquipments();
    res.json(equipments);
  } catch (err) {
    next(err);
  }
}

// Função para adicionar um novo equipamento
async function postEquipment(req: Request, res: Response, next: NextFunction) {
  const equipmentData = req.body;
  try {
    const newEquipment = await equipmentRepository.addEquipment(equipmentData);
    res.status(201).json(newEquipment);
  } catch (err) {
    next(err);
  }
}

// Função para atualizar um equipamento
async function patchEquipment(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  const equipmentData = req.body;
  try {
    const updatedEquipment = await equipmentRepository.updateEquipment(id, equipmentData);
    if (updatedEquipment) {
      res.json(updatedEquipment);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
}

// Função para deletar um equipamento
async function deleteEquipment(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  try {
    const result = await equipmentRepository.deleteEquipment(id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
}

export default {
  getEquipment,
  getEquipments,
  postEquipment,
  patchEquipment,
  deleteEquipment
};
