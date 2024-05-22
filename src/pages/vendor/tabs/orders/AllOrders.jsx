import React from "react";
import VendorHeader from "../../components/VendorHeader";
import { FiSearch } from "react-icons/fi";
import { ArrowLeftIcon, DownloadIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const AllOrders = () => {
  const [Filter, setFilter] = React.useState("All");
  const [CurrentScreen, setCurrentScreen] = React.useState("orders");
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState("");

  React.useEffect(() => {
    // Set the initial tab based on the URL hash
    const hash = window.location.hash;
    if (hash) {
      setActiveTab(hash.substring(1)); // Remove the '#' from the hash
    } else {
      setActiveTab(""); // Default tab
    }
  }, []);

  React.useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveTab(hash.substring(1)); // Remove the '#' from the hash
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`#${tab}`);
  };

  return (
    <>
      {activeTab == "" && (
        <>
          <VendorHeader title={"Orders"} />
          <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
            <div className="w-full min-h-[100vh] flex flex-col overflow-y-scroll  no-scrollbar">
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
                ].map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => setFilter(tab)}
                    className={`min-w-[66px] h-[37px] p-[10px] cursor-pointer flex items-center justify-center rounded-[6px] ${
                      Filter === tab ? "bg-[#359E52] text-white" : "bg-[#C1C6C5]"
                    }`}
                  >
                    <p className="text-[14px] flex flex-row flex-nowrap">
                      {tab}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full min-h-[300px] overflow-x-scroll overflow-y-hidden px-[10px] bg-white mt-[20px] pb-[10px]">
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
                    <div
                      onClick={() => handleTabClick("order_details")}
                      className="min-w-full h-[56px] px-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]"
                    >
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
                        {index % 2 ? (
                          <div className="min-w-[66px] h-[35px] bg-[#E3140F14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                            <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                            <p className="text-[#E3140F] text-[12px]">
                              Payment pending
                            </p>
                          </div>
                        ) : (
                          <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                            <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                            <p className="text-[#08932E] text-[12px]">Paid</p>
                          </div>
                        )}
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
          </div>
        </>
      )}
      {activeTab == "order_details" && (
        <>
          <header className="w-full h-[70px] bg-white flex flex-row items-center justify-between p-[20px]">
            <div className="flex flex-row gap-[26px] ">
              <ArrowLeftIcon
                width={20}
                height={20}
                onClick={() => router.back()}
              />{" "}
              <p className="text-[16px]">Order Details</p>
            </div>

            <div className="flex flex-row gap-[26px] ">
              <button className="h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435] hidden md:block">
                Change status
              </button>
              <div className="bg-[#8BCB901F] md:w-[197px] w-[40px] h-[40px] p-[10px] gap-[11px] flex flex-row items-center justify-center rounded-[6px] ">
                <DownloadIcon width={14} height={14} color="#359E52" />
                <p className="text-[16px] text-[#359E52] hidden md:flex">
                  Download invoice
                </p>
              </div>
            </div>
          </header>
          <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
            <div className="w-full min-h-[100vh]  flex flex-col ">
              <br />
              <div className="w-full">
                <button className="h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435] md:hidden block">
                  Change status
                </button>
              </div>
              <br />
              <div className="w-full bg-white flex flex-col ">
                <div className="w-full flex flex-row min-h-[100px] border-b-[1px] border-[#CFCBCB]">
                  <div className="flex flex-col p-[20px] justify-between items-center">
                    <b className="text-[12px] md:text-[16px] ">
                      Order ID #312311
                    </b>
                    <p>Today 10:29 AM</p>
                  </div>
                  <div className="flex flex-col p-[20px] justify-between items-center">
                    <p>Total price</p>
                    <b className="text-[12px] md:text-[16px]">$250</b>
                  </div>
                  <div className="flex flex-col p-[20px] justify-between items-center">
                    <p>Order status</p>
                    <div className="flex flex-row gap-[10px] items-center justify-center">
                      <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                      <b className="text-[12px] md:text-[16px]"> pending</b>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row min-h-[200px] border-b-[1px] border-[#CFCBCB] flex-wrap">
                  <div className="flex flex-col p-[20px] items-start">
                    <div className="flex flex-row items-center justify-center gap-[10px]">
                      <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                      <b>Customers</b>
                    </div>

                    <br />

                    <div className="flex flex-col  items-start w-full">
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">Full Name:</p>
                        <p className="text-[14px]">Matthew jones</p>
                      </div>
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">Email:</p>
                        <p className="text-[14px]">mathewjones@gmail.com</p>
                      </div>
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">Phone:</p>
                        <p className="text-[14px]">234-812-411-777-01</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-[20px]  items-start">
                    <div className="flex flex-row items-center justify-center gap-[10px]">
                      <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                      <b>Order Details</b>
                    </div>
                    <br />

                    <div className="flex flex-col  items-start w-full">
                      <div className="flex flex-row gap-[10px] w-full items-center">
                        <p className="text-[14px] font-semibold">Payment:</p>
                        <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                          <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                          <p className="text-[#08932E] text-[12px]">Paid</p>
                        </div>
                      </div>

                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">Delivery:</p>
                        <p className="text-[14px] w-[139px]">
                          Deliver before tuesday 05/12/2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-[20px] items-start">
                    <div className="flex flex-row items-center justify-center gap-[10px]">
                      <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                      <b>Customers</b>
                    </div>

                    <br />

                    <div className="flex flex-col  items-start w-full">
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">City:</p>
                        <p className="text-[14px]">Lagos</p>
                      </div>
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">State:</p>
                        <p className="text-[14px]">New york</p>
                      </div>
                      <div className="flex flex-row gap-[10px] w-full">
                        <p className="text-[14px] font-semibold">Address:</p>
                        <p className="text-[14px]">7, Kingsway, Otawa, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-row min-h-[200px] p-[20px] items-center flex-wrap gap-[20px]">
                  <div className="w-[175px] border-[1px] border-[#CFCBCB] h-[120px] rounded-[8px]"></div>
                  <div className="flex flex-row items-center  gap-[20px]">
                    <div className="flex flex-col items-center">
                      <b className="text-[14px]">Apples</b>
                      <p className="text-[12px]">Grocery</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <b className="text-[14px]">QTY</b>
                      <p className="text-[12px]">10</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <b className="text-[14px]">Total Price</b>
                      <p className="text-[12px]">$230</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-end mt-[20px]">
                <div className="w-full md:max-w-[300px] md:gap-[20px] flex flex-row justify-between items-center">
                  <button className="h-[46px] w-[150px] rounded-[6px] bg-[#359E52] text-white">
                    Accept Order
                  </button>
                  <button className="h-[46px] w-[150px] rounded-[6px] bg-none text-[red] border-[1px] border-[red]">
                    Cancel order
                  </button>
                </div>
              </div>
              <div className="min-h-[100px] w-full"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllOrders;
