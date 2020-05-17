const request = require('request');
const uuidv4 = require('uuid/v4');

// importar variables de entorno
var envJSON = require('./var_api.json');


// Establecimiento de la clave de suscripción y el punto de conexión

var key_var = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
if (!envJSON[key_var]) {
    throw new Error('Please set/export the following environment variable: ' + key_var);
}
var subscriptionKey = envJSON[key_var];
var endpoint_var = 'TRANSLATOR_TEXT_ENDPOINT';
if (!envJSON[endpoint_var]) {
    throw new Error('Please set/export the following environment variable: ' + endpoint_var);
}
var endpoint = envJSON[endpoint_var];

// Configuración de la solicitud
function translateText(){

let options = {
    method: 'POST',
    baseUrl: endpoint,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': ['es', 'en']
    },
    headers: {
      'Ocp-Apim-Subscription-Key': 'b901a419a1274580ba98f4cb8da4b82b',
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
          'text': 'Hola!'
    }],
    json: true,
};


request(options, function(err, res, body){
    console.log(JSON.stringify(body, null, 4));
});
};
// Call the function to translate text.
translateText();
