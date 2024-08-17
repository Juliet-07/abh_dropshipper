import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SidebarContext } from "@context/SidebarContext";
import axios from "axios";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@component/cta-card/CardTwo";
import StickyCart from "@component/cart/StickyCart";
import Loading from "@component/preloader/Loading";
import ProductCard from "@component/product/ProductCard";
import FeatureCategory from "@component/category/FeatureCategory";
import CMSkeleton from "@component/preloader/CMSkeleton";
import MainCarousel from "@component/carousel/MainCarousel";
import OfferCard from "@component/offer/OfferCard";
import Banner from "@component/banner/Banner";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "@heroicons/react/outline";
import Select from "react-select";

const PaymentSummary = ({ params }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();
  const [products, setProducts] = useState([]);
  const [subscriptionPopup, setsubscriptionPopup] = useState(false);

  const [quantity, setquantity] = useState(0);
  const [SelectedSubscription, setSelectedSubscription] =
    useState("Daily plan");
  const [Subscription, setSubscription] = useState([
    "Daily plan",
    "Weekly plan",
    "Monthly plan",
  ]);
  const options = [
    {
      value: "C Idea 8 Inches Andriod Tablet",
      label: "C Idea 8 Inches Andriod Tablet",
    },
    { value: "None", label: "None" },
  ];

  const QuantityOptions = [
    { value: "1", label: "1 carton" },
    { value: "6", label: "6 units" },
    { value: "12", label: "12 units" },
    { value: "18", label: "18 units" },
    { value: "20", label: "20 units" },
    { value: "0", label: "none" },
  ];

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen  mx-auto max-w-screen-2xl ">
            {/* Exclusive Deals */}
            <div className="w-full h-[100px] flex flex-row items-center px-3 sm:px-10 gap-2 flex-wrap ">
              <div className=" text-[12px] md:text-[14px] text-black">Home</div>{" "}
              <ChevronRightIcon width={14} height={14} />{" "}
              <div className=" text-[12px] md:text-[14px] text-black">Product Details</div>
              <ChevronRightIcon width={14} height={14} />{" "}
              <div className=" text-[12px] text-[#10B981] md:text-[14px]">Payment Summary</div>
            </div>
            <div className=" w-full min-h-[100vh] flex lg:flex-row flex-col flex-wrap min-h-[900px] px-3 sm:px-10 gap-8">
              <div className="flex flex-[50] flex-col px-3 sm:px-10 py-10 bg-white ">
                <div className="w-full flex flex-row items-center justify-between text-[16px]">
                  <b>Payment Summary</b>
                  <p className="text-[#359E52] active:opacity-[0.5] cursor-pointer text-[12px] md:text-[14px]">
                    Add more items
                  </p>
                </div>
                <br />
                <div className="w-full flex flex-row items-center justify-between text-[16px] mt-4">
                  <div className="min-w-[90px] h-[90px] border rounded-xl bg-[url(/dummy_products/tablet.png)] bg-contain bg-cover bg-no-repeat" />
                  <div className="flex flex-col p-3 ">
                    <div className="flex flex-wrap text-[14px] ">C Idea 8 Inches Andriod Tablet</div>
                    <div className="flex flex-row gap-2 md:text-[14px] text-[11px] mt-2">
                      <b>QTY</b>
                      <p>1 carton</p>
                    </div>
                    <p className="text-[black] active:opacity-[0.5] cursor-pointer  text-[14px] mt-2  md:hidden flex">
                    ₦15000.00
                  </p>
                  </div>
                  <p className="text-[black] active:opacity-[0.5] cursor-pointer text-[14px] md:flex hidden">
                    ₦15000.00
                  </p>
                </div>
                <br />
                <br />
                <div className="flex flex-row gap-2 w-full border-b h-[50px] justify-between mt-2">
                  <p className="font-[400]">Subtotal</p>
                  <p>₦15000.00</p>
                </div>

                <div className="flex flex-row gap-2 w-full border-b h-[50px] justify-between mt-8">
                  <p className="font-[400]">Shipping fee</p>
                  <p>₦1500.00</p>
                </div>

                <div className="flex flex-row gap-2 w-full border-b min-h-[50px] justify-between mt-8">
                  <div className="flex flex-row items-center gap-4 flex-wrap">
                    <p className="font-[400]">Subscription fee</p>
                    <div className="relative">
                      <button onClick={()=> setsubscriptionPopup(!subscriptionPopup)} className="bg-[#FEC499] rounded-md h-[36px] w-[130px] flex px-1 active:opacity-[0.7] justify-between flex-row items-center gap-1 text-[14px]">
                        {SelectedSubscription} <ChevronRightIcon width={16} height={16} />
                      </button>
                      { subscriptionPopup && <div className="w-[150px] h-[80px] py-2 rounded-md bg-white absolute top-10 border p-2 flex flex-col justify-between">
                        {Subscription.map((data, index) => {
                          if (data !== SelectedSubscription) return <p onClick={()=>{ 
                            setSelectedSubscription(data);
                            setsubscriptionPopup(false);
                        }}
                          className="text-[16px] text-black w-full active:opacity-[0.5] cursor-pointer">{data}</p>;
                        })}
                      </div>}
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
                  <b>₦17000.00</b>
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
                    options={options}
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
                <Link href={`/order-status/${id}`} className=" w-full max-w-[250px]">
                <button className="flex w-[90%] max-w-[250px] h-[50px] rounded-[5px] text-[14px] p-2 bg-[#4CBD6B] items-center justify-center text-white">
                  Proceed to payment
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