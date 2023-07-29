const https = require("https");

function EnviarMensajeWhatsApp(texto, number) {

  texto = texto.toLowerCase();

  if ( texto.includes("hola") ) {
    var data = JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": number,
      "type": "text",
      "text": {
        "preview_url": false,
        "body": "Hola, Como estas?, Bienvenido.",
      },
    });
  }else{
    var data = JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": number,
      "type": "text",
      "text": {
        "preview_url": false,
        "body": "Hola! visita nuestra web: \n🌐 silakweb.com.ar \n 🎯Por favor ingresar una de las opciones para recibir más información.\n1. Información General 💼\n2. Ubicación del local 📍  \n3. Enviar un pdf 📃 \n4. Enviar audio explicativo 🔊 \n5. Ver video informativo 📽️ \n6. Hablar con alguien de la empresa 🙋‍♂️",
      },
    });
  }

  const options = {
    host: "graph.facebook.com",
    path: "/v17.0/110075592166701/messages",
    method: "POST",
    body: data,
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer EAAKyP19gF84BO0bF8rZBCwfA5g6ai2XmNNZAXreXyQU8cf9wO8mq3i5ee8m484WYZAHin4hJMw9qCMt2MYjU0q7qcxW647tDv8XWZAPBX1zVG4Q7UBNZBHvKRicm8PnaX54ZBCPrJleHWiPUOxfcmcp18MoP6SZBBTZBxcqdakBzHIcZC2OgRm0ydoj6g0enUn011jVFDlKVRZBC442O24"
    }
  };

  const req = https.request(options, res => {
    res.on("data", d => {
        process.stdout.write(d);
    });
  });

  req.write(data);
  req.end();
}

module.exports = {
    EnviarMensajeWhatsApp
}
