import React from "react";
import DashboardTab from "./tabs/dashboard_tab";
import OrdersTab from "./tabs/orders_tab";
import Inventory from "./tabs/inventory_tab";
import AnalyticalTab from "./tabs/analytics_tab";

const Dashboard = () => {
  const [windowSize, setWindowSize] = React.useState(0);
  const [currentTab, setcurrentTab] = React.useState("dashboard");

  React.useEffect(() => {
    setWindowSize(document.documentElement.clientWidth);
    window.addEventListener("resize", (e) => {
      setWindowSize(document.documentElement.clientWidth);
    });
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] bg-[#F4F4F4] flex flex-row " style={{color: "#373435"}}>
        <div className="w-[300px] h-[100vh] bg-white border-r-[0.6px] md:flex hidden font-[monserrat] border-r-[#C1C6C5] flex-col items-center gap-[12px]">
          <img src="/abh_logo.png" alt="" width={200} className="mt-[50px]" />
          <br />
          {[
            { icon: "/vendor_assets/dashboard.svg", title: "Dashboard" },
            { icon: "/vendor_assets/orders.svg", title: "Orders" },
            { icon: "/vendor_assets/inventory.svg", title: "Inventory" },
            { icon: "/vendor_assets/analytics.svg", title: "Analytics" },
          ].map((tab, index) => {
            return (
              <div style={currentTab == tab.title.toLowerCase() ? {background: "#F1FAF2"} : {}}
              className="w-[219px] h-[38px] flex flex-row cursor-pointer items-center p-[10px] gap-[10px]" onClick={()=> setcurrentTab(tab.title.toLowerCase())}>
                <img src={tab.icon} alt="" width={18} height={18} />
                <p className="text-[14px]">{tab.title}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[100vh] overflow-y-scroll overscroll-x-none">
          {
            currentTab == "dashboard" && <DashboardTab />
          }
          {
            currentTab == "orders" && <OrdersTab />
          }
          {
            currentTab == "inventory" && <Inventory />
          }
          {
            currentTab == "analytics" && <AnalyticalTab />
          }
        </div>
      </div>
    </>
  );
};

export default Dashboard;
