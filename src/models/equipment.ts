import mongoose, { Document, Schema } from "mongoose";

// Definindo a interface para o modelo de Equipment
interface Equipment extends Document {
  patrimony?: number;
  store: string;
  collaborator: string;
  equipment: string;
  equipmentmark: string;
  equipmentmodelo: string;
  equipmentserial: string;
  equipmenthostname: string;
  operatingsystem: string;
  oskey: string;
  officepackagetype: string;
  officekey: string;
  antivirus: string;
  antiviruskey: string;
  monitorpatrimony: number;
  monitormark: string;
  monitormodelo: string;
  monitorserial: string;
  energyprotectionpatrimony: number;
  energyprotectiontype: string;
  energyprotectionmodelo: string;
  energyprotectionserial: string;
  energyprotectionpower: string;
  processor: string;
  memorysize: number;
  memoryunit: string;
  memorytype: string;
  hdsize: number;
  hdunit: string;
  hdtype: string;
  nfnumber: number;
  nfdata: string;
  obs: string;
}

const equipmentSchema: Schema<Equipment> = new Schema({
  patrimony: { type: Number, required: false },
  store: { type: String, required: true },
  collaborator: { type: String, required: true },
  equipment: { type: String, required: true },
  equipmentmark: { type: String, required: true },
  equipmentmodelo: { type: String, required: true },
  equipmentserial: { type: String, required: true },
  equipmenthostname: { type: String, required: true },
  operatingsystem: { type: String, required: true },
  oskey: { type: String, required: true },
  officepackagetype: { type: String, required: true },
  officekey: { type: String, required: true },
  antivirus: { type: String, required: true },
  antiviruskey: { type: String, required: true },
  monitorpatrimony: { type: Number, required: true },
  monitormark: { type: String, required: true },
  monitormodelo: { type: String, required: true },
  monitorserial: { type: String, required: true },
  energyprotectionpatrimony: { type: Number, required: true },
  energyprotectiontype: { type: String, required: true },
  energyprotectionmodelo: { type: String, required: true },
  energyprotectionserial: { type: String, required: true },
  energyprotectionpower: { type: String, required: true },
  processor: { type: String, required: true },
  memorysize: { type: Number, required: true },
  memoryunit: { type: String, required: true },
  memorytype: { type: String, required: true },
  hdsize: { type: Number, required: true },
  hdunit: { type: String, required: true },
  hdtype: { type: String, required: true },
  nfnumber: { type: Number, required: true },
  nfdata: { type: String, required: true },
  obs: { type: String, required: true }
});

const Equipment = mongoose.model<Equipment>("Equipment", equipmentSchema);

export default Equipment;
