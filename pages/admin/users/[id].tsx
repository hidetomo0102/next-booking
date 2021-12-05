import React from "react";
import { getSession } from "next-auth/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
  Redirect,
} from "next";

import { UpdateUsers } from "../../../components/admin/UpdateUser";
import { Layout } from "../../../components/layouts/Layout";
import { CustomSession } from "../../../types/auth/session";

const UpdateUser: NextPage = () => {
  return (
    <Layout title="Update Users">
      <UpdateUsers />
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

export default UpdateUser;
