import React from "react";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";
import { getSession } from "next-auth/client";

import { AllRooms } from "../../../components/admin/AllRooms";
import { Layout } from "../../../components/layouts/Layout";
import { CustomSession } from "../../../types/auth/Session";

const AllRoomsPage: NextPage = () => {
  return (
    <Layout title="All Rooms">
      <AllRooms />
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

export default AllRoomsPage;
