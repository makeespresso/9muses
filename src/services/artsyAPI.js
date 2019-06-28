const axios = require('axios');
const TOKEN = '6c1999def68ffc7ecee084a9b1d94735.'

const api = axios.create({
  baseURL: 'https://api.artsy.net/api',
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
});

export const getInfo = async () => { 
  return await api.get('/museuminfo')
    .then(a => a.data) // questo e quando sta ritornando la data dal request dopo questa e ricevuta, per quello non c'e bisongo di utilizare il await
    .catch(b => b.response) // questa ti invia errori nella consola in caso di avere-- LIKE when the system wennnttttt down!!! 
}
export const setTrain = (trainData) => { //anche queste bimbo e un ponto finale (endpoint)
  return api.post('/museuminfo', trainData)  //trainData is the object that will be sent to the API // and when we call this function we send an object as an attrrr
    .then(a => a.data)
    .catch(b => b.response)
}

