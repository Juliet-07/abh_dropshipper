import { useRef, useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { FiUser, FiBell } from "react-icons/fi";
import { TfiPackage } from "react-icons/tfi";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import LoginModal from "@component/modal/LoginModal";
import CartDrawer from "@component/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = localStorage.getItem("abhUserInfo");
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const inputRef = useRef(null);

  const handleDropshippingClick = () => {
    if (token) {
      router.push(`/product-info/dropshipping`);
    } else {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    const getProducts = () => {
      axios
        .get(`${apiURL}/products/list/all`)
        .then((response) => {
          // console.log(response.data.data.data);
          setProducts(response.data.data.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    };

    getProducts();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim()) {
      // Assuming each product has a 'name' property
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log(filtered, "checking search list");
      setSearchList(filtered);
    } else {
      setSearchList([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    // Redirect to product page using the product id or slug
    router.push(`/product-info/${suggestion?._id}`);

    setSearchText(suggestion.name);
    setSearchList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText)}`);
    }
    setSearchList([]);
    // setSearchText("");
    inputRef.current?.blur();
  };

  useEffect(() => {
    const getUserData = () => {
      if (!token) {
        console.log("No token found. User is not logged in.");
        setIsLoggedIn(false);
        return; // Exit the function if there's no token.
      }

      axios
        .get(`${apiURL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data.data, "User Info");
          setUserData(response.data.data); // Set user data in the state
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    };

    getUserData();
  }, []);

  return (
    <>
      <CartDrawer />
      {modalOpen && (
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      )}
      <div className="bg-white md:bg-[#359E52] sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-full md:h-16 lg:h-auto flex flex-col md:flex-row md:items-center justify-between py-4 mx-auto">
            {/* Logo */}
            <Link href="/" className="mr-3 lg:mr-12 xl:mr-12">
              <div className="relative w-[250px] h-10 md:h-12">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  src={"/abh_logo.png"}
                  alt="logo"
                />
              </div>
            </Link>
            {/* search button */}
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0 border border-gray-500 md:border-0 mt-4 md:mt-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <label className="flex items-center py-0.5">
                      <input
                        ref={inputRef}
                        type="text"
                        onChange={handleInputChange}
                        value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-6 md:h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder="Search Products, brands, categories"
                      />
                    </label>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <IoSearchOutline />
                    </button>
                  </form>
                  {searchList.length > 0 && (
                    <ul className="absolute top-10 z-30 bg-white w-full max-h-64 overflow-y-auto shadow-lg rounded-md mt-1 border border-gray-200">
                      {searchList.map((list, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(list)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {list.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:flex absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button> */}
              {/* <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                className="relative px-5 text-white text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
              </button> */}
              <button
                aria-label="Total"
                onClick={toggleCartDrawer}
                // onClick={handleDropshippingClick}
                className="relative px-5 text-white text-2xl font-bold"
              >
                <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {totalItems}
                </span>
                <TfiPackage className="w-6 h-6 drop-shadow-xl" />
              </button>
              {/* Profile */}
              <button
                className="text-white font-primaryMedium"
                aria-label="Login"
              >
                {isLoggedIn ? (
                  <div className="flex items-center justify-between">
                    <FaUserCircle
                      size={24}
                      style={{ cursor: "pointer" }}
                      // onClick={() => setShowDropdown(!showDropdown)}
                    />
                    <span className="p-2">{userData?.firstName || "User"}</span>{" "}
                  </div>
                ) : (
                  <div
                    className="flex items-center"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    <span>
                      <FiUser className="w-6 h-6 drop-shadow-xl" />
                    </span>
                    <p className="mx-2 text-sm">Sign in</p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* second header */}
        <NavbarPromo />
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
