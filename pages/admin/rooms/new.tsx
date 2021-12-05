import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/client";

import { Layout } from "../../../components/layouts/Layout";
import { NewRoom } from "../../../components/admin/NewRoom";
import { CustomSession } from "../../../types/auth/session";

const NewRoomsPage: NextPage = () => {
  return (
    <Layout title="New Room">
      <NewRoom />
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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

export default NewRoomsPage;
