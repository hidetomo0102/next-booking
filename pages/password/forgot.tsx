import { NextPage } from "next";
import React from "react";

import { Layout } from "../../components/layouts/Layout";
import { ForgotPassword } from "../../components/user/ForgotPassword";

const ForgotPasswordPage: NextPage = () => {
  return (
    <Layout title="Forgot Password">
      <ForgotPassword />
    </Layout>
  );
};

export default ForgotPasswordPage;
