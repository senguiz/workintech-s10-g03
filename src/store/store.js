import { configureStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Adding redux-logger middleware
});

export default store;
