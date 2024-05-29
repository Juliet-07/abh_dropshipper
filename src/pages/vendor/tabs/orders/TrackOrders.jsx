import { ArrowLeftIcon, MenuIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import React from "react";
import { FiBell, FiUser } from "react-icons/fi";

const TrackOrders = () => {
  const [showRecords, setRecords] = React.useState(false);
  return (
    <>
      <header className="w-full h-[70px] md:flex hidden bg-white  flex-row items-center justify-between p-[20px]">
        <div className="flex flex-row gap-[26px] ">
          <p className="text-[16px]">Orders</p>
        </div>
      </header>
      <header className="w-full h-[72px] bg-none md:hidden flex items-center flex-row justify-between p-[20px] ">
        <div className="flex flex-row items-center gap-[20px]">
          <MenuIcon width={24} height={24} color="#373435" className=" cursor-pointer active:opacity-5 " onClick={()=> window.open("#SideNav", "_parent")} />
          <img src="/abh_logo.png" width={119.29} height={20.76} />
        </div>

        <div className="flex flex-row items-center gap-[44px]">
          <FiBell width={24} height={24} color="#373435" className=" cursor-pointer active:opacity-5 " onClick={()=> window.open("#notifications", "_parent")}  />
          <FiUser width={24} height={24} color="#373435" className=" cursor-pointer active:opacity-5 " onClick={()=> window.open("#profile", "_parent")}  />
        </div>
      </header>

      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
        <div className="w-full min-h-[100vh]  flex flex-row justify-between  flex-wrap md:flex-nowrap gap-[20px] ">
          <div className="md:w-full w-[650px] md:min-h-[80vh] min-h-[400px]  flex flex-col bg-white xl:p-[40px] p-[20px]  ">
            <div className="w-full flex justify-center items-center h-[100px]">
              <img src="" alt="" />
              <b className="text-black text-[22px]">Track a Package</b>
            </div>
            <div className="w-full flex justify-center items-center h-[100px] md:gap-[20px] gap-1">
              <div
                className="w-full max-w-[534px] h-[40px] bg-[#F3F5F4] p-[10px] 
              border-[1px] border-[#CFCBCB]
            flex items-center rounded-[6px] mt-10px] "
              >
                <input
                  type="text"
                  className="w-full  bg-transparent border-none outline-none  placeholder:text-[12px] placeholder:text-[#37343566]"
                  placeholder="Search for products"
                />
              </div>
              <button
                onClick={() => setRecords(true)}
                className={` active:opacity-[0.5] 
                 md:w-[186px] w-[150px] h-[46px] p-[10px] cursor-pointer flex items-center justify-center rounded-[6px] 
                      bg-[#359E52] text-white
                    `}
              >
                <p className="text-[14px] flex flex-row flex-nowrap">
                  Track order
                </p>
              </button>
            </div>

            <div className="flex flex-row items-center justify-center gap-[10px]">
              <p className="md:text-[18px] text-[16px] flex flex-row items-center gap-[5px]">
                Need Assistance{" "}
                <p className="text-[#359E52] md:text-[18px] cursor-pointer text-[16px]">
                  Get help
                </p>
              </p>
            </div>
          </div>

          {showRecords && (
            <div className="w-full max-w-[462px] min-h-[80vh]  flex flex-col bg-white xl:p-[40px] p-[20px]  ">
              <div className="flex flex-row items-center justify-between">
                <b className=" text-[16px] ">Order ID #312311</b>
                <div className="h-[43px] min-w-[215px] bg-[#08932E] text-white flex items-center justify-center">Order ready to ship</div>
              </div>

              <div className="flex flex-row items-center gap-[13px] mt-[20px]">
                <div className="rounded-[100px] bg-[#08932E] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[18px] text-[#08932E]">Order Accepted</b>
                  <p className="text-[14px]">on Aug 3, 1823</p>
                </div>
              </div>
              <div className="w-full border-l-[2px] h-[58px] ml-[20px] my-2"></div>
              <div className="flex flex-row items-center gap-[13px]">
                <div className="rounded-[100px] bg-[#08932E] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[20px] text-[#08932E]">Order in Process</b>
                  <p className="text-[14px]">on Aug 3, 2023</p>
                </div>
              </div>
              <div className="w-full border-l-[2px] h-[58px] ml-[20px] my-2"></div>
              <div className="flex flex-row items-center gap-[13px]">
                <div className="rounded-[100px] bg-[#373435] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[18px] text-[#373435]">Order Ready for Shipment</b>
                  {/* <p className="text-[16px]">on Aug 3, 2023</p> */}
                </div>
              </div>
              <div className="w-full border-l-[2px] h-[58px] ml-[20px] my-2"></div>
              <div className="flex flex-row items-center gap-[13px]">
                <div className="rounded-[100px] bg-[#373435] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[18px] text-[#373435]">Order Shipped</b>
                  {/* <p className="text-[16px]">on Aug 3, 2023</p> */}
                </div>
              </div>
              <div className="w-full border-l-[2px] h-[58px] ml-[20px] my-2"></div>
              <div className="flex flex-row items-center gap-[13px]">
                <div className="rounded-[100px] bg-[#373435] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[18px] text-[#373435]">Order Out for Delivery</b>
                  {/* <p className="text-[16px]">on Aug 3, 2023</p> */}
                </div>
              </div>
              <div className="w-full border-l-[2px] h-[58px] ml-[20px] my-2"></div>
              <div className="flex flex-row items-center gap-[13px]">
                <div className="rounded-[100px] bg-[#373435] w-[50px] h-[50px] flex items-center justify-center"><CheckIcon width={22} height={22} color="white" /></div>
                <div className="flex flex-col">
                  <b className="text-[18px] text-[#373435]">Delivered</b>
                  {/* <p className="text-[16px]">on Aug 3, 2023</p> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrackOrders;
