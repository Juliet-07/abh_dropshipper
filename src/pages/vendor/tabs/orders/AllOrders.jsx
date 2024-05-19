import React from "react";
import VendorHeader from "../../components/VendorHeader";
import { FiSearch } from "react-icons/fi";

const AllOrders = () => {
  const [Filter, setFilter] = React.useState("All");
  return (
    <>
      <VendorHeader title={"Orders"} />
      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll">
        <p className=" my-[10px] w-full px-[0px] text-[16px] font-bold xl:hidden">
          All Orders
        </p>
        <div className="w-full max-w-[534px] h-[40px] bg-white p-[10px] flex items-center rounded-[6px] mt-10px] ">
          <input
            type="text"
            className="w-full  bg-none border-none outline-none  placeholder:text-[12px] placeholder:text-[#37343566]"
            placeholder="Search for products"
          />
          <FiSearch width={16} height={16} color="#37343566" />
        </div>

        <div className="w-full h-[50px] flex flex-row gap-[15px] mt-[20px] overflow-x-scroll no-scrollbar">
          {[
            "All",
            "Pending",
            "Processing",
            "Ready to ship",
            "Shipped",
            "Delivered",
            "Returned",
          ].map((tab, index) => {
            return (
              <div
                onClick={() => setFilter(tab)}
                style={
                  Filter == tab ? { background: "#359E52", color: "white" } : {}
                }
                className={`min-w-[${64 * index}px] h-[37px] p-[10px] cursor-pointer flex items-center justify-center rounded-[6px] bg-[#C1C6C5]`}
              >
                <p className="text-[14px]">{tab}</p>
              </div>
            );
          })}
        </div>

        <div className="w-full min-h-[300px] overflow-x-scroll px-[10px] bg-white mt-[20px] pb-[10px]">
          <div className="min-w-full h-[56px] mt-[10px] p-[10px] flex flex-row items-center justify-between bg-[#F1F4F2] border-[#C1C6C5]">
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Order ID
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Date
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Customer name
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Address
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Order status
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Payment status
            </b>
            <b className="text-[14px] text-black  min-w-[164px] text-center">
              Items
            </b>
          </div>
          {[{}, {}, {}, {}, {}].map((data, index) => {
            return (
              <div className="min-w-full h-[56px] px-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]">
                <p className="text-[12px] text-black min-w-[164px] text-center">
                  120381
                </p>
                <p className="text-[12px] text-black min-w-[164px] text-center">
                  Aug 2, 2024
                </p>
                <p className="text-[12px] text-black min-w-[164px] text-center">
                  Michael Farasin{" "}
                </p>
                <p className="text-[12px] text-black min-w-[164px] text-center">
                  7, Kingsway, Otawa, NY
                </p>
                <div className="text-[12px] text-black min-w-[164px] flex flex-row justify-center items-center">
                  {
                    index % 2 ?
                    <div className="min-w-[66px] h-[35px] bg-[#E3140F14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                    <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                    <p className="text-[#E3140F] text-[12px]">Payment pending</p>
                  </div>
                  :
                  <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                    <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                    <p className="text-[#08932E] text-[12px]">Paid</p>
                  </div>
                  }
                </div>
                <div className="text-[14px] text-black min-w-[164px] flex flex-row justify-center items-center gap-[10px]">
                  <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                  <p className="text-[12px]">Pending</p>
                </div>
                <p className="text-[12px] text-black min-w-[164px] text-center">
                  10
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllOrders;
