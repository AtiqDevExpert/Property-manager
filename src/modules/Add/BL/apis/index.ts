import {NetworkTypes} from '../../interfaces';
import URL from '@baseUrl/';
const axios = require('axios').default;
import {store} from '@redux/store';


export const callAPI = (postData: NetworkTypes.LoginRequestData) => {
  let state = store.getState();
  var config = {
    method: 'POST',
    url: `${URL}/api/`,
      headers: {
        Authorization: `Bearer ${state?.authReducer?.userData?.token}`,
        'Content-Type': 'multipart/form-data',
      },
    data: postData,
  };
  return axios(config);
};
