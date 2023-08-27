import {ActionTypes} from '../types';
import {RequestTypes} from '../../interfaces';

export const loginRequest = (data: RequestTypes.login) => ({
  type: ActionTypes.AUTH_LOGIN_REQUEST,
  data,
});
