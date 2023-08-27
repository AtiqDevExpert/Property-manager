import {NetworkTypes} from '../../interfaces';
import {callAPI} from '../apis';

const useMe = async (data: NetworkTypes.HomeRequestData) => {
  try {
    const loginResponse = await callAPI(data);
    return loginResponse;
  } catch (e) {
    throw new Error(e?.message);
  }
};


export {};
