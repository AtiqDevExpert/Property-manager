// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
// import {AuthSagas} from '@Auth/redux/sagas';
import {AuthSagas} from '../../modules/Auth/redux/sagas';


// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(AuthSagas)])
}
