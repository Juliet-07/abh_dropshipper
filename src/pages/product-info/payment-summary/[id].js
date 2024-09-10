import { useContext, useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SidebarContext } from "@context/SidebarContext";
import axios from "axios";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import Loading from "@component/preloader/Loading";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";
import Select from "react-select";
import { useCart } from "react-use-cart";
import CartItem from "@component/cart/CartItem";
import { IoBagHandle } from "react-icons/io5";

const PaymentSummary = ({ params }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();
  const [product, setProduct] = useState(null);
  const { items, emptyCart } = useCart();
  const [subscriptionPopup, setsubscriptionPopup] = useState(false);
  const currency = "#";
  const [shippingCost, setShippingCost] = useState(0);
  const cartTotal = useMemo(() => {
    return items.reduce((total, item) => {
      return total + item.sellingPrice * item.quantity;
    }, 0);
  }, [items]);
  const totalCost = cartTotal + shippingCost;
  const [SelectedSubscription, setSelectedSubscription] =
    useState("Daily plan");
  const [Subscription, setSubscription] = useState([
    "Daily plan",
    "Weekly plan",
    "Monthly plan",
  ]);

  const QuantityOptions = [
    { value: "1", label: "1 carton" },
    { value: "6", label: "6 units" },
    { value: "12", label: "12 units" },
    { value: "18", label: "18 units" },
    { value: "20", label: "20 units" },
    { value: "0", label: "none" },
  ];
  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(
        `${apiURL}/products/list/wholesale/${productId}`
      );
      const data = await response.json();
      console.log(data.data, "product details");
      setProduct(data.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen  mx-auto max-w-screen-2xl ">
            {/* Exclusive Deals */}
            <div className="w-full h-20 flex flex-row items-center px-3 sm:px-10 gap-2 flex-wrap ">
              <div className=" text-[12px] md:text-[14px] text-black">Home</div>{" "}
              <ChevronRightIcon width={14} height={14} />{" "}
              <div className=" text-[12px] md:text-[14px] text-black">
                Product Details
              </div>
              <ChevronRightIcon width={14} height={14} />{" "}
              <div className=" text-[12px] text-[#10B981] md:text-[14px]">
                Payment Summary
              </div>
            </div>
            <div className=" w-full min-h-[100vh] flex lg:flex-row flex-col flex-wrap px-3 sm:px-10 gap-8">
              <div className="flex flex-[50] flex-col px-3 sm:px-10 py-10 bg-white ">
                <div className="w-full flex flex-row items-center justify-between text-[16px]">
                  <b>Payment Summary</b>
                  {/* <p className="text-[#359E52] active:opacity-[0.5] cursor-pointer text-[12px] md:text-[14px]">
                    Add more items
                  </p> */}
                </div>
                <br />
                {/* <div className="w-full flex flex-row items-center justify-between text-[16px] mt-4">
                  <div
                    className="min-w-[90px] h-[90px] border rounded-xl bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url(${product?.featured_image})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="flex flex-col p-3 ">
                    <div className="flex flex-wrap text-[14px] ">
                      {product?.name}
                    </div>
                    <div className="flex flex-row gap-2 md:text-[14px] text-[11px] mt-2">
                      <b>QTY</b>
                      <p>1 carton</p>
                    </div>
                    <p className="text-[black] active:opacity-[0.5] cursor-pointer  text-[14px] mt-2  md:hidden flex">
                      ₦ {product?.sellingPrice}
                    </p>
                  </div>
                  <p className="text-[black] active:opacity-[0.5] cursor-pointer text-[14px] md:flex hidden">
                    ₦ {product?.sellingPrice}
                  </p>
                </div> */}
                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-[120px] bg-gray-50 block">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <CartItem key={item.id} item={item} currency={currency} />
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>
                <div className="flex flex-row gap-2 w-full border-b h-[50px] justify-between mt-2">
                  <p className="font-[400]">Subtotal</p>
                  <p>₦{cartTotal?.toFixed(2)}</p>
                </div>

                {/* <div className="flex flex-row gap-2 w-full border-b h-[50px] justify-between mt-8">
                  <p className="font-[400]">Shipping fee</p>
                  <p>₦1500.00</p>
                </div> */}

                <div className="flex flex-row gap-2 w-full border-b min-h-[50px] justify-between mt-8">
                  <div className="flex flex-row items-center gap-4 flex-wrap">
                    <p className="font-[400]">Subscription fee</p>
                    <div className="relative">
                      <button
                        onClick={() => setsubscriptionPopup(!subscriptionPopup)}
                        className="bg-[#FEC499] rounded-md h-[36px] w-[130px] flex px-1 active:opacity-[0.7] justify-between flex-row items-center gap-1 text-[14px]"
                      >
                        {SelectedSubscription}{" "}
                        <ChevronRightIcon width={16} height={16} />
                      </button>
                      {subscriptionPopup && (
                        <div className="w-[150px] h-[80px] py-2 rounded-md bg-white absolute top-10 border p-2 flex flex-col justify-between">
                          {Subscription.map((data, index) => {
                            if (data !== SelectedSubscription)
                              return (
                                <p
                                  onClick={() => {
                                    setSelectedSubscription(data);
                                    setsubscriptionPopup(false);
                                  }}
                                  className="text-[16px] text-black w-full active:opacity-[0.5] cursor-pointer"
                                >
                                  {data}
                                </p>
                              );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <p>₦500.00</p>
                </div>
                <br />
                <p className="text-[red] text-[12px] max-w-[400px]">
                  Your items are held in our warehouse for one day before
                  shipping. You can’t ship items after your subscription expires
                  until renewal.
                </p>
                <br />
                <div className="flex flex-row gap-2 w-full border-b h-[50px] justify-between mt-8">
                  <b>Total</b>
                  <b>₦{parseFloat(totalCost).toFixed(2)}</b>
                </div>
              </div>
              <div className="flex flex-[50] flex-col px-3 sm:px-10 md:py-10 py-4 bg-white items-center min-h-[400px]">
                <b className="w-full">Drop-shipment Summary</b>
                <br />
                <div className="w-full min-h-[200px]">
                  <p className="mb-2">Items to be shipped</p>
                  <Select
                    isMulti
                    name="colors"
                    // options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                  <br />
                  <p className="mb-2">Quantity to be shipped</p>
                  <Select
                    isMulti
                    name="colors"
                    options={QuantityOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <br />
                <Link
                  href={`/order-status/${id}`}
                  className=" w-full max-w-[250px]"
                >
                  <button className="flex w-[90%] max-w-[250px] h-[50px] rounded-[5px] text-[14px] p-2 bg-[#4CBD6B] items-center justify-center text-white">
                    Create Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default PaymentSummary;
