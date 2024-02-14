import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './reducer/AdminSlice.ts';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
   
    admin:adminSlice.reducer,

   
  
  
    
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  export default store;