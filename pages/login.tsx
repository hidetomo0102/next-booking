import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/client";

import { Login } from "../components/auth/Login";
import { Layout } from "../components/layouts/Layout";

const LoginPage: NextPage = () => {
  return (
    <Layout title="Login">
      <Login />
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default LoginPage;
