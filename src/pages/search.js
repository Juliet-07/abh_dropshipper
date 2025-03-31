import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@layout/Layout";
import axios from "axios";
import ProductCard from "@component/product/ProductCard";

const Search = () => {
  const router = useRouter();
  const { query } = router.query;

  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [products, setProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}/products/list/all`);
        setProducts(response.data.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when query or products change
  useEffect(() => {
    if (query && products.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults(products);
    }
  }, [query, products]);

  return (
    <Layout title="Search" description="This is search page">
      <div className="mx-auto max-w-screen-2xl p-4 md:p-8">
        <h1 className="md:text-xl font-primaryMedium mb-4">
          Search Results for "{query || "..."}"
        </h1>
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResults.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                // attributes={attributes}
              />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Search;
