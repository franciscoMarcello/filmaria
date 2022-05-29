import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";
async function connect() {
  const dbUri = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectou ao banco de dados");
  } catch (e) {
    Logger.error("Nao foi possivel conectar!");
    Logger.error(`Erro: ${e}`);
  }
}
export default connect;
