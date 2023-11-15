import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../app/modules/auth/authSlice';

export const store = configureStore({
    reducer: {
    //   product: productReducer,
      auth: authReducer,
    //   cart: cartReducer,
    //   order: orderReducer,
    //   user: userReducer
    },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

  
  