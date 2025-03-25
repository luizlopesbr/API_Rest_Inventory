import mongoose from "mongoose";

// Certifique-se de que a variável de ambiente CONNECTIONURL está configurada corretamente
const connectionURL: string = process.env.CONNECTIONURL!;
if (!connectionURL) {
  console.error("A variável de ambiente CONNECTIONURL não foi definida!");
  process.exit(1); // Encerra a aplicação se a URL de conexão não for fornecida
}

export async function connectToDatabase() {
  try {
    await mongoose.connect(connectionURL);
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro na conexão com o MongoDB:', err);
    process.exit(1); // Encerra a aplicação se houver erro na conexão
  }

  const database = mongoose.connection;

  // Escuta por erros na conexão depois de estabelecida
  database.on('error', (err) => {
    console.error('Erro de conexão com o MongoDB:', err);
  });
}
