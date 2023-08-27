import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from '../store';
// import authReducer from '@Auth/redux/reducer';
import authReducer from '../../modules/Auth/redux/reducer';
// import homeReducer from '@Home/redux/reducer';
import homeReducer from '../../modules/Home/redux/reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'authReducer',
  ],
};

const rootReducer = combineReducers({
  authReducer,
  homeReducer,
});

export default persistReducer(persistConfig, rootReducer);
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // use it instead of useSelector across app
