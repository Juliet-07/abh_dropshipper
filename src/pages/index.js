import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
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

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();

  const exclusiveDeals = [
    {
      image: "/dummy_products/tablet.png",
      title: "C Idea 8 Inches Andriod Tablet",
      price: "#62,000",
    },
    {
      image: "/dummy_products/mobile_cooler.png",
      title: "X52 Mobile Cooler",
      path: "/contact-us",
      price: "#62,000",
    },
    {
      image: "/dummy_products/headphone.webp",
      title: "Headphone",
      path: "/contact-us",
      price: "#62,000",
    },
    {
      image: "/dummy_products/watch.png",
      title: "1800 Smart Watches Ultra 8 Door",
      path: "/about-us",
      price: "#62,000",
    },
    // {
    //   image: "/grocery.png",
    //   title: "Grocery and Gourmet",
    //   path: "/contact-us",
    // },
    // {
    //   image: "/beauty.png",
    //   title: "Health & Beauty",
    //   path: "/contact-us",
    // },
  ];

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen">
            <StickyCart />

            {/* Exclusive Deals */}
            <div className="bg-gray-50 lg:py-16 mx-auto max-w-screen-2xl ">
              <div className="w-full flex items-center justify-between py-5 px-3 sm:px-10">
                <div className="text-sm md:text-xl font-primarySemibold">
                  Exclusive Deals Today
                </div>
                <Link href="/all-products">
                  <button className="hidden md:inline-block w-[250px] h-[44px] text-white font-primaryMedium bg-[#4CBD6B] rounded">
                    View all products
                  </button>
                </Link>
                <div className="block md:hidden">
                  <Link href="/all-products">
                    <button className="p-2 text-white font-primaryMedium bg-[#4CBD6B] rounded">
                      View all
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 lg:gap-4 mb-4"> */}
              <div className="flex w-full px-3 sm:px-10">
                <div className="flex flex-row items-center gap-[20px] overflow-x-scroll hide-scrollbar flex-1 md:justify-between ">
                  {exclusiveDeals.map((deal, index) => (
                    <Link href={`/product-info/${index}`}>
                      <div className="min-w-[186px] md:w-[320px] h-[226px] curssor-pointer md:h-[340px] relative overflow-hidden flex flex-col border border-[#CFCBCB] rounded-md shadow-md product-card">
                        <div className="flex  bg-[#E8F1E9] p-6 flex-[70]">
                          <div
                            style={{
                              background: `url(${deal.image}) center no-repeat`,
                              backgroundSize: "contain",
                            }}
                            className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                          />
                        </div>
                        <div className="w-full flex flex-[30] items-center justify-center p-4">
                          <div className="w-full flex flex-col justify-start">
                            <p className="md:text-[20px] text-[11px]">
                              {deal.title}
                            </p>
                            <b>{deal.price}</b>
                          </div>
                        </div>
                        <button className="border-[1px] border-[#CFCBCB] h-[50px] w-[150px] rounded-md mt-8 bg-[#4CBD6B] text-white absolute right-4 bottom-[-100px] flybtn">
                          preview
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <br />

              {/* Fashion Style */}
              <div className="w-full md:h-[700px] h-[370px] bg-white flex flex-col py-5 px-3 sm:px-10">
                <b className="text-[24px] text-center w-full mt-[30px]">
                  Get Your Fashion Style
                </b>
                <div className="flex flex-1 w-full flex-row md:gap-[50px] gap-[20px] mt-[50px]">
                  <div className="flex-[50] flex bg-black rounded-[20px] relative p-4  bg-[url(/men_shoes.png)] bg-center bg-cover bg-no-repeat">
                    <div className="min-w-[100px] md:w-[200px] md:h-[60px] h-[30px] p-2 bg-[#00000066] absolute left-[10px] bottom-[10px] flex items-center justify-center">
                      <p className="text-white md:text-md text-sm">Men shoes</p>
                    </div>
                  </div>
                  <div className="flex-[50] flex bg-black rounded-[20px] relative p-4 bg-[url(/women_shoes.png)] bg-center bg-cover bg-no-repeat">
                    <div className="min-w-[100px] md:w-[200px] md:h-[60px] h-[30px] p-2 bg-[#00000066] absolute left-[10px] bottom-[10px] flex items-center justify-center">
                      <p className="text-white md:text-md text-sm">
                        Women shoes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Deals */}
              <div className="w-full min-h-[50vh] flex items-center justify-center px-3 sm:px-10 py-20">
                <div className="md:w-[80%] min-h-[500px] flex md:flex-row flex-col-reverse bg-[url(/abstract_bg.png)] bg-cover bg-no-repeat bg-center  p-3 sm:p-10 gap-4">
                  {/* <div className="flex flex-col flex-[40] bg-[url(/hair.png)] bg-contain bg-center bg-no-repeat min-h-[380px]"></div> */}
                  <div className="flex flex-col flex-[60] items-center justify-start pt-5 ">
                    <b className="w-full max-w-[400px] text-center text-[38px]">
                      Sample deals for you
                    </b>
                    <p className="w-full max-w-[400px] text-center text-[16px]">
                      Get personalized offers on gadgets, fashion, and travel.
                      Don’t miss out these exclusive deals.
                    </p>
                    <br />
                    <button className="border-[1px] border-[#CFCBCB] h-[50px] w-[200px] rounded-md mt-8 bg-white">
                      Get Sample
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between py-5 px-3 sm:px-10">
                <div className="text-sm md:text-xl font-primarySemibold">
                  Best Of Electronics
                </div>
              </div>
              <div className="flex w-full px-3 sm:px-10">
                <div className="flex flex-row items-center gap-[20px] overflow-x-scroll hide-scrollbar flex-1 md:justify-between ">
                  {exclusiveDeals.map((deal, index) => (
                    <Link href={`/product-info/${index}`}>
                      <div className="min-w-[186px] md:w-[320px] h-[226px] md:h-[340px] overflow-hidden relative flex flex-col border border-[#CFCBCB] rounded-md shadow-md cursor-pointer product-card">
                        <div className="flex  bg-[#E8F1E9] p-6 flex-[70]">
                          <div
                            style={{
                              background: `url(${deal.image}) center no-repeat`,
                              backgroundSize: "contain",
                            }}
                            className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                          />
                        </div>
                        <div className="w-full flex flex-[30] items-center justify-center p-4">
                          <div className="w-full flex flex-col justify-start">
                            <p className="md:text-[20px] text-[11px]">
                              {deal.title}
                            </p>
                            <b>{deal.price}</b>
                          </div>
                        </div>
                        <button className="border-[1px] border-[#CFCBCB] h-[50px] w-[150px] rounded-md mt-8 bg-[#4CBD6B] text-white absolute right-4 bottom-[-100px] flybtn">
                          preview
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex xl:flex-row gap-[20px]  md:mt-[50px] px-3 sm:px-10 py-5 items-center justify-center md:justify-between flex-col">
                <div className="flex flex-row gap-[20px] w-full flex-[60]">
                  <div className="md:min-w-[320px] flex-[50]  h-[226px] md:h-[340px] p-4 gap-4 overflow-hidden flex flex-col border border-[#CFCBCB] rounded-md shadow-md">
                    <div className="md:text-[20px] text-[9px] text-bold">
                      Kids wears
                    </div>
                    <div className="flex  bg-[#E8F1E9] flex-[90]">
                      <div
                        style={{
                          background: `url(/dummy_products/kids.png) center no-repeat`,
                          backgroundSize: "cover",
                        }}
                        className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                      />
                    </div>
                    <div className="w-full flex flex-[10] items-center justify-center ">
                      <div className="w-full flex flex-col ">
                        <p className="text-[#10B981] cursor-pointer active:opacity-[0.5] md:text-[20px] text-[11px]">
                          See More
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:min-w-[320px] flex-[50] h-[226px] md:h-[340px] p-4 gap-4 overflow-hidden flex flex-col  border border-[#CFCBCB] rounded-md shadow-md">
                    <div className="md:text-[20px] text-[9px]  text-bold">
                      Kitchen and Home Decor
                    </div>
                    <div className="flex  bg-[#E8F1E9] flex-[90]">
                      <div
                        style={{
                          background: `url(/dummy_products/decor.png) center no-repeat`,
                          backgroundSize: "cover",
                        }}
                        className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                      />
                    </div>
                    <div className="w-full flex flex-[10] items-center justify-center ">
                      <div className="w-full flex flex-col ">
                        <p className="text-[#10B981] cursor-pointer active:opacity-[0.5] md:text-[20px] text-[11px]">
                          See More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* column */}
                <div className="flex md:flex-col gap-[20px] min-h-[340px] justify-between  flex-row md:flex-[40] flex-1  w-full ">
                  <div className="  h-[226px] md:min-h-[150px] p-4 gap-4 overflow-hidden flex flex-1 md:flex-row-reverse flex-col border border-[#CFCBCB] rounded-md shadow-md">
                    <div className="flex  bg-[#E8F1E9] flex-[80] md:flex-[40]">
                      <div
                        style={{
                          background: `url(/grocery.png) center no-repeat`,
                          backgroundSize: "cover",
                        }}
                        className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                      />
                    </div>
                    <div className="w-full flex md:flex-[60] items-center justify-center ">
                      <div className="w-full flex flex-col ">
                        <div className="md:text-[20px] text-[11px] text-bold">
                          Grocery
                        </div>
                        <p className="text-[#10B981] cursor-pointer active:opacity-[0.5] md:text-[20px] text-[11px]">
                          Shop Now
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="  h-[226px] md:min-h-[150px] p-4 gap-4 overflow-hidden flex flex-1 md:flex-row-reverse flex-col border border-[#CFCBCB] rounded-md shadow-md">
                    <div className="flex  bg-[#E8F1E9] md:flex-[40] flex-[80]">
                      <div
                        style={{
                          background: `url(/dummy_products/office.png) center no-repeat`,
                          backgroundSize: "cover",
                        }}
                        className={`flex flex-1 bg-[#E8F1E9] bg-center bg-contain bg-no-repeat`}
                      />
                    </div>
                    <div className="w-full flex md:flex-[60] items-center justify-center ">
                      <div className="w-full flex flex-col ">
                        <div className="md:text-[20px] text-[11px] text-bold">
                          Office Supplies
                        </div>
                        <p className="text-[#10B981] cursor-pointer active:opacity-[0.5] md:text-[20px] text-[11px]">
                          Shop Now
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                Popular Products for Daily Shopping
                <p>{deal.price}</p>
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                    See all our popular products in this week. You can choose
                    your daily needs products from this list and get some
                    special offer with free shipping.
                    <p>{deal.price}</p>
                  </p> 
                </div>
              </div> */}
              {/* <div className="flex">
                <div className="w-full">
                  {loading ? (
                    <CMSkeleton
                      count={20}
                      height={20}
                      error={error}
                      loading={loading}
                    />
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          attributes={attributes}
                        />
                      ))}
                      {popularProducts
                        ?.slice(
                          0,
                          storeCustomizationSetting?.home?.popular_product_limit
                        )
                        .map((product) => (
                          <ProductCard
                            key={product._id}
                            product={product}
                            attributes={attributes}
                          />
                        ))}
                    </div>
                  )}
                </div>
              </div> */}
            </div>

            {/* feature category's */}
            {/* <div className="bg-gray-100 lg:py-16 py-10">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-10 flex justify-center">
                  <div className="text-center w-full lg:w-2/5">
                    <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                      Featured Categories
                    </h2>
                    <p className="text-base font-sans text-gray-600 leading-6">
                      Choose your necessary products from this feature
                      categories.
                    </p>
                  </div>
                </div>

                <FeatureCategory />
              </div>
            </div> */}

            {/* promotional banner card */}
            {/* <div className="block mx-auto max-w-screen-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="lg:p-16 p-6 bg-[#359E52] shadow-sm border rounded-lg">
                  <CardTwo />
                </div>
              </div>
            </div> */}

            {/* discounted products */}
            {storeCustomizationSetting?.home?.discount_product_status &&
              discountProducts?.length > 0 && (
                <div
                  id="discount"
                  className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
                >
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_title
                          }
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={5}
                          height={20}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_description
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      {loading ? (
                        <CMSkeleton
                          count={20}
                          height={20}
                          error={error}
                          loading={loading}
                        />
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                          {discountProducts
                            ?.slice(
                              0,
                              storeCustomizationSetting?.home
                                ?.latest_discount_product_limit
                            )
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </Layout>
      )}
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const { cookies } = context.req;
//   const { query, _id } = context.query;

//   const [data, attributes] = await Promise.all([
//     ProductServices.getShowingStoreProducts({
//       category: _id ? _id : "",
//       title: query ? query : "",
//     }),

//     AttributeServices.getShowingAttributes(),
//   ]);

//   return {
//     props: {
//       popularProducts: data.popularProducts,
//       discountProducts: data.discountedProducts,
//       cookies: cookies,
//       attributes,
//     },
//   };
// };

export default Home;
