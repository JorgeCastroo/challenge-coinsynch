import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rest.coinapi.io/v1/trades/latest",
    prepareHeaders: (headers) => {
      headers.set("X-CoinAPI-Key", "736A843A-BEF8-4DE1-8A1D-BFC6AACEDB30");
    },
  }),
  tagTypes: [],
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: () => ({}),
});

export default apiSlice;
