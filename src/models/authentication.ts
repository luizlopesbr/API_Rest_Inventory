import mongoose, { Document, Schema } from "mongoose";

// Interface do modelo de Autenticação e Autorização
interface Authentication extends Document {
  username: string;
  password: string;
  role: string; // Define o nível de permissão do usuário(admin,user,moderator,guest)
  isAdmin: boolean; // Campo booleano para verificar se é administrador
}

const authenticationSchema: Schema<Authentication> = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" }, // "user" como padrão
  isAdmin: { type: Boolean, default: false }, // false como padrão
});

const Authentication = mongoose.model<Authentication>("Authentication", authenticationSchema);

export default Authentication;
