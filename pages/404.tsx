import { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { NotFound } from "../components/layouts/NotFound";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Not Found">
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
