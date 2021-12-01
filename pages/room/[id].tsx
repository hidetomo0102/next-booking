import { GetServerSidePropsContext, NextPage } from "next";
import { Layout } from "../../components/layouts/Layout";
import { RoomDetails } from "../../components/room/RoomDetails";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

const RoomDetailsPage: NextPage = () => {
  return (
    <Layout title="Room Details">
      <RoomDetails />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }: GetServerSidePropsContext): Promise<any> => {
      let props;
      if (params) {
        props = {
          req: req,
          id: params.id,
        };
      } else {
        props = {
          req: req,
        };
      }
      await store.dispatch(getRoomDetails(props));
    }
);

export default RoomDetailsPage;
