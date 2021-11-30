import { Search } from "../components/Search";
import { Layout } from "../components/layouts/Layout";
import { NextPage } from "next";

const SearchPage: NextPage = () => {
  return (
    <Layout title="Search Rooms">
      <Search />
    </Layout>
  );
};

export default SearchPage;
