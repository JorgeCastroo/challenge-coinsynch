import apiSliceJsonServe from "../api/apiSliceJsonServe";

export const sendEmailApi = apiSliceJsonServe.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation<any, any>({
      query: (data) => ({
        url: "/email",
        method: "POST",
        body: { email: "email.com" },
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useSendEmailMutation } = sendEmailApi;
