import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";

import { Layout } from "../../../components/layouts/Layout";
import { BookingDetails } from "../../../components/bookings/BookingDetails";
import { wrapper } from "../../../redux/store";
import { getBookingDetails } from "../../../redux/actions/bookingActions";
import { CustomSession } from "../../../types/auth/session";
import { Redirect } from "next/dist/lib/load-custom-routes";

const BookingDetailsPage: NextPage = () => {
  return (
    <Layout title="Booking Details">
      <BookingDetails />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({
      req,
      params,
    }: GetServerSidePropsContext): Promise<
      GetServerSidePropsResult<Redirect> | any
    > => {
      const session: CustomSession = await getSession({ req });

      if (!session || session.user!.role !== "admin") {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      const props = {
        authCookie: req.headers.cookie,
        req: req,
        id: params!.id,
      };

      await store.dispatch(getBookingDetails(props));
    }
);

export default BookingDetailsPage;
