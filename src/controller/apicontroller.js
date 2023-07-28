const verificar = ( req, res ) => {
    try {
        var tokenprueba = "TOKENPRUEBA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if ( challenge != null && token!= null && token == tokenprueba ) {
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send();
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