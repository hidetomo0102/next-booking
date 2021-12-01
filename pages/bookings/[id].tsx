import React from "react";
import { getSession } from "next-auth/client";

import { Layout } from "../../components/layouts/Layout";
import { BookingDetails } from "../../components/bookings/BookingDetails";
import { wrapper } from "../../redux/store";
import { getBookingDetails } from "../../redux/actions/bookingActions";
import { GetServerSidePropsContext, NextPage } from "next";

const BookingDetailsPage: NextPage = () => {
  return (
    <Layout title="Booking Details">
      <BookingDetails />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }: GetServerSidePropsContext): Promise<any> => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      await store.dispatch(
        getBookingDetails(req.headers.cookie, req, params.id)
      );
    }
);

export default BookingDetailsPage;
