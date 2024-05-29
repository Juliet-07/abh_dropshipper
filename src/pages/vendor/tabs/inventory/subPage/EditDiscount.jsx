import { MenuIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import { Calendar } from "react-date-range";
import { FiBell, FiUploadCloud, FiUser } from "react-icons/fi";
import Select from "react-select";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const EditDiscount = ({ productId }) => {
  const router = useRouter();
  const [showPreview, setPreview] = React.useState(false);
  const [date, setDate] = React.useState(null);

  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setendDate] = React.useState(new Date());

  const options = [
    { value: "Fruits & Vegetables", label: "Fruits & Vegetables" },
    { value: "oil and paint", label: "oil and paint" },
    { value: "merch", label: "merch" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  //

  return (
    <>
      {showPreview && (
        <div
          // onClick={()=> setPreview(false)}
          className="w-full h-[100vh]  bg-[#000000a8] z-[10000] fixed top-0 left-0 flex flex-col items-center  justify-center"
        >
          <div className="w-[90%] max-w-[498px] h-[344px] bg-white rounded-[10px] flex flex-col items-center  justify-center">
            <div className="w-[50px] h-[50px] rounded-[100px] border-[#08932E] border-[2px] flex flex-col items-center  justify-center">
              <CheckIcon width={30} height={30} color="#08932E" />
            </div>
            <br />
            <p>Discount updated!</p>
            <br />
            <button
              onClick={() => router.back()}
              className="w-[186px] h-[46px] rounded-[6px] bg-[#4CBD6B] text-white"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <header className="w-full h-[70px] flex  bg-white  flex-row items-center justify-between p-[20px]">
        <div className="flex flex-row gap-[10px] items-center ">
          <ArrowNarrowLeftIcon
            width={20}
            height={20}
            onClick={() => router.back()}
          />
          <p className="text-[16px]">Edit Discount</p>
        </div>
      </header>

      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
        <div className="w-full  flex flex-row justify-center  flex-wrap md:flex-nowrap gap-[20px] ">
          <div className="w-full p-[20px] md:max-w-[596px] min-h-[100vh] md:rounded-[10px] border-[1px] bg-white">
            <p className="text-[16px] w-full">Discount Type</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>Percentage</p>
            </div>

            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>Fixed</p>
            </div>

            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>Free shipping</p>
            </div>
            <br />
            <p className="text-[16px] w-full">Value</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="number"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-[90%] h-[35px] border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Apply to</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>All products</p>
            </div>

            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>Specific categories</p>
            </div>

            <div className="w-full h-[40px] border-[1px] mt-[10px] flex flex-row items-center px-[20px] gap-[10px] border-[#CFCBCB]">
              <input type="checkbox" name="" id="" />
              <p>Specific products</p>
            </div>
            <br />
            <p className="text-[16px] w-full">Period</p>
            <br />
            <div className="w-full flex flex-row items-center justify-between">
              <p>From</p>
              <div className="w-[90%] h-[40px] border-[1px] mt-[10px] relative border-[#CFCBCB]">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="opacity-0 w-full flex flex-1" />
              <p className="absolute top-2 left-2">{startDate.getDay()} {startDate.getMonth()}</p>

              </div>
            </div>
            <br />
            <div className="w-full flex flex-row items-center justify-between">
              <p>To</p>
              <div className="w-[90%] h-[40px] border-[1px] mt-[10px] relative border-[#CFCBCB]">
              <DatePicker selected={endDate} onChange={(date) => setendDate(date)}  className="opacity-0 w-full flex flex-1" />
              <p className="absolute top-2 left-2">{endDate.getDay()} {endDate.getMonth()}</p>

              </div>
            </div>
            <br />
            <br />

            <div className="w-full flex items-center justify-center">
              <button
                onClick={() => setPreview(true)}
                className="w-[221px] h-[46px] bg-white rounded-[6px] border-[1px] border-[#359E52] text-[#359E52]"
              >
                <b>Save</b>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] flex flex-row items-center justify-end md:p-[40px] p-[20px]"></div>
      </div>
    </>
  );
};

export default EditDiscount;
