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
    console.log(req);
    res.send("EVENT_RECEIVED");

}

module.exports = {
    verificar,
    recibir
};
