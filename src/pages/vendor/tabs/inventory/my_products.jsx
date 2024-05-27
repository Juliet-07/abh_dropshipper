import { XIcon } from "@heroicons/react/outline";
import VendorHeader from "@pages/vendor/components/VendorHeader";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Myproducts = ({pushEdit, pushAdd}) => {
  const productsData = [
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 34,
      price: "$230",
      status: "pending",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 25,
      price: "$230",
      status: "deleted",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 10,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 5,
      price: "$230",
      status: "pending",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 11,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 8,
      price: "$230",
      status: "deleted",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 11,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "55 Units",
      units: 61,
      price: "$230",
      status: "live",
    },
    {
      id: "1565132",
      name: "Apples",
      type: "grocery",
      sku: "123456",
      sold: "N/A",
      units: 22,
      price: "$230",
      status: "pending",
    },
  ];

  const [showPreview, setPreview] = React.useState(false);

  return (
    <>
      {showPreview && (
        <div
          // onClick={()=> setPreview(false)}
          className="w-full h-[100vh] overflow-y-scroll bg-[#000000a8] fixed top-0 left-0 flex flex-col items-center "
        >
          <div className="w-[90%] max-w-[882px] relative min-h-[120vh] md:min-h-[680px] bg-white rounded-[10px] p-[20px] md:p-[40px] mt-[5vh]">
            <b className="text-[16px] w-full text-center flex justify-center">
              Product Details
            </b>
            <XIcon
              width={20}
              height={20}
              className="absolute right-[20px] top-[20px] cursor-pointer active:opacity-5"
              color="red"
              onClick={() => setPreview(false)}
            />
            <div className="w-full flex flex-row flex-wrap mt-[20px] min-h-1">
              <div className="w-full min-w-[300px] min-h-[200px] flex flex-[45] flex-col">
                <p>ID 123145</p>
                <br />
                <div className="w-full h-[198px] bg-contain"
                style={{background: "url(/vendor_assets/apple.png) center no-repeat", backgroundSize: "contain"}}></div>
              </div>
              <div className="w-full min-w-[300px] min-h-[500px] flex flex-[55] flex-col">
                <b>Mint</b>
                <p>Grocery</p>
                {/* <br className="h-[1px]" /> */}
                <div className="flex flex-row gap-[10px]">
                  <b>SKU</b> <p>2122</p>
                </div>
                <br />
                <p>
                  Most fresh vegetables are low in calories and have a water
                  content in excess of 70 percent, with only about 3.5 percent
                  protein and less than 1 percent fat. ... The root vegetables
                  include beets, carrots, radishes, sweet potatoes, and turnips.
                  Stem vegetables include asparagus and kohlrabi.
                </p>
                <br />
                <b>$289</b>
                <br />
                <div className="flex flex-row gap-[10px] ">
                  <b>Quality</b> <p>34 Units</p>
                </div>
                <br />
                <div className="text-[12px] text-black min-w-[150px] text-center flex flex-row items-center gap-2">
                  <p>34 Units</p>
                  <div className="w-[91px] h-[35px] bg-[#E3140F1F] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                    <div className="min-w-[8px] h-[8px] bg-[red] rounded-[100px]" />
                    <p className="text-[red] text-[12px]">Pending</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-row h-[4pc] items-center justify-between">
              <div className="flex flex-row gap-[10px]">
              <button 
              onClick={()=>{
                // window.open("#edit", "_parent")
                setPreview(false);
                 pushEdit("id");
                }}
              className="md:w-[186px] w-[99px]  h-[46px] bg-[#4CBD6B] text-white rounded-[6px]">Edit</button>
              <button className="md:w-[186px] w-[99px]  h-[46px] bg-[#E3140F] text-white rounded-[6px]">Delete</button>
              </div>

              <button className="md:w-[186px] w-[99px]  h-[46px] bg-white text-[grey] border-[1px] rounded-[6px]">Cancel</button>

            </div>
            <br />
            <br />
          </div>
        </div>
      )}

      <VendorHeader title={"My Products"} />
      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
        <div className="w-full min-h-[100vh]  flex flex-col gap-[20px] ">
          <div className="w-full sm:hidden flex flex-row items-center h-[30px] justify-start">
            My Products
          </div>

          <div className="w-full h-[50px] flex flex-row items-center justify-between flex-wrap gap-[20px]">
            <div className="w-[80%] max-w-[500px] h-[40px] bg-white p-[10px] flex items-center rounded-[6px] ">
              <input
                type="text"
                className="w-full  bg-none border-none outline-none  placeholder:text-[12px] placeholder:text-[#37343566]"
                placeholder="Search for products"
              />
              <FiSearch width={16} height={16} color="#37343566" />
            </div>

            <div className="flex flex-row items-center gap-[10px]">
              <button className="h-[36px] w-[143px] rounded-[6px] bg-[#F58634] text-[14px] text-white">
                Bulk upload
              </button>
              <button onClick={()=> pushAdd("id")}
              className="h-[36px] w-[122px] rounded-[6px] bg-none text-[14px] text-[#359E52] border-[1px] border-[#359E52]">
                Add product
              </button>
            </div>
          </div>

          <br className="md:hidden" />
          <div className="flex flex-row flex-wrap-reverse gap-[20px] justify-between">
            <p className="font-bold text-[16px]">
              Shop Listed Items ({productsData.length})
            </p>

            <div className="flex flex-row items-center gap-[10px] min-w-[50%] justify-end">
              <p className="">Quantity Level</p>

              <select
                name=""
                id=""
                placeholder="Select One"
                className="border-none rounded-[6px] bg-white"
              >
                <option value="" disabled selected>
                  Select One
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low Stock">Low Stock</option>
              </select>
            </div>
          </div>
          {/* <br className="md:hidden" /> */}

          <div className="w-full min-h-[100vh] overflow-x-scroll overflow-y-hidden px-[10px] bg-white mt-[20px] pb-[10px]">
            <div className=" md:w-full w-[300vw] h-[56px] mt-[10px] p-[10px] flex flex-row items-center justify-between bg-[#F1F4F2] border-[#C1C6C5]">
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                ID
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Product
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                SKU
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Sold
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Quantity
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Price
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Status
              </b>
              <b className="text-[14px] text-black  min-w-[150px] text-center">
                Action
              </b>
            </div>
            {productsData.map((data, index) => {
              return (
                <div
                  //   onClick={() => handleTabClick("order_details")}

                  className=" md:w-full w-[300vw] h-[56px] px-[10px] flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]"
                >
                  <p className="text-[12px] text-black min-w-[150px] text-center">
                    120381
                  </p>
                  <div className="text-[12px] text-black min-w-[150px] text-center">
                    <div className="flex flex-row items-center gap-2">
                      <img
                        src="/vendor_assets/apple.png"
                        alt=""
                        width={50}
                        height={50}
                      />
                      <div className="flex flex-col justify-start h-[40px]">
                        <b className="">{data.name}</b>
                        <p className="">{data.type}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[12px] text-black min-w-[150px] text-center">
                    {data.sku}
                  </p>
                  <p className="text-[12px] text-black min-w-[150px] text-center">
                    {data.sold}
                  </p>
                  <div className="text-[12px] text-black min-w-[150px] text-center flex flex-row items-center gap-2">
                    <p>{data.units} Units</p>
                    {data.units >= 20 && (
                      <div className="w-[66px] h-[35px] bg-[#E38E0F14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="min-w-[8px] h-[8px] bg-[#E38E0F] rounded-[100px]" />
                        <p className="text-[#E38E0F] text-[12px]">High</p>
                      </div>
                    )}
                    {data.units >= 1 && data.units < 10 && (
                      <div className="w-[101px] h-[35px] bg-[#E3140F1F] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="min-w-[8px] h-[8px] bg-[red] rounded-[100px]" />
                        <p className="text-[rgb(255,0,0)] text-[12px]">
                          Low Stock
                        </p>
                      </div>
                    )}
                    {data.units >= 10 && data.units < 20 && (
                      <div className="w-[91px] h-[35px] bg-[#081E9314] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="min-w-[8px] h-[8px] bg-[#081E93] rounded-[100px]" />
                        <p className="text-[#081E93] text-[12px]">Medium</p>
                      </div>
                    )}
                  </div>
                  <p className="text-[12px] text-black min-w-[150px] text-center">
                    {data.price}
                  </p>
                  <div className="text-[12px] text-black min-w-[150px] flex flex-row justify-center items-center">
                    {data.status == "pending" && (
                      <div className="min-w-[66px] h-[35px] bg-[#E3140F14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                        <p className="text-[#E3140F] text-[12px]">pending</p>
                      </div>
                    )}
                    {data.status == "live" && (
                      <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                        <p className="text-[#08932E] text-[12px]">Live</p>
                      </div>
                    )}
                    {data.status == "deleted" && (
                      <div className="min-w-[66px] h-[35px] bg-[#16033F1F] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                        <div className="w-[8px] h-[8px] bg-[#16033F] rounded-[100px]" />
                        <p className="text-[#16033F] text-[12px]">Deleted</p>
                      </div>
                    )}
                  </div>
                  <div className="text-[12px] text-black min-w-[150px] text-center flex flex-row items-center gap-[5px]">
                    <div
                      onClick={() => pushEdit("id")}
                      className="w-[28px] h-[28px] border-[1px] cursor-pointer active:opacity-[0.2] rounded-[100px] flex items-center justify-center"
                    >
                      {" "}
                      <img
                        src="/vendor_assets/pencil.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      onClick={() => {
                        setPreview(!showPreview);
                      }}
                      className="w-[28px] h-[28px] border-[1px] cursor-pointer active:opacity-[0.2] rounded-[100px] flex items-center justify-center"
                    >
                      {" "}
                      <img
                        src="/vendor_assets/eye.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </div>
                    <div
                      onClick={() => {}}
                      className="w-[28px] h-[28px] border-[1px] cursor-pointer active:opacity-[0.2] rounded-[100px] flex items-center justify-center"
                    >
                      {" "}
                      <img
                        src="/vendor_assets/trash.svg"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myproducts;
