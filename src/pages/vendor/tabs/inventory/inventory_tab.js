import React from "react";
import Myproducts from "./my_products";
import DraftProducts from "./draft_products";
import Discount from "./discount";
import EditProduct from "./subPage/EditProduct";
import { useRouter } from "next/router";
import AddProduct from "./subPage/AddProduct";

const Inventory = ({ currentTab }) => {
  const [subScreen, setSubScreen] = React.useState(false);
  const [CurrentScreen, setCurrentScreen] = React.useState("");

  const router = useRouter();

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setSubScreen(true);
    } else {
      setSubScreen(false);
    }
  }, []);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if(hash){
        setSubScreen(true);
      }else{
        setSubScreen(false)
        setCurrentScreen("")
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabClick = (tab) => {};

  return (
    <>
      {CurrentScreen == "" && (
        <>
          {currentTab == "My Products" && (
            <Myproducts
              pushEdit={(id) => {
                setSubScreen(true);
                setCurrentScreen("edit");
                router.push(`#edit`);
              }}
              pushAdd={(id) => {
                setSubScreen(true);
                setCurrentScreen("addProduct");
                router.push(`#addProduct`);
              }}
            />
          )}
          {currentTab == "Draft Products" && <DraftProducts />}
          {currentTab == "Discount" && <Discount />}
        </>
      )}

      {CurrentScreen == "edit" && <EditProduct productId={""} />}
      {CurrentScreen == "addProduct" && <AddProduct productId={""} />}
    </>
  );
};

export default Inventory;
