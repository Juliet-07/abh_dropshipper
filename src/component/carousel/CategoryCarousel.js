import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import getCategories from "@services/CategoryServices";

const CategoryCarousel = () => {
  const categoryContainerRef = useRef(null);
  const autoPlayInterval = useRef(null);
  const [categories, setCategories] = useState([]);

  // Scroll function
  const scrollCategories = (direction) => {
    const container = categoryContainerRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Auto-play function
  const startAutoPlay = () => {
    // Clear any existing interval
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }

    // Set new interval (3 seconds in this example)
    autoPlayInterval.current = setInterval(() => {
      const container = categoryContainerRef.current;
      if (!container) return;

      // Check if we've reached the end
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        // If at end, scroll back to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise scroll right
        scrollCategories("right");
      }
    }, 3000);
  };

  // Start auto-play on component mount
  useEffect(() => {
    startAutoPlay();

    // Clean up interval on unmount
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, []);

  // Pause on hover for better UX
  const handleMouseEnter = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoPlay();
  };

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };

    fetchAndSetCategories();
  }, []);

  return (
    <div
      className="relative w-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Arrow */}
      <button
        className="absolute left-0 z-10 bg-white shadow-md rounded-full p-1 md:p-2"
        onClick={() => scrollCategories("left")}
      >
        <span className="material-icons">
          <MdOutlineKeyboardArrowLeft />
        </span>
      </button>

      {/* Categories */}
      <div
        id="categoryContainer"
        ref={categoryContainerRef}
        className="w-full flex md:gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((category) => (
          <Link
            key={category._id}
            href={{
              pathname: `/categories/${category._id}`,
              query: { name: category.name },
            }}
          >
            <div className="min-w-[150px] md:min-w-[250px] h-full p-2 md:p-3 flex flex-col items-center justify-center rounded md:rounded-lg">
              <Image
                width={211}
                height={226}
                src={category?.image}
                alt={category?.name}
                className="hidden md:block"
              />
              <Image
                width={100}
                height={75}
                src={category?.image}
                alt={category?.name}
                className="block md:hidden"
              />
              <p className="text-xs md:text-sm py-3 text-center font-primaryMedium">
                {category.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2"
        onClick={() => scrollCategories("right")}
      >
        <span className="material-icons">
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>
    </div>
  );
};

export default CategoryCarousel;
