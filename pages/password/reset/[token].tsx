import { NextPage } from "next";
import React from "react";

import { Layout } from "../../../components/layouts/Layout";
import { NewPassword } from "../../../components/user/NewPassword";

const NewPasswordPage: NextPage = () => {
  return (
    <Layout title="New Password">
      <NewPassword />
    </Layout>
  );
};
