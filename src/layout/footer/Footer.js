import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import useTranslation from "next-translate/useTranslation";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

//internal import
import { UserContext } from "@context/UserContext";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";
import LoginModal from "@component/modal/LoginModal";

const Footer = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem("abhUserInfo");
  const [isModalOpen, setModalOpen] = useState(false);

  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { showingTranslateValue } = useUtilsFunction();
  const { loading, storeCustomizationSetting } = useGetSetting();

  const handleProtectedRoute = (path) => {
    if (token) {
      window.location.href = path;
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      {isModalOpen && (
        <LoginModal modalOpen={isModalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
            {/* Company */}
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Company
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link
                    href="/about-us"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href="/contact-us"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li className="flex items-baseline">
                <Link
                  href="#"
                  className="text-gray-600 inline-block w-full hover:text-emerald-500"
                >
                  Careers
                </Link>
              </li> */}
                <li className="flex items-baseline">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href="/terms-and-conditions"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest News */}
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Category
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link
                    href="#"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Fashion and Apparel
                  </Link>
                </li>

                <li className="flex items-baseline">
                  <Link
                    href="#"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href="#"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Grocery & Gourmet
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href="#"
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                  >
                    Home and Kitchen
                  </Link>
                </li>
                {/* <li className="flex items-baseline">
                <Link
                  href="#"
                  className="text-gray-600 inline-block w-full hover:text-emerald-500"
                >
                  Kids Care
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href="#"
                  className="text-gray-600 inline-block w-full hover:text-emerald-500"
                >
                  Sport and Outdoor
                </Link>
              </li> */}
              </ul>
            </div>

            {/* My Account */}
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-semibold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                My Account
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <div
                    onClick={() => handleProtectedRoute("/dashboard/home")}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500 cursor-pointer"
                  >
                    Dashboard
                  </div>
                </li>
                <li className="flex items-baseline">
                  <div
                    onClick={() => handleProtectedRoute("/dashboard/orders")}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500 cursor-pointer"
                  >
                    Track Orders
                  </div>
                </li>
                <li className="flex items-baseline">
                  <div
                    onClick={() => handleProtectedRoute("/dashboard/orders")}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500 cursor-pointer"
                  >
                    My Orders
                  </div>
                </li>
                <li className="flex items-baseline">
                  <div
                    onClick={() => handleProtectedRoute("/dashboard/profile")}
                    className="text-gray-600 inline-block w-full hover:text-emerald-500 cursor-pointer"
                  >
                    My Profile
                  </div>
                </li>
              </ul>
            </div>

            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <Link
                href="/"
                className="mr-3 lg:mr-12 xl:mr-12"
                rel="noreferrer"
              >
                <div className="relative md:w-[200px] h-10">
                  <Image
                    // width={110}
                    // height={40}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                    src={
                      // storeCustomizationSetting?.footer?.block4_logo ||
                      "/abh_logo.png"
                    }
                    alt="logo"
                  />
                </div>
              </Link>
              <p className="leading-7 font-sans text-sm text-gray-600">
                10 Havana Estate SARS Road, Port Harcourt, Nigeria
                <br />
                <span>Tel: +234 70 6113 1509</span>
                <br />
                <span>Email: info@abhmarkets.com</span>
              </p>
            </div>
          </div>

          <hr className="hr-line"></hr>

          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
              {/* <div></div> */}
              <div className="col-span-1">
                <div>
                  {(storeCustomizationSetting?.footer?.social_facebook ||
                    storeCustomizationSetting?.footer?.social_twitter ||
                    storeCustomizationSetting?.footer?.social_pinterest ||
                    storeCustomizationSetting?.footer?.social_linkedin ||
                    storeCustomizationSetting?.footer?.social_whatsapp) && (
                    <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                      {t("common:footer-follow-us")}
                    </span>
                  )}
                  <ul className="text-sm flex">
                    <li className="flex items-center mr-3 transition ease-in-out duration-500">
                      <Link
                        href="https://www.instagram.com/abh.markets?igsh=MTZ1d3g3NHdhdTY4ZQ=="
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500"
                      >
                        <FaInstagramSquare
                          size={34}
                          style={{ color: "#E1306C" }}
                        />
                      </Link>
                    </li>

                    <li className="flex items-center mr-3 transition ease-in-out duration-500">
                      <Link
                        href="https://www.facebook.com/profile.php?id=61564576415298&mibextid=ZbWKwL"
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500"
                      >
                        <FacebookIcon size={34} round />
                      </Link>
                    </li>
                    <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                      <Link
                        href="https://x.com/abh_markets?t=UlVe1N1POrJAiXH9mdtnAw&s=09"
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500"
                      >
                        <FaXTwitter size={34} round />
                      </Link>
                    </li>
                    <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                      <Link
                        href="https://www.linkedin.com/company/abh-markets"
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500"
                      >
                        <LinkedinIcon size={34} round />
                      </Link>
                    </li>

                    <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                      <Link
                        href="https://www.tiktok.com/@abh.markets?_t=8p5BfvAIYib&_r=1"
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500"
                      >
                        <FaTiktok size={34} round />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 text-center hidden lg:block md:block">
                <div>
                  <p className="text-base leading-7 font-medium block">
                    {t("common:footer-call-us")}
                  </p>
                  <h5 className="text-2xl font-bold text-[#359E52] leading-7">
                    +2347061131509
                  </h5>
                </div>
              </div>
              <div className="col-span-1 hidden lg:block md:block">
                <ul className="lg:text-right">
                  <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                    <Image
                      width={274}
                      height={85}
                      className="w-full"
                      src={
                        storeCustomizationSetting?.footer?.payment_method_img ||
                        "/payment-method/payment-logo.png"
                      }
                      alt="payment method"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
        <p className="text-sm text-gray-500 leading-6">
          Copyright {new Date().getFullYear()} @
          <Link
            href="https://themeforest.net/user/htmllover"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500"
          >
            HtmlLover
          </Link>
          , All rights reserved.
        </p>
      </div> */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
