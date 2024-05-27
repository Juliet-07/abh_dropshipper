import React from "react";
import DashboardTab from "./tabs/dashboard_tab";
import OrdersTab from "./tabs/orders/orders_tab";
import Inventory from "./tabs/inventory/inventory_tab";
import AnalyticalTab from "./tabs/analytics_tab";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Dashboard = () => {
  const [windowSize, setWindowSize] = React.useState(0);
  const [currentTab, setcurrentTab] = React.useState("dashboard");
  const [OrderscurrentSubTab, setOrderscurrentSubTab] = React.useState({
    tab: "",
    child: "All orders",
  });
  const [InventorycurrentSubTab, setInventorycurrentSubTab] = React.useState({
    tab: "",
    child: "My Products",
  });

  React.useEffect(() => {
    setWindowSize(document.documentElement.clientWidth);
    window.addEventListener("resize", (e) => {
      setWindowSize(document.documentElement.clientWidth);
    });
  }, []);

  return (
    <>
      <div
        className="w-full h-[100vh] bg-[#F4F4F4] flex flex-row "
        style={{ color: "#373435" }}
      >
        <div className="w-[300px] h-[100vh] bg-white border-r-[0.6px] xl:flex hidden font-[monserrat] border-r-[#C1C6C5] flex-col items-center gap-[12px]">
          <img src="/abh_logo.png" alt="" width={172} className="mt-[50px]" />
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
                  className="w-[219px] h-[38px] flex flex-row cursor-pointer items-center justify-between p-[10px] rounded-[6px] "
                  onClick={() => {
                    currentTab == "orders" &&
                      setOrderscurrentSubTab({
                        tab: currentTab,
                        child: "All orders",
                      });
                    setcurrentTab(tab.title.toLowerCase());
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
                          onClick={() =>
                            setOrderscurrentSubTab({
                              tab: currentTab,
                              child: subTab,
                            })
                          }
                          style={
                            subTab == OrderscurrentSubTab.child
                              ? {
                                  color: "#359E52",
                                }
                              : {}
                          }
                          className={`w-[80%] h-[37px] cursor-pointer border-b-[#CFCBCB] flex items-center justify-start mx-8 ${
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
                            onClick={() =>
                              setInventorycurrentSubTab({
                                tab: currentTab,
                                child: subTab,
                              })
                            }
                            style={
                              subTab == InventorycurrentSubTab.child
                                ? {
                                    color: "#359E52",
                                  }
                                : {}
                            }
                            className={`w-[80%] h-[37px] cursor-pointer border-b-[#CFCBCB] flex items-center justify-start mx-8 ${
                              index == 0 || index == 1
                                ? "border-b-[0.66px]"
                                : ""
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
        <div className="w-full h-[100vh] overflow-y-scroll overscroll-x-none no-scrollbar font-[monserrat]">
          {currentTab == "dashboard" && <DashboardTab />}
          {currentTab == "orders" && (
            <OrdersTab currentTab={OrderscurrentSubTab.child} />
          )}
          {currentTab == "inventory" && (
            <Inventory currentTab={InventorycurrentSubTab.child} />
          )}
          {currentTab == "analytics" && <AnalyticalTab />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
