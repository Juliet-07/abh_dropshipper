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
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);

  const exclusiveDeals = [
    {
      image: "/fashion.png",
      text: "Fashion & Apparel",
      price: "#62,000",
    },
    {
      image: "/electronics.png",
      title: "Electronics",
      path: "/contact-us",
    },
    {
      image: "/beauty.png",
      title: "Health & Beauty",
      path: "/contact-us",
    },
    {
      image: "/home.png",
      title: "Home & Kitchen",
      path: "/about-us",
    },
    {
      image: "/grocery.png",
      title: "Grocery and Gourmet",
      path: "/contact-us",
    },
    {
      image: "/beauty.png",
      title: "Health & Beauty",
      path: "/contact-us",
    },
  ];

  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
    const getProducts = () => {
      axios
        .get(`${apiURL}/products/all`)
        .then((response) => {
          console.log(response.data.data.data);
          setProducts(response.data.data.data);
        })
        .catch((error) => {
          console.error("Error fetching vendors:", error);
        });
    };

    // const getCategories = () => {
    //   axios
    //     .get(`${apiURL}/category`)
    //     .then((response) => {
    //       console.log(response.data.data.data);
    //       setCategories(response.data.data.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching vendors:", error);
    //     });
    // };

    // getCategories();
    getProducts();
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen">
            <StickyCart />

            {/* Exclusive Deals */}
            <div className="bg-gray-50 lg:py-16 mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="w-full flex items-center justify-between py-5">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 lg:gap-4 mb-4">
                {exclusiveDeals.map((deal) => (
                  <div className="w-[186px] md:w-[320px] h-[226px] md:h-[340px] border border-[#CFCBCB] rounded-md shadow-md">
                    <div>{deal.image}</div>
                    <div>
                      <p>{deal.text}</p>
                      <p>{deal.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                    Popular Products for Daily Shopping
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    See all our popular products in this week. You can choose
                    your daily needs products from this list and get some
                    special offer with free shipping.
                  </p>
                </div>
              </div> */}
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
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          attributes={attributes}
                        />
                      ))}
                      {/* {popularProducts
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
                        ))} */}
                    </div>
                  )}
                </div>
              </div>
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
            <div className="block mx-auto max-w-screen-2xl">
              <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                <div className="lg:p-16 p-6 bg-[#359E52] shadow-sm border rounded-lg">
                  <CardTwo />
                </div>
              </div>
            </div>

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
