import { bitcoinApi } from "@/services/bitcoins/bitcoins";
import { bitcoinIconApi } from "@/services/bitcoins/bitcoinsIcon";
import { sendEmailApi } from "@/services/sendEmail/sendEmail";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
    [bitcoinIconApi.reducerPath]: bitcoinIconApi.reducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      bitcoinApi.middleware,
      bitcoinIconApi.middleware,
      sendEmailApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
