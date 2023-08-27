import {NetworkTypes} from '../../interfaces';
import URL from '@baseUrl/';
const axios = require('axios').default;

export const loginAPI = (postData: NetworkTypes.LoginRequestData) => {
  var config = {
    method: 'POST',
    url: `${URL}/api/login`,
    data: postData,
  };
  return axios(config);
};
