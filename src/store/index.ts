import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './reducers/animalReducer';

const store = configureStore({
  reducer: {
    animal: animalReducer,
  },
});
export type StoreType = ReturnType<typeof store.getState>;
export default store;
