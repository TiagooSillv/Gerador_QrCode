const express = require('express');
const {gerarQrcode,instrucao} = require('./controladores/qrcode')
const rotas = express();
rotas.get('/home',instrucao)
rotas.get('/qrcode',gerarQrcode);


module.exports = rotas