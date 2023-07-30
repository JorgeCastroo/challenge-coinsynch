import { GetTopCriptosArgs, GetTopCriptosResponse } from "@/types/bitcoins";
import getUrl from "@/types/getUrl";
import apiSliceIcon from "../api/apiSliceIcon";

export const bitcoinIconApi = apiSliceIcon.injectEndpoints({
  endpoints: (builder) => ({
    getIcons: builder.query<GetTopCriptosResponse, GetTopCriptosArgs>({
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

export const { useGetIconsQuery } = bitcoinIconApi;
