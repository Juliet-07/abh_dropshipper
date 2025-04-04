import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState, useMemo } from "react";
import { useCart } from "react-use-cart";
import { IoBagCheckOutline, IoClose, IoBagHandle } from "react-icons/io5";

//internal import
import CartItem from "@component/cart/CartItem";
import LoginModal from "@component/modal/LoginModal";
import { UserContext } from "@context/UserContext";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const Cart = () => {
  const router = useRouter();
  const userInfo = localStorage.getItem("abhUserInfo");
  const [modalOpen, setModalOpen] = useState(false);
  const { isEmpty, items } = useCart();
  const { toggleCartDrawer, closeCartDrawer } = useContext(SidebarContext);
  const { currency } = useUtilsFunction();

  const handleOpenLogin = () => {
    // if (router.push("/?redirect=/checkout")) {
    toggleCartDrawer();
    setModalOpen(!modalOpen);
    // }
  };

  // Calculate the cart total using sellingPrice instead of price
  const cartTotal = useMemo(() => {
    return items.reduce((total, item) => {
      return total + item.sellingPrice * item.quantity;
    }, 0);
  }, [items]);

  const handleCheckout = () => {
    if (userInfo) {
      closeCartDrawer();
      // Redirect to the checkout page if the user is logged in
      router.push("/checkout");
    } else {
      // Open the login modal if the user is not logged in
      handleOpenLogin();
    }
  };

  const checkoutButton = (
    <button
      onClick={handleCheckout}
      className="w-full py-3 px-3 rounded-lg bg-[#359E52] hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300"
    >
      <span className="align-middle font-medium font-serif">
        Proceed To Checkout
      </span>
      <span className="rounded-lg font-bold font-serif py-2 px-3 bg-white text-emerald-600">
        {currency}
        {cartTotal.toFixed(2)}
        {/* {cartTotal} */}
      </span>
    </button>
  );

  return (
    <>
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer font-primaryRegular">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <IoBagCheckOutline />
            </span>
            Shopping Cart
          </h2>
          <button
            onClick={closeCartDrawer}
            className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400"
          >
            <IoClose />
            <span className="font-sens text-sm text-gray-500 hover:text-red-400 ml-1">
              Close
            </span>
          </button>
        </div>
        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-full">
          {isEmpty && (
            <div className="flex flex-col h-full justify-center">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-emerald-100">
                  <span className="text-emerald-600 text-4xl block">
                    <IoBagHandle />
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-gray-700 text-lg pt-5">
                  Your cart is empty
                </h3>
                <p className="px-12 text-center text-sm text-gray-500 pt-2">
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            </div>
          )}

          {items.map((item, i) => (
            <CartItem key={i + 1} item={item} />
          ))}
        </div>
        <div className="mx-5 my-3">{items.length > 0 && checkoutButton}</div>
      </div>
    </>
  );
};

export default Cart;
