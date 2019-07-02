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

// const randomImg = [paint1.jpeg, paint2.jpeg, paint3.jpeg, paint4.jpeg, paint5.jpeg, paint6.jpeg, paint7.jpeg];
// console.log(randomImg);
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

//E N D P O I N T - T O - R E C I E V E - I M G S //
//SEEMS TO BE DOWN
export const getShowImages = async () => {
  // api.headers = {
  //   'X-Xapp-Token': getArtsyToken()
  // }
  const showImg = await api.get(`/images?show_id=59f0a0c6a09a672d874d3dd1`)
  //debugger;
  console.log(showImg)
  return showImg
}

//E N D P O I N T - T O - R E C I E V E - S H O W - D A T A //
export const getShows = async () => {
  // api.headers = {
  //   'X-Xapp-Token': getArtsyToken()
  // }
  const showData = await api.get("/shows?status=upcoming")

  //console.log(showData.data._embedded.shows)
  console.log(showData.data._links.next.href);
  // This payload object contains shows array (5) and next  calling for the upcoming events through a href
  let payload = {
    shows: showData.data._embedded.shows,
    next: showData.data._links.next.href
  }
  return payload
}

//This function with the attributes PARAMS, receives the params of Next shows
//searches and returns the next shows 
export const getNextShows = async (PARAMS) => {
  // api.headers = {
  //   'X-Xapp-Token': getArtsyToken()
  // }
  const showData = await api.get(PARAMS)
  //debugger;
  //console.log(showData.data._embedded.shows)
  //console.log(showData.data._links.next.href);
  // This payload object contains shows array (5) and next  calling for the upcoming events through a href
  let payload = {
    shows: showData.data._embedded.shows,
    next: showData.data._links.next.href
  }
  return payload
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
