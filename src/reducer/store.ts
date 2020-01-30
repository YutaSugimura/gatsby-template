import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Action,
} from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
import counter from './actionReducer/counter';

const rootReducer = combineReducers({
  counter: counter,
});

const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), thunk];

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default setupStore;
