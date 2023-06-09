import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://api.jsonbin.io/v3/b',
  headers: {
    'X-Master-Key':
      '$2b$10$Ynyy3FPHXGze0OltSp9XJ.lwT24PjuXc5rNpnuedq2/ReT59m4giS',
  },
});
