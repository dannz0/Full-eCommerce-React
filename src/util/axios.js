import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b/647f97259d312622a36b7e98',
  headers: {
    'X-Master-Key':
      '$2b$10$Ynyy3FPHXGze0OltSp9XJ.lwT24PjuXc5rNpnuedq2/ReT59m4giS',
  },
});
