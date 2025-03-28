import mongoose, { Document, Schema } from "mongoose";

// Definindo a interface para o modelo de Autenticação
interface Authentication extends Document {
  username: string;
  password: string;
  
}

const authenticationSchema: Schema<Authentication> = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  
});

const Authentication = mongoose.model<Authentication>("Authentication", authenticationSchema);

export default Authentication;
