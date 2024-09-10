import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

//internal import
import Layout from "@layout/Layout";
import Label from "@component/form/Label";
import Error from "@component/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@component/form/InputArea";
import Sidebar from "./sidebar";

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  // const [productsData, setProductsData] = useState([]);

  const productsData = [
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 34,
      price: "$230",
      status: "pending",
    },
    {
      id: "1565132",
      name: "Cup",
      type: "Merch",
      sku: "123456",
      sold: "N/A",
      units: 25,
      price: "$230",
      status: "deleted",
    },
    {
      id: "1565132",
      name: "Mangoes",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 10,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Bread",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 5,
      price: "$230",
      status: "pending",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 11,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Bread",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 8,
      price: "$230",
      status: "deleted",
    },
    {
      id: "1565132",
      name: "Mangoes",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 11,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Mangoes",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 61,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 22,
      price: "$230",
      status: "pending",
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const paginatedTable = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Sidebar>
        <div className="flex-grow md:px-6">
          {/* Inventory Header */}
          <div className="w-full bg-white rounded-lg border border-[#CFCBCB] font-primarySemibold border-l-4 border-l-[#359E52] p-4 mb-6">
            Inventory
          </div>
          <div className="w-full overflow-x-scroll overflow-y-hidden px-3 mb-4 bg-white font-primaryRegular">
            <div className="flex flex-row items-center gap-4">
              <div className="md:w-full h-[56px] mt-[10px] p-[10px] flex flex-row items-center justify-between bg-[#F1F4F2] border-[#C1C6C5] font-primarySemibold">
                <b className="text-[14px] text-black  min-w-[100px]">Date</b>
                <b className="text-[14px] text-black  min-w-[150px]">Product</b>

                <b className="text-[14px] text-black  min-w-[150px]">
                  Quantity
                </b>
                <b className="text-[14px] text-black  min-w-[150px]">
                  Quantity Shipped
                </b>
                <b className="text-[14px] text-black  min-w-[150px]">
                  Quantity Left
                </b>
                <b className="text-[14px] text-black  min-w-[150px] text-center">
                  Action
                </b>
              </div>
            </div>
            {paginatedTable.map((data, index) => {
              return (
                <div className="flex flex-row items-center gap-4">
                  <div className=" md:w-full  h-[56px] px-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]">
                    <p className="text-[12px] text-black min-w-[100px]">
                      120381
                    </p>
                    <div className="text-[12px] text-black min-w-[150px]">
                      <div className="flex flex-row items-center gap-2">
                        <img src="/apples.png" alt="" width={50} height={50} />
                        <div
                          className="flex flex-col justify-start h-[40px] active:opacity-5 cursor-pointer"
                          // onClick={() => setPreview(true)}
                        >
                          <b className="">{data.name}</b>
                          <p className="">{data.type}</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-[12px] text-black min-w-[150px] flex items-center gap-2">
                      <p>{data.units} Units</p>
                    </div>
                    <p className="text-[12px] text-black min-w-[150px] text-center">
                      15
                    </p>
                    <p className="text-[12px] text-black min-w-[150px] text-center">
                      10
                    </p>
                    <div className="min-w-[150px] text-center">
                      <button className="w-20 h-[35px] bg-[#088D2D]/[12%] text-xs text-[#088D2D]">
                        Ship Item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {!productsData[0] && (
              <div className="flex flex-col items-center justify-center my-5">
                <p className="text-[#373435] font-primaryMedium">
                  No recent orders
                </p>
                <img
                  width={400}
                  height={400}
                  src="/order-dashboard.png"
                  alt="No orders"
                  className="mt-4"
                />
              </div>
            )}

            <div className="flex justify-end mt-4 mb-2 font-primaryMedium">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-8 rounded mx-1 p-2 ${
                    currentPage === index + 1
                      ? "bg-[#359E52] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Inventory;
