import axios from 'axios';


const harvardUrl = 'https://api.harvardartmuseums.org/object?apikey=ff36a900-994b-11e9-b0f8-fd4ea10c147a&title=rabbit&classification=Paintings'
const APIKEY = 'ff36a900-994b-11e9-b0f8-fd4ea10c147a'


export const API_harvard = async () => {


  const resp = await axios.get(
    `${harvardUrl}?`);

  return resp.data;
}











//FOR FUTURE APIS //
// const news = axios.create({
//   baseURL: 'https://some-domain.com/api/'
// });

// export const API_news = async () => {
//   const resp = await news.get("/waralawarala");
//   return resp.data;
// }