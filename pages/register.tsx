import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/client";

import { Register } from "../components/auth/Register";
import { Layout } from "../components/layouts/Layout";

const RegisterPage: NextPage = () => {
  return (
    <Layout>
      <Register />
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

export default RegisterPage;
