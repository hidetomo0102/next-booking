import { GetServerSidePropsContext, NextPage } from "next";
import { AnyAction, Store } from "redux";

import { Home } from "../components/Home";
import { Layout } from "../components/layouts/Layout";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }: GetServerSidePropsContext): Promise<any> => {
      const props = {
        req: req,
        currentPage: Number(query.page),
        location: query.location,
        guests: query.guests,
        category: query.category,
      };
      await store.dispatch(getRooms(props));
    }
);

export default Index;
