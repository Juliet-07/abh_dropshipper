import React from "react";
import VendorHeader from "../components/VendorHeader";
import { ChevronRightIcon } from "@heroicons/react/outline";
import DropdownComp from "../components/Dropdown";
import { LineChart } from "recharts";
import TotalOrdersChart from "../components/total_orders_chart";
import RevenueChart from "../components/RevenueChart";
import OrderStatusChart from "../components/OrderStatusChart";
import { FiSearch } from "react-icons/fi";

const DashboardTab = () => {
  return (
    <>
      <VendorHeader title={"Dashboard"} />

      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] overflow-y-scroll">
        <p className=" my-[10px] w-full px-[0px] text-[16px] font-bold xl:hidden">
          Dashboard
        </p>

        <div className="w-full min-h-[172px] bg-white rounded-[10px] gap-[24px] flex items-center justify-center xl:justify-between flex-row p-[40px] flex-wrap ">
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#E3140F] absolute left-[-5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#E3140F1F] flex items-center justify-center">
                  <img
                    src="/vendor_assets/out_of_stock.svg"
                    width={18}
                    height={18}
                  />
                </div>{" "}
                <p className="text-[16px]">Out of stock</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-between">
                <div className="flex flex-row  gap-[10px]">
                  <b className="text-[18px]">4</b>
                  <p className="text-[16px]">Product</p>
                </div>

                <button className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                  <p className="text-[12px]">See all</p>{" "}
                  <ChevronRightIcon width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#359E52] absolute left-[-5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#8BCB9033] flex items-center justify-center">
                  <img
                    src="/vendor_assets/orders_icon.svg"
                    width={18}
                    height={18}
                  />
                </div>{" "}
                <p className="text-[16px]">Orders</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-between">
                <div className="flex flex-row  gap-[10px]">
                  <b className="text-[18px]">12</b>
                  <p className="text-[16px]">Pending</p>
                </div>

                <button className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                  <p className="text-[12px]">See all</p>{" "}
                  <ChevronRightIcon width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#F58634] absolute left-[-5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#E3140F1F] flex items-center justify-center">
                  <img
                    src="/vendor_assets/sales_icon.svg"
                    width={20}
                    height={20}
                  />
                </div>{" "}
                <p className="text-[16px]">Out of stock</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-between">
                <div className="flex flex-row  gap-[10px]">
                  <b className="text-[18px]">$23100</b>
                </div>

                <button className="w-[73px] h-[31px] bg-[#F0F0F0] text-[#0F9E36] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                  <p className="text-[12px]">+10%</p>{" "}
                  <img src="/vendor_assets/uparrow.svg" width={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-between mt-[40px]">
          <div className="md:w-[55%] w-full h-[411px] flex flex-col bg-white rounded-[10px] xl:p-[20px] p-[10px]">
            <DropdownComp
              title={"TOTAL ORDERS"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <br />
            <TotalOrdersChart />
          </div>

          <div className="md:w-[42.5%] w-full  h-[411px] bg-white rounded-[10px] p-[20px] mt-[40px] md:mt-[0px]">
            <DropdownComp
              title={"REVENUE"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <br />
            <RevenueChart />
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-between mt-[40px]">
          <div className="md:w-[45%] w-full h-[411px] flex flex-col bg-white rounded-[10px] p-[20px]">
            <DropdownComp
              title={"ORDER STATUS"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <OrderStatusChart />
          </div>

          <div className="md:w-[50%] w-full  h-[411px] overflow-y-scroll bg-white rounded-[10px] p-[20px] mt-[40px] md:mt-[0px]">
            <DropdownComp
              title={"TOP PRODUCTS SOLD"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />

            {[
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
            ].map((data, index) => {
              return (
                <div className="w-full h-[68px] mt-[10px] flex flex-row items-center justify-between border-b-[1px] border-[#CFCBCB]">
                  <div className="w-[60px] h-[60px] border-[1px] border-[#CFCBCB]"></div>

                  <div className="w-[70%] flex flex-col justify-start gap-0 px-4">
                    <p className="text-[16px] text-black  ">{data.product}</p>
                    <p className="text-[14px] text-[#373435] ">{data.type}</p>
                  </div>
                  <p>$250</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[40px] w-full  min-h-[500px] bg-white rounded-[10px] p-[20px] ">
          <div className="w-full h-[56px] p-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px]">
            <div className="w-[300px] flex flex-row justify-between items-center">
              <p className="text-[16px] font-[600]">RECENT ORDERS</p>

              <button className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                <p className="text-[12px]">See all</p>{" "}
                <ChevronRightIcon width={15} height={15} />
              </button>
            </div>

            <div className="w-[80%] max-w-[500px] h-[40px] bg-white p-[10px] hidden md:flex items-center rounded-[6px] border-[#CFCBCB] border-[0.66px] ">
              <input
                type="text"
                className="w-full  bg-none border-none h-[35px] outline-none  placeholder:text-[12px] placeholder:text-[#37343566]"
                placeholder="Search for products"
              />
              <FiSearch width={16} height={16} color="#37343566" />
            </div>
          </div>
          <div className="w-full h-[40px] mt-[10px] md:hidden bg-white p-[10px] flex items-center rounded-[6px] border-[#CFCBCB] border-[0.66px] ">
            <input
              type="text"
              className="w-full  bg-none border-none h-[35px] outline-none  placeholder:text-[12px] placeholder:text-[#37343566]"
              placeholder="Search for products"
            />
            <FiSearch width={16} height={16} color="#37343566" />
          </div>
          <div className="w-full min-h-[300px] overflow-x-scroll">
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
                Items
              </b>
            </div>
            {[{}, {}, {}, {}, {}].map((data, index) => {
              return (
                <div className="min-w-full h-[56px] px-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]">
                  <p className="text-[14px] text-black min-w-[164px] text-center">
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
      </div>
    </>
  );
};

export default DashboardTab;
