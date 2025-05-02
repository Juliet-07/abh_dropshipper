import React from "react";
import { FiTruck } from "react-icons/fi";

const InputShipping = ({
  register,
  value,
  time,
  cost,
  currency,
  description,
  handleShippingCost,
  onClick,
  isLoading = false,
}) => {
  return (
    <div>
      <div
        className={`p-3 card border border-gray-200 rounded-md ${
          isLoading ? "bg-gray-50 animate-pulse" : "bg-white"
        }`}
      >
        <label className="cursor-pointer label">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3 text-gray-400">
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <FiTruck />
                )}
              </span>
              <div>
                <h6 className="font-serif font-medium text-sm text-gray-600">
                  {value}
                </h6>
                <p className="text-xs text-gray-500 font-medium">
                  {description}
                  <span className="font-medium text-gray-600">
                    {currency}
                    {isLoading
                      ? "Calculating..."
                      : `${currency}${parseFloat(cost).toFixed(2)}`}
                  </span>
                </p>
              </div>
            </div>
            <input
              onClick={() => !isLoading && handleShippingCost(cost)}
              // {...register(`shippingOption`, {
              //   required: `Shipping Option is required!`,
              // })}
              name="shippingOption"
              type="radio"
              value={value}
              className="form-radio outline-none focus:ring-0 text-emerald-500"
              onChange={() => !isLoading && onClick(value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputShipping;
