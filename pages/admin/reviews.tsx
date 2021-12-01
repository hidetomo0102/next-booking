import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";

import { RoomReviews } from "../../components/admin/RoomReviews";
import { Layout } from "../../components/layouts/Layout";
import { CustomSession } from "../../types/auth/Session";

const RoomReviewsPage: NextPage = () => {
  return (
    <Layout title="Room Reviews">
      <RoomReviews />
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

  return {
    props: {},
  };
}

export default RoomReviewsPage;
