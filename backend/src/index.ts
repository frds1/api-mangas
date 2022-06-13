import express from "express";
import cors from "cors"; 
import router from './interfaces/router'

const PORT = process.env.PORT || 4000; 
const HOSTNAME = process.env.HOSTNAME || "http://localhost:";
const app = express();

app.use(
  cors({
    origin: [HOSTNAME+PORT],
  })
); 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)

 // Inicia o sevidor
app.listen(PORT, () => {
  try {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
  } catch (error) {
    console.log('Erro ao iniciar o servidor: '+error);
  }
});
