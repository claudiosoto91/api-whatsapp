const https = require("https");

function EnviarMensajeWhatsApp(texto, number) {
  texto = texto.toLowerCase();
  let numeroString = number.toString();
  let numeroSinPrimerNueve = numeroString.replace("9", "");

  if (texto.includes("hola")) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "text",
      text: {
        preview_url: false,
        body: "Hola, Como estas?, Bienvenido.",
      },
    });
  } else if (texto == "1") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "text",
      text: {
        preview_url: false,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl tellus, scelerisque tempus consequat ac, luctus rutrum tortor. Aliquam posuere nulla ante, vitae semper ipsum ornare ac. In elementum nulla vel imperdiet tempor. Sed ipsum magna, tincidunt in gravida ut, convallis in neque. Integer lobortis ipsum id magna porta rhoncus. Quisque nec felis eget sapien semper pharetra vel in orci. Praesent vel maximus tellus, id varius turpis. ",
      },
    });
  } else if (texto == "2") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "location",
      location: {
        latitude: "-26.8139997",
        longitude: "-65.2271815",
        name: "Tucumán",
        address: "Av. Belgrano 2210",
      },
    });
  } else if (texto == "4") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "audio",
      video: {
        link: "http://www.sonidosmp3gratis.com/sounds/ringtones-super-mario-bros.mp3",
        caption: "Ejemplo de envio de video",
      },
    });
  } else if (texto == "3") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "document",
      document: {
        link: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
        caption: "Ejemplo de descarga por whatsapp de un archivo .pdf",
      },
    });
  } else if (texto == "5") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "video",
      video: {
        link: "https://download.samplelib.com/mp4/sample-5s.mp4",
        caption: "Ejemplo de envio de video",
      },
    });
  }else if (texto == "6") {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "text",
      text: {
        preview_url: false,
        body: "Hola! En breve alguien del equipo se contactará contigo.",
      },
    });
  }  else {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: numeroSinPrimerNueve,
      type: "text",
      text: {
        preview_url: false,
        body: "Hola! visita nuestra web: \n🌐 silakweb.com.ar \n 🎯Por favor ingresar una de las opciones para recibir más información.\n1. Información General 💼\n2. Ubicación del local 📍  \n3. Enviar un pdf 📃 \n4. Enviar audio explicativo 🔊 \n5. Ver video informativo 📽️ \n6. Hablar con alguien de la empresa 🙋‍♂️",
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
      Authorization:
        "Bearer EAAKyP19gF84BO0bF8rZBCwfA5g6ai2XmNNZAXreXyQU8cf9wO8mq3i5ee8m484WYZAHin4hJMw9qCMt2MYjU0q7qcxW647tDv8XWZAPBX1zVG4Q7UBNZBHvKRicm8PnaX54ZBCPrJleHWiPUOxfcmcp18MoP6SZBBTZBxcqdakBzHIcZC2OgRm0ydoj6g0enUn011jVFDlKVRZBC442O24",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.write(data);
  req.end();
}

module.exports = {
  EnviarMensajeWhatsApp,
};
