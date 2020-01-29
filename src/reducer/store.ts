import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counter from './actionReducer/counter';

const rootReducer = combineReducers({
  counter: counter,
});
export type RootState = ReturnType<typeof rootReducer>;

const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()];

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(logger);
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  return store;
}

export default setupStore;