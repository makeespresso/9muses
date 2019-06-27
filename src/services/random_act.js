import axios from 'axios';
const baseURL = 'http://www.boredapi.com/api/activity/';

export const doSomething = async () => {
  const resp = await axios.get(`${baseURL}`);
  return resp.data;
  console.log(doSomething);
}



