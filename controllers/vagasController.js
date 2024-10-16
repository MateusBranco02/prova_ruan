import { Vaga } from "../model/Vaga.js";

const listarVagas = async (req, res) => {
    try {
        const response = await Vaga.findAll({ attributes: ['titulo'] });
        res.status(200).send({ resultado: response });
    } catch (error) {
        console.log(error);
        res.status(500).send({ mensagem: 'Erro interno!' });
    }
}

const cadastrarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body
        if (!titulo || !descricao || !cargo || !cidade) {
            return res.status(404).send({ mensagem: 'Todos os campos são obrigatórios!' });
        }

        const response = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ response });

    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno!' });
    }
}

const atualizarVaga = async (req, res) => {
    try {
        const id = req.params.id;
        const { titulo, descricao, cargo, cidade, salario } = req.body;

        const response = await Vaga.update({ titulo, descricao, cargo, cidade, salario }, { where: { id } });
        res.status(200).send({ mensagem: 'Informações alteradas com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}

const detalhesVaga = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await Vaga.findByPk(id);
        res.status(200).send({ resultado: response });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}

const deletarVaga = async (req, res) => {
    try {
        const id = req.params.id;
        await Vaga.destroy({ where: { id } });
        res.status(200).send({ mensagem: 'Vaga deletada com sucesso!' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
}

const mostrarVagaCargo = async (req, res) => {
    try {
        const cargo = req.params.cargo;
        const response = await Vaga.findOne({ where: { cargo } });
        res.status(200).send({ resultado: response });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}

const mostrarVagaCidade = async (req, res) => {
    try {
        const cidade = req.params.cidade;
        const response = await Vaga.findOne({ where: { cidade } });
        res.status(200).send({ resultado: response });
    } catch (error) {
        console.log(error);
        res.status(500).send('Erro interno!');
    }
}

export { cadastrarVaga, listarVagas, deletarVaga, atualizarVaga, detalhesVaga, mostrarVagaCargo, mostrarVagaCidade }
