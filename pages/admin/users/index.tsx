import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { Redirect } from "next/dist/lib/load-custom-routes";

import { AllUsers } from "../../../components/admin/AllUsers";
import { Layout } from "../../../components/layouts/Layout";
import { CustomSession } from "../../../types/auth/Session";

const AllUsersPage: NextPage = () => {
  return (
    <Layout title="All Users">
      <AllUsers />
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

export default AllUsersPage;
