// import requests from "./httpServices";

// const CategoryServices = {
//   getShowingCategory: async () => {
//     return requests.get("/category");
//   },
// };

// export default CategoryServices;


import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const getCategories = async () => {
  try {
    const response = await axios.get(`${apiURL}/category`);
    const sortedCategories = response.data.data.items.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export default getCategories;
