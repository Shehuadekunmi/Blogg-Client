import { configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import userReducer from '../redux/userReducer'
  // import productReducer from '../redux/blogReducer'
  import blogReducer from '../redux/blogReducer';


  const rootReducer = combineReducers({
    user: userReducer,
    product: blogReducer,
  });

  const persistConfig = {
    key: "root",
    version: 1,
    storage
  };

 

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializationCheck: false,
    })
});

export let persistor = persistStore(store)