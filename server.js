import express from 'express';
import conexao from './database.js';
import routes from './routes/routes.js';

const app = express();

try {
    await conexao.sync();
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log('Servidor rodando!'));
