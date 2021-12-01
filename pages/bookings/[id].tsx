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

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  // TODO:返り値の定義ちゃんとやる
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

    let props;
    if (params) {
      props = {
        authCookie: req.headers.cookie,
        req: req,
        id: params.id,
      };
    } else {
      props = {
        authCookie: req.headers.cookie,
        req: req,
      };
    }

    await store.dispatch(getBookingDetails(props));
  }
);

export default BookingDetailsPage;
