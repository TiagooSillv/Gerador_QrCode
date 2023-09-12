const qr = require('qr-image');

const gerarQrcode = (req, res)=>{
    const {link} = req.query;

    if (!link) {
        res.status(404).json({"mensagem":"Favor informar o link"});
    }

    const code = qr.image(link, {type: 'svg'});

    res.type('svg');

    code.pipe(res);
}
const instrucao = (req, res)=>{
    return res.status(200).json({"Instrucao": "http://localhost:3000/qrcode?link=inserir aque o seu link"})
}

module.exports = {
    gerarQrcode,
    instrucao
}