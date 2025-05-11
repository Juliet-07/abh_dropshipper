import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { SidebarContext } from "@context/SidebarContext";
import Select from "react-select";
import Layout from "@layout/LayoutCustom";
import useGetSetting from "@hooks/useGetSetting";
import Loading from "@component/preloader/Loading";
import ProductCard from "@component/product/ProductCard";
import CMSkeleton from "@component/preloader/CMSkeleton";
import FilterSidebar from "./filterSidebar";

const sortingOptions = [
  { value: "relevance", label: "All Products" },
  { value: "newest", label: "Newest Arrival" },
  { value: "wholesale", label: "Wholesale Products" },
  { value: "retail", label: "Retail Products" },
  { value: "priceHighLow", label: "Price: High - Low" },
  { value: "priceLowHigh", label: "Price: Low - High" },
];

const AllProducts = ({ attributes }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error } = useGetSetting();
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState(sortingOptions[0]);
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${apiURL}/products/list/all`);
        const data = response?.data?.data?.data || [];
        console.log(data, "data, why is data not loading");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        // Ensure loading is set to false in both success & error cases
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  const groupByCategory = (products) => {
    const grouped = {};

    products.forEach((product) => {
      const catId = product.categoryId?._id;
      if (!grouped[catId]) {
        grouped[catId] = [];
      }
      grouped[catId].push(product);
    });

    return Object.values(grouped); // returns an array of arrays
  };

  // 2. Interleave products across category groups
  const interleaveGroups = (groups) => {
    const result = [];
    let i = 0;

    while (groups.some((group) => group.length > i)) {
      groups.forEach((group) => {
        if (group[i]) {
          result.push(group[i]);
        }
      });
      i++;
    }

    return result;
  };

  const interleavedProducts = useMemo(() => {
    const grouped = groupByCategory(products);
    return interleaveGroups(grouped);
  }, [products]);

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  // Memoized Filtered Products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return interleavedProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categoryId?.name);
      return matchesSearch && matchesCategory;
    });
  }, [interleavedProducts, searchQuery, selectedCategories]);

  // console.log(filteredProducts, "let me see what is going on here");
  // Memoized Sorted Products
  const sortedProducts = useMemo(() => {
    switch (sortOption.value) {
      case "newest":
        return [...filteredProducts].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      case "priceHighLow":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      case "priceLowHigh":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "wholesale":
        // Filter by product_type === 'wholesale' and then sort by price
        return [...filteredProducts]
          .filter((product) => product.productType === "WHOLESALE")
          .sort((a, b) => a.price - b.price); // Sort by price (low to high)
      case "retail":
        // Filter by product_type === 'retail' and then sort by price
        return [...filteredProducts]
          .filter((product) => product.productType === "RETAIL")
          .sort((a, b) => a.price - b.price); // Sort by price (low to high)
      default:
        return filteredProducts;
    }
  }, [filteredProducts, sortOption]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen">
            {/* <StickyCart /> */}
            <div className="relative w-full md:hidden">
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
            <div className="bg-gray-50 md:py-8 mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="hidden md:block">
                  <p className="text-xl font-primarySemibold mb-4">Filter</p>
                  <FilterSidebar
                    setSelectedCategories={setSelectedCategories}
                  />
                </div>
                {/* Mobile Filter */}
                {/* <div className="hidden">
                  <div
                    className="flex items-center gap-10"
                    onClick={toggleMobileFilter}
                  >
                    <p className="font-primarySemibold">Filter</p>
                    <span>{isMobileFilterVisible ? "▲" : "▼"}</span>
                  </div>
                  {isMobileFilterVisible && (
                    <FilterSidebar
                      setSelectedCategories={setSelectedCategories}
                    />
                  )}
                </div> */}
                <main className="w-full flex flex-col">
                  <div className="hidden md:flex items-center justify-between gap-4 mb-4">
                    <div className="md:text-xl font-primarySemibold">
                      All Products
                      {/* <span className="mx-2 font-primaryRegular text-xs">
                        ( {sortedAndFilteredProducts.length} products found)
                      </span> */}
                    </div>
                    <div className="w-full md:w-1/2">
                      <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="font-primarySemibold">Sort by:</p>

                      <Select
                        options={sortingOptions}
                        value={sortOption}
                        onChange={handleSortChange}
                        className="z-50"
                      />
                    </div>
                  </div>

                  {/* Mobile View */}
                  <div className="flex flex-col mb-4 md:hidden">
                    <div className="text-lg md:text-xl font-primarySemibold">
                      All Products
                      {/* <span className="mx-2 font-primaryRegular text-xs">
                        ( {sortedAndFilteredProducts.length} products found)
                      </span> */}
                    </div>
                    <div className="flex items-end gap-4">
                      <div className="w-full md:w-1/2">
                        <input
                          type="text"
                          placeholder="Search for products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full p-2 border rounded"
                        />
                      </div>{" "}
                      <div className="flex flex-col gap-2">
                        <p className="font-primarySemibold">Sort by:</p>

                        <Select
                          options={sortingOptions}
                          value={sortOption}
                          onChange={handleSortChange}
                          className="z-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    {loading ? (
                      <CMSkeleton
                        count={20}
                        height={20}
                        error={error}
                        loading={loading}
                      />
                    ) : (
                      // ) : paginatedProducts.length === 0 ? (
                      //   <div className="text-center py-10">
                      //     <p className="text-lg font-primarySemibold text-gray-500">
                      //       No products found. Try adjusting your search or
                      //       filter.
                      //     </p>
                      //   </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5  2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                        {paginatedProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            attributes={attributes}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  {/* Pagination Buttons */}
                  <div className="flex justify-center gap-2 my-6">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border rounded"
                    >
                      Prev
                    </button>
                    <span className="px-3 py-1">{currentPage}</span>
                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          p < Math.ceil(sortedProducts.length / itemsPerPage)
                            ? p + 1
                            : p
                        )
                      }
                      disabled={
                        currentPage >=
                        Math.ceil(sortedProducts.length / itemsPerPage)
                      }
                      className="px-3 py-1 border rounded"
                    >
                      Next
                    </button>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default AllProducts;
