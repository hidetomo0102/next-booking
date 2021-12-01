import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";

import { MyBookings } from "../../components/bookings/MyBookings";
import { Layout } from "../../components/layouts/Layout";
import { wrapper } from "../../redux/store";
import { myBookings } from "../../redux/actions/bookingActions";

const MyBookingsPage: NextPage = () => {
  return (
    <Layout title="My Bookings">
      <MyBookings />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  // TODO: 返り値の型定義ちゃんとやる
  async ({ req }: GetServerSidePropsContext): Promise<any> => {
    const session = await getSession({ req });

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    await store.dispatch(myBookings(req.headers.cookie, req));
  }
);

export default MyBookingsPage;
