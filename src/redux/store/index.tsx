// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import persistedReducer from '../reducers';
// Imports: Redux Root Saga
import {rootSaga} from '../sagas';
import {persistStore} from 'redux-persist';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
export {persistor};
export type RootState = ReturnType<typeof store.getState>; // type of root reducer
