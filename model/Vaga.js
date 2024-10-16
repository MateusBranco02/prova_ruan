import conexao from '../database.js';
import { DataTypes } from 'sequelize';

const Vaga = conexao.define('Vagas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    cargo: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false, updatedAt: false, tableName: 'vagas'
});

export { Vaga }
