const verificar = (req, res) => {
    try {
        var tokenprueba = "TOKENPRUEBA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenprueba) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send();
    }
}

const recibir = (req, res) => {

    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var value = changes["value"];
        var objetoMensaje = value["messages"];
        // console.log(objetoMensaje);

        var messages = objetoMensaje[0];
        var number = messages["from"];

        console.log("Enviado desde: "+ number);

        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        res.send("EVENT_RECEIVED");
    }
    console.log(req);

}

module.exports = {
    verificar,
    recibir
};
