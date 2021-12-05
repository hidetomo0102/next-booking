import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";

import { Layout } from "../../../components/layouts/Layout";
import { AllBookings } from "../../../components/admin/AllBookings";
import { CustomSession } from "../../../types/auth/session";

const AllBookingsPage: NextPage = () => {
  return (
    <Layout title="All Bookings">
      <AllBookings />
    </Layout>
  );
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Redirect | {}>> {
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
}

export default AllBookingsPage;
