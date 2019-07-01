const axios = require('axios');
// const TOKEN = '6c1999def68ffc7ecee084a9b1d94735'
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU2MjU5ODczOSwiaWF0IjoxNTYxOTkzOTM5LCJhdWQiOiI1ZDE2MmFlMTAyYzRmZDAwMGRmM2NlZmYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWQxYTIyZDNmZDA0YmQwMDBlMDg4OWRiIn0.7SCuDfaf8E15mQSQLvGlE04IXCV_ORMzc6lCI5LgST0'

// export const getArtsyToken = async () => {
//   const resp = await axios.post(`https://api.artsy.net/api/tokens/xapp_token?client_id=e7478287740db362b7de&client_secret=${TOKEN}`);
//   debugger;
//   return resp.data.token;
// }

// getArtsyToken()

const api = axios.create({
  baseURL: 'https://api.artsy.net/api',
  headers: {
    'X-Xapp-Token': TOKEN
  }
});

// export const getInfo = async () => {
//   return await api.get('/museuminfo')
//     .then(a => a.data) // questo e quando sta ritornando la data dal request dopo questa e ricevuta, per quello non c'e bisongo di utilizare il await
//     .catch(b => b.response) // questa ti invia errori nella consola in caso di avere-- LIKE when the system wennnttttt down!!! 
// }
// export const setTrain = (trainData) => { //anche queste bimbo e un ponto finale (endpoint)
//   return api.post('/museuminfo', trainData)  //trainData is the object that will be sent to the API // and when we call this function we send an object as an attrrr
//     .then(a => a.data)
//     .catch(b => b.response)
// }

// const artsyName = "9muses"
// let artsyToken;



// const API_Artsy = axios.create({
//   baseURL: 'https://api.artsy.net/api',
//   headers: {
//     'X-Xapp-Token': artsyToken
//   }
// });

export const getArtist = async (artist) => {
  // api.headers = {
  //   'X-Xapp-Token': getArtsyToken()
  // }
  const artistData = await api.get("/artists/" + artist)
  return artistData.data
}

export const getShows = async () => {
  // api.headers = {
  //   'X-Xapp-Token': getArtsyToken()
  // }
  const showData = await api.get("/shows?status=upcoming")
  debugger;
  console.log(showData.data._embedded.shows)
  return showData.data._embedded.shows
}



// const request = require('superagent');

// let clientID = "e7478287740db362b7de",
//   clientSecret = '6c1999def68ffc7ecee084a9b1d94735',
//   apiUrl = 'https://api.artsy.net/api/tokens/xapp_token',
//   xappToken;

// request
//   .post(apiUrl)
//   .send({ client_id: clientID, client_secret: clientSecret })
//   .end(function (res) {
//     xappToken = res.body.token;
//   });
// console.log(xappToken)
