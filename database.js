import { Sequelize } from 'sequelize';

const conexao = new Sequelize('postgresql://mateus:2RHNaDZJikMuaKISF2tBiA@brainy-boar-3152.j77.aws-us-east-1.cockroachlabs.cloud:26257/db_vagas?sslmode=verify-full');

try {
    await conexao.authenticate()
    console.log('Banco conectado com sucesso!');
} catch (error) {
    console.error('Erro ao conectar!', error);
}

export default conexao;
