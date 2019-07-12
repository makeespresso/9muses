const axios = require('axios');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsImV4cCI6MTU2MjU5ODczOSwiaWF0IjoxNTYxOTkzOTM5LCJhdWQiOiI1ZDE2MmFlMTAyYzRmZDAwMGRmM2NlZmYiLCJpc3MiOiJHcmF2aXR5IiwianRpIjoiNWQxYTIyZDNmZDA0YmQwMDBlMDg4OWRiIn0.7SCuDfaf8E15mQSQLvGlE04IXCV_ORMzc6lCI5LgST0';

const api = axios.create({
  baseURL: 'https://api.artsy.net/api',
  headers: {
    'X-Xapp-Token': TOKEN
  }
});


//E N D P O I N T - T O - R E C I E V E - I M G S //

export const getShowImages = async () => {
  const showImg = await api.get(`/images?show_id=59f0a0c6a09a672d874d3dd1`)
  //debugger;
  console.log(showImg)
  return showImg
}

//E N D P O I N T - T O - R E C I E V E - S H O W - D A T A //
export const getShows = async () => {
  const showData = await api.get("/shows?status=upcoming")
  //console.log(showData.data._embedded.shows)
  console.log(showData.data._links.next.href);
  // This payload object contains shows array (5) and _next_ is calling for the upcoming events through a href
  let payload = {
    shows: showData.data._embedded.shows,
    next: showData.data._links.next.href
  }
  return payload
}

//This function with the attributes PARAMS, receives the params of _Next_ shows
//searches and returns the next shows:
export const getNextShows = async (params) => {
  const showData = await api.get(params)
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