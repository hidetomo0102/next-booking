import { GetServerSidePropsContext, NextPage } from "next";
import { Dispatch, Store } from "redux";

import { Home } from "../components/Home";
import { Layout } from "../components/layouts/Layout";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
import { AllRoomsAction, AllRoomsState } from "../types/redux/reducer/room";

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  // TODO: 返り値の定義やる
  async ({ req, query }: GetServerSidePropsContext): Promise<Dispatch<AllRoomsAction>> => {
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
