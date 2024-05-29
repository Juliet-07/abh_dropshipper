import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import { IoSearch } from 'react-icons/io5'
import { ChevronRightIcon } from '@heroicons/react/solid'


const SideNav = ({InventorycurrentSubTab, OrderscurrentSubTab, currentTab, setOrderscurrentSubTab, setInventorycurrentSubTab, setcurrentTab, close}) => {
  const router = useRouter();

//   const [showNav, setNav] = React.useState(false);
//   const [currentTab, setcurrentTab] = React.useState("dashboard");
//   const [OrderscurrentSubTab, setOrderscurrentSubTab] = React.useState({
//     tab: "",
//     child: "All orders",
//   });
//   const [InventorycurrentSubTab, setInventorycurrentSubTab] = React.useState({
//     tab: "",
//     child: "My Products",
//   });


  return (
    <div className="w-full h-[100vh] z-[12000] p-[20px] flex-col fixed left-0 top-0 bg-white md:hidden flex transition-all duration-100">
      <XIcon
        width={30}
        height={30}
        onClick={() => router.back()}
        color="red"
        className="absolute active:opacity-5 right-[20px] top-[20px]"
      />

      <img
        src="/abh_logo.png"
        alt=""
        width={172}
        className="mt-[50px] mb-[50px]"
      />
      <br />
      {[
        { icon: "/vendor_assets/dashboard.svg", title: "Dashboard" },
        { icon: "/vendor_assets/orders.svg", title: "Orders" },
        { icon: "/vendor_assets/inventory.svg", title: "Inventory" },
        { icon: "/vendor_assets/analytics.svg", title: "Analytics" },
      ].map((tab, index) => {
        return (
          <div>
            <div
              style={
                currentTab == tab.title.toLowerCase()
                  ? { background: "#F1FAF2" }
                  : {}
              }
              className="w-full h-[56px] flex flex-row cursor-pointer items-center mt-[10px] justify-between p-[10px] rounded-[6px] "
              onClick={() => {
                  currentTab == "orders" &&
                  setOrderscurrentSubTab({
                      tab: currentTab,
                      child: "All orders",
                    });
                    setcurrentTab(tab.title.toLowerCase());
                    tab.title === "Orders"  ||
                    tab.title === "Inventory" ? null: router.back() ;
              }}
            >
              <div className="flex flex-row gap-[10px]">
                <img src={tab.icon} alt="" width={18} height={18} />
                <p className="text-[14px]">{tab.title}</p>
              </div>

              {(tab.title == "Orders") | (tab.title == "Inventory") ? (
                <ChevronRightIcon
                  width={14}
                  height={14}
                  className=" transition-all duration-[0.2s]"
                  style={
                    (tab.title === "Orders" && currentTab == "orders") ||
                    (tab.title === "Inventory" && currentTab == "inventory")
                      ? { transform: "rotate(90deg)" }
                      : {}
                  }
                />
              ) : null}
            </div>
            {tab.title === "Orders" && currentTab == "orders" && (
              <div className="w-full flex flex-col">
                {["All orders", "Track orders"].map((subTab, index) => {
                  return (
                    <div
                      onClick={() =>{
                        setOrderscurrentSubTab({
                          tab: currentTab,
                          child: subTab,
                        })
                    router.back();

                        }
                      }
                      style={
                        subTab == OrderscurrentSubTab.child
                          ? {
                              color: "#359E52",
                            }
                          : {}
                      }
                      className={`w-[80%] h-[50px] cursor-pointer border-b-[#CFCBCB] flex items-center justify-start mx-8 ${
                        index == 0 && "border-b-[0.66px]"
                      }`}
                    >
                      {subTab}
                    </div>
                  );
                })}
              </div>
            )}

            {tab.title == "Inventory" && currentTab == "inventory" && (
              <div className="w-full flex flex-col">
                {["My Products", "Draft Products", "Discount"].map(
                  (subTab, index) => {
                    return (
                      <div
                        onClick={() =>{
                          setInventorycurrentSubTab({
                            tab: currentTab,
                            child: subTab,
                          })
                    router.back();

                        }
                        }
                        style={
                          subTab == InventorycurrentSubTab.child
                            ? {
                                color: "#359E52",
                              }
                            : {}
                        }
                        className={`w-[80%] h-[50px] cursor-pointer border-b-[#CFCBCB] flex items-center justify-start mx-8 ${
                          index == 0 || index == 1 ? "border-b-[0.66px]" : ""
                        }`}
                      >
                        {subTab}
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
