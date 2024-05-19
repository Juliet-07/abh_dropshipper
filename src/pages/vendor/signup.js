import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="w-full flex flex-col md:flex-row p-4 overflow-auto">
      <Image width={200} height={100} src="/abh_logo.png" alt="logo" className="block md:hidden" />
      <div className="md:w-1/2 flex flex-col items-center justify-center">
        <div className="p-10 font-primaryBold text-xl md:text-3xl leading-10">
          Let's Get To Know
          <br /> You More
        </div>
        <div className="md:pt-20">
          <Image width={563} height={609} src="/knowMore.png" alt="logo" />
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="w-full hidden md:flex items-center justify-between p-10">
          <div></div>
          <Image width={200} height={100} src="/abh_logo.png" alt="logo" />
        </div>
        <form>form dey here</form>
      </div>
    </div>
  );
};

export default Signup;
