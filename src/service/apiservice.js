const https = require("https");

function EnviarMensajeWhatsApp(texto, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: "543814596629",
    type: "text",
    text: {
      preview_url: false,
      body: "Hola! visita nuestra web silakweb.com.ar",
    },
  });

  const options = {
    host: "graph.facebook.com",
    path: "/v17.0/110075592166701/messages",
    method: "POST",
    body: data,
    headers: {
        "Content-Type": "application/json",
        "Autorization": "Bearer EAAKyP19gF84BO5D8ZB28iSOddd2Iiiqkyl8rST8QwiQMYCKjiQl86o7MisLs9EPnW6Jl2b8FWRGSHaa88rPnE2HuG5oRqlt9maJcGdQmvnqqiqc0mVKTkDDJrEDn46k6WjBov9Ak1ImywAOCPUUQYzlYBPdeUVoqyYFiL7UiPtgZBvRrDm25R84uO0mqqODB21ZC8NAbzCZBxdiy"
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
