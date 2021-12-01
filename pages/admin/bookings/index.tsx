import React from "react";
import { getSession } from "next-auth/client";

import { Layout } from "../../../components/layouts/Layout";
import { AllBookings } from "../../../components/admin/AllBookings";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";
import { CustomSession } from "../../../types/auth/Session";

const AllBookingsPage: NextPage = () => {
  return (
    <Layout title="All Bookings">
      <AllBookings />
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Redirect | {}>> => {
  const session: CustomSession = await getSession({ req: context.req });

  if (!session || session.user!.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default AllBookingsPage;
