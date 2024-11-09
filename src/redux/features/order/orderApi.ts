import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),

    getUserOrder: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
        method: "GET",
      }),
    }),
    changeOrderStatus: builder.mutation({
      query: ({ id, status }) => {
        return {
          url: `/orders/${id}`,
          method: "PUT",
          body: { status: status },
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useOrderMutation,
  useGetUserOrderQuery,
  useGetAllOrdersQuery,
  useChangeOrderStatusMutation,
} = orderApi;
