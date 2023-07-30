import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSliceJsonServe = createApi({
  reducerPath: "apiJsonServe",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: [],
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: () => ({}),
});

export default apiSliceJsonServe;
