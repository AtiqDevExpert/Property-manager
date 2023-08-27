import {takeLatest, put} from 'redux-saga/effects';
import {RequestTypes, ResponseTypes} from '../../interfaces';
import {ActionTypes} from '../types';
// import {loginSuccess} from '../actions';
import Toast from 'react-native-toast-message';
import {setAppLoading} from '@Home/redux/actions';
import {login} from '@Auth/BL';
import {isEmailValid} from '@Auth/BL/utils/authHelper';

// login call
function* loginRequest(params: {type: string; data: RequestTypes.login}) {
  let {postData} = params.data;
  try {
    yield put(setAppLoading(true));
    let {email, password} = postData;
    // validation
    if (!email || !password) {
      throw Error('All fields required');
    } else if (!isEmailValid(email)) {
      throw Error('Please enter a valid email');
    }
    // const data: ResponseTypes.login = yield login(postData);
    // yield put(loginSuccess(data));
    yield put(setAppLoading(false));
    Toast.show({
      type: 'success',
      text1: 'Logged In',
      text2: 'Logged in successfully',
      visibilityTime: 3000,
    });
  } catch (e) {
    yield put(setAppLoading(false));
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: e?.message,
      visibilityTime: 3000,
    });
  }
}

export function* AuthSagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN_REQUEST, loginRequest);
}
