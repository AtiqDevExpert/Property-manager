import {ActionTypes} from '../types';
import {RequestTypes} from '../../interfaces';

export const setAppLoading = (status: boolean) => ({
  type: ActionTypes.APP_LOADING,
  status,
});
