import React from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@component/form/InputArea";

const Dashboard = () => {
  return (
    <Layout>
      <div>
        Dashboard home. You can create the layout here or however you want
      </div>
    </Layout>
  );
};

export default Dashboard;
