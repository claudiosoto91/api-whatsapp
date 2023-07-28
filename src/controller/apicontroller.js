const verificar = ( req, res ) => {
    try {
        var tokenprueba = "TOKENPRUEBA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        res.send(challenge);
        console.log(req);
    } catch (e) {
        res.status(404).send();
    }
    res.send("Verificado");
}

const recibir = (req, res) => {
    res.send("Recibido");
}

module.exports = {
    verificar,
    recibir
};