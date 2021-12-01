import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";
import React from "react";

import { Layout } from "../../components/layouts/Layout";
import { Profile } from "../../components/user/Profile";

const UpdateProfilePage: NextPage = () => {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Session>> => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: { session } };
};

export default UpdateProfilePage;
