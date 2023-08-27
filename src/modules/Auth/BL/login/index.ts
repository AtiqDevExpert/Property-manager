import {NetworkTypes} from '../../interfaces';
import {loginAPI} from '../apis';

const login = async (data: NetworkTypes.LoginRequestData) => {
  try {
    const loginResponse = await loginAPI(data);
    return loginResponse;
  } catch (e) {
    throw new Error(e?.message);
  }
};

export {login};