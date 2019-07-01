import axios from 'axios';


const GeekJokes = 'https://geek-jokes.sameerkumar.website/api'


export const API_GeekJokes = async () => {
  const resp = await axios.get(`${GeekJokes}`)
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