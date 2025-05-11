import { useState } from "react";
import { useCart } from "react-use-cart";
import { notifyError, notifySuccess } from "@utils/toast";

const useAddToCart = () => {
  const [item, setItem] = useState(1);
  const { addItem, items, updateItemQuantity } = useCart();
  // console.log('products',products)
  // console.log("items", items);

  const handleAddItem = (product) => {
    if (product.quantity < 1) return notifyError("Insufficient stock!");

    if (product?.variants?.length > 0) {
      // Optionally open modal for selecting variant
      return;
    }

    const { slug, variants, categories, description, ...updatedProduct } =
      product;

    const newItem = {
      ...updatedProduct,
      title: product?.name,
      id: product.id || product._id,
      // variant: product.prices,
      // price: product.price,
      // originalPrice: product.prices?.originalPrice,
    };
    console.log(newItem, "checking what they are adding here");
    addItem(newItem);
  };

  const handleIncreaseQuantity = (product) => {
    const result = items.find((p) => p.id === product.id);
    const availableStock = product?.quantity - product?.soldQuantity;
    console.log(availableStock, "checking stock");

    if (result) {
      if (result?.quantity + 1 <= availableStock) {
        updateItemQuantity(result.id, result.quantity + 1);
        notifySuccess(
          `Increased quantity of ${product.name} to ${result.quantity + 1}`
        );
      } else {
        notifyError("Insufficient stock!");
      }
    }
  };

  return {
    setItem,
    item,
    handleAddItem,
    handleIncreaseQuantity,
  };
};

export default useAddToCart;
