import { GetTopCriptosArgs, GetTopCriptosResponse } from "@/types/bitcoins";
import apiSlice from "../api/apiSlice";
import getUrl from "@/types/getUrl";

export const bitcoinApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopCrytos: builder.query<GetTopCriptosResponse, GetTopCriptosArgs>({
      query: ({ limit }) =>
        getUrl({
          baseUrl: `/`,
          filterOptions: {
            limit: limit,
          },
        }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetTopCrytosQuery } = bitcoinApi;
