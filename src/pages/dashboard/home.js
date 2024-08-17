import React from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell, FiDownload } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@component/form/InputArea";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <div className="flex-grow md:px-6">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <button className="flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-2 rounded-md">
              <FiDownload className="text-lg" />
              <span>Download</span>
            </button>
          </div>

          {/* Date Filters */}
          <div className="flex space-x-4 mb-8">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
              Today
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              This week
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              This month
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">
              Customize date
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="text-gray-500">Subscription plan</p>
              <div className="flex justify-between items-center mt-2">
                <span>Daily</span>
                <span className="flex items-center space-x-1 text-green-600">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>Active</span>
                </span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="text-gray-500">My inventory</p>
              <div className="flex justify-between items-center mt-2">
                <span>Items</span>
                <span className="text-blue-500">2</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="text-gray-500">Total orders</p>
              <div className="flex justify-between items-center mt-2">
                <span>Items</span>
                <span className="text-orange-500">0</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md"></div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Product</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">Payment status</th>
                  <th className="py-2">Order status</th>
                </tr>
              </thead>
              <tbody>
                {/* Placeholder for no recent orders */}
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    <img
                      src="/path-to-placeholder-image.png"
                      alt="No recent orders"
                      className="mx-auto mb-4"
                    />
                    No recent orders
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
