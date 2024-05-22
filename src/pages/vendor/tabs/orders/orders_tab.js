import React from "react";
import VendorHeader from "../../components/VendorHeader";
import { FiSearch } from "react-icons/fi";
import AllOrders from "./AllOrders";
import TrackOrders from "./TrackOrders";

const OrdersTab = ({currentTab}) => {
  return (
    <>
      {
        currentTab == "Track orders" ?
        <TrackOrders />
        : <AllOrders />
      }
    </>
  );
};

export default OrdersTab;
