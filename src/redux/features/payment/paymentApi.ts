import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    paymentIntent: builder.mutation({
      query: (payment) => ({
        url: "/payments/create-payment-intent",
        method: "POST",
        body: payment,
      }),
    }),
  }),
});

export const { usePaymentIntentMutation } = productApi;
