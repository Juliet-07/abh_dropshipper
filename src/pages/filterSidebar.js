import { useState, useEffect } from "react";
import getCategories from "@services/CategoryServices";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-2 px-4 flex justify-between items-center"
      >
        <span className="font-primarySemibold">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

const FilterSidebar = ({ setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  useEffect(() => {
    const fetchAndSetCategories = async () => {
      const cats = await getCategories();
      setCategories(cats);
    };

    fetchAndSetCategories();
  }, []);

  return (
    <aside className="w-[270px] bg-white">
      <Accordion title="Category">
        {categories.map((category) => (
          <ul>
            <li className="p-2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(category.name)}
              />
              {""} {category.name}
            </li>
          </ul>
        ))}
      </Accordion>
      <Accordion title="Price">
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full p-2 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full p-2 border rounded"
          />
        </div>
        <button className="mt-3 w-full bg-[#359E52] text-white py-2 rounded-md font-primarySemibold">
          Apply
        </button>
      </Accordion>
      <Accordion title="Brand">
        {/* <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded mb-2"
        /> */}
        <ul className="grid gap-4">
          <li>
            <input type="checkbox" /> Adidas
          </li>
          <li>
            <input type="checkbox" /> Apple
          </li>
          <li>
            <input type="checkbox" /> Binatone
          </li>
          <li>
            <input type="checkbox" /> Cway
          </li>
        </ul>
      </Accordion>
      <Accordion title="Sizes">
        {/* <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded mb-2"
        /> */}
        <ul className="grid gap-4">
          <li>
            <input type="checkbox" /> L
          </li>
          <li>
            <input type="checkbox" /> X
          </li>
          <li>
            <input type="checkbox" /> XL
          </li>
          <li>
            <input type="checkbox" /> XXL
          </li>
          <li>
            <input type="checkbox" /> XXXL
          </li>
        </ul>
      </Accordion>
    </aside>
  );
};

export default FilterSidebar;
