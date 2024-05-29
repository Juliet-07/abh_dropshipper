import React from "react";
import VendorHeader from "../components/VendorHeader";
import {
  CalendarIcon,
  ChevronRightIcon,
  DownloadIcon,
} from "@heroicons/react/outline";
import DropdownComp from "../components/Dropdown";
import { LineChart } from "recharts";
import TotalOrdersChart from "../components/total_orders_chart";
import RevenueChart from "../components/RevenueChart";
import OrderStatusChart from "../components/OrderStatusChart";
import { FiCalendar, FiSearch } from "react-icons/fi";

const AnalyticalTab = () => {
  const [Filter, setFilter] = React.useState("Today");

  return (
    <>
      <VendorHeader title={"Analytics"} />

      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] overflow-y-scroll">
        <p className=" my-[10px] w-full px-[0px] text-[16px] font-bold xl:hidden">
          Analytics
        </p>
        <br />
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-[10px] justify-end">
            <p className="">Report</p>

            <select
              name=""
              id=""
              placeholder="Select One"
              className="border-none rounded-[6px] bg-white"
            >
              <option value="" disabled selected>
                Select One
              </option>
              <option value="Sales report">Sales report</option>
              <option value="Return history">Return history</option>
              <option value="Low Stock">Low Stock</option>
            </select>
          </div>

          <div className="bg-[#8BCB901F] md:w-[152px] w-[40px] h-[40px] p-[10px] gap-[11px] flex flex-row items-center justify-center rounded-[6px] ">
            <DownloadIcon width={14} height={14} color="#359E52" />
            <p className="text-[16px] text-[#359E52] hidden md:flex">
              Download
            </p>
          </div>
        </div>
        <br />
        <div className="w-full h-[60px] overflow-x-scroll no-scrollbar overflow-y-hidden ">
          <div className="min-w-[120vw] md:min-w-[100%] h-[50px] flex flex-row gap-[15px] mt-[20px] ">
            {["Today", "This week", "This month ", "Input date"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(tab)}
                  className={`min-w-[70px] h-[37px] p-[10px] cursor-pointer gap-2 flex items-center justify-center rounded-[6px] ${
                    Filter === tab ? "bg-[#F58634] text-white" : "bg-white"
                  }`}
                >
                  <p className="text-[14px] flex flex-row flex-nowrap">{tab}</p>
                  {tab == "Input date" && <FiCalendar size={20} />}
                </button>
              )
            )}
          </div>
        </div>

        <br />

        <div className="w-full min-h-[172px] bg-white rounded-[10px] gap-[24px] flex items-center justify-center xl:justify-between flex-row p-[40px] flex-wrap ">
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#1226D7] absolute left-[-2.5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#1226D71F] flex items-center justify-center">
                  <img src="/vendor_assets/strike.svg" width={18} height={18} />
                </div>{" "}
                <p className="text-[16px]">Total Sales</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-center">
                <div className=" w-[80%] flex flex-row items-center justify-between">
                  <div className="flex flex-row  gap-[10px]">
                    <b className="text-[18px]">$23100</b>
                  </div>

                  <button className="w-[73px] h-[31px] bg-none text-[#0F9E36] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                    <p className="text-[12px]">+10%</p>{" "}
                    <img src="/vendor_assets/uparrow.svg" width={10} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#359E52] absolute left-[-2.5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#1226D71F] flex items-center justify-center">
                  <img
                    src="/vendor_assets/orders_icon.svg"
                    width={18}
                    height={18}
                  />
                </div>{" "}
                <p className="text-[16px]">Total Orders</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-center">
                <div className=" w-[80%] flex flex-row items-center justify-between">
                  <div className="flex flex-row  gap-[10px]">
                    <b className="text-[18px]">12</b>
                  </div>

                  <button className="w-[73px] h-[31px] bg-none text-[#0F9E36] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                    <p className="text-[12px]">+10%</p>{" "}
                    <img src="/vendor_assets/uparrow.svg" width={10} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row relative">
            <div className="h-[100px] w-[10px] bg-[#079D9D] absolute left-[-2.5px] rounded-[10px]"></div>
            <div className="w-[245px] h-[113px] border-[0.22px] z-[100] bg-white p-[20px] flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-[100px] bg-[#079D9D1F] flex items-center justify-center">
                  <img src="/vendor_assets/cart.svg" width={20} height={20} />
                </div>{" "}
                <p className="text-[16px]">Total Products</p>
              </div>
              <div className=" w-full flex flex-row items-center justify-center">
                <div className=" w-[80%] flex flex-row items-center justify-between">
                  <div className="flex flex-row  gap-[10px]">
                    <b className="text-[18px]">12</b>
                  </div>

                  <button className="w-[73px] h-[31px] bg-none text-[#0F9E36] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                    <p className="text-[12px]">+10%</p>{" "}
                    <img src="/vendor_assets/uparrow.svg" width={10} />
                  </button>
                </div>
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
              title={"SALES"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <br />
            <RevenueChart />
          </div>
        </div>

        <div className="mt-[40px] w-full  min-h-[500px] bg-white rounded-[10px] p-[20px] ">
          <div className="w-full h-[56px] p-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px]">
            <div className="w-[300px] flex flex-row justify-between items-center">
              <p className="text-[16px] font-[600]">TOP SELLING PRODUCTS</p>
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
            <div className="flex flex-row items-center gap-4">
              <div className=" h-[56px] mt-[10px] p-[10px] flex flex-1 flex-row items-center bg-[#F1F4F2] border-[#C1C6C5] md:justify-between">
                <b className="text-[14px] text-black  min-w-[164px] text-center">
                  Product Name
                </b>
                <b className="text-[14px] text-black  min-w-[164px] text-center">
                  Price
                </b>
                <b className="text-[14px] text-black  min-w-[164px] text-center">
                  Category
                </b>
                <b className="text-[14px] text-black  min-w-[164px] text-center">
                  Quantity
                </b>
                <b className="text-[14px] text-black  min-w-[164px] text-center">
                  Total amount
                </b>
              </div>
            </div>
            {[{}, {}, {}, {}, {}].map((data, index) => {
              return (
                <div className="flex flex-row items-center gap-4 ">
                  <div className="h-[56px] px-[10px] flex flex-row flex-1  items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]">
                    <p className="text-[14px] text-black min-w-[164px] text-center flex flex-row justify-center items-center gap-[10px]">
                      120381
                    </p>
                    <p className="text-[12px] text-black min-w-[164px] text-center flex flex-row justify-center items-center gap-[10px]">
                      $21
                    </p>
                    <p className="text-[12px] text-black min-w-[164px] text-center flex flex-row justify-center items-center gap-[10px]">
                      Fruits & vegetables
                    </p>
                    <p className="text-[12px] text-black min-w-[164px] text-center flex flex-row justify-center items-center gap-[10px]">
                      44
                    </p>
                    <div className="text-[14px] text-black min-w-[164px] flex flex-row justify-center items-center gap-[10px]">
                      {/* <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" /> */}
                      <p className="text-[12px]">$4321</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticalTab;
