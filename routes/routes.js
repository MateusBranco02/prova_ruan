import express from 'express';
import { atualizarVaga, cadastrarVaga, deletarVaga, detalhesVaga, listarVagas, mostrarVagaCargo, mostrarVagaCidade } from '../controllers/vagasController.js';
const router = express.Router();

router.get('/vagas', listarVagas);
router.post('/cadastrar-vagas', cadastrarVaga);
router.delete('/vagas/:id', deletarVaga);
router.put('/vagas/:id', atualizarVaga);
router.get('/vagas/:id', detalhesVaga);
router.get('/cargo/:cargo', mostrarVagaCargo);
router.get('/localizacao/:cidade', mostrarVagaCidade);

export default router;
