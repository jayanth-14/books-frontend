import { MailIcon, PhoneCallIcon } from "lucide-react";
import React from "react";

function CustomerInfo({title, data}) {
  return (
    <div className="flex flex-col bg-gray-100 items-stretch w-full gap-5 p-8">
      <h3 className="text-2xl dark:text-black font-semibold leading-5 text-gray-800">
        {title}
      </h3>
      <div className="flex flex-col justify-between items-start w-full h-full gap-5 xl:flex-row lg:flex-row">
        {/* Name Section */}
        <div className="flex flex-col w-1/3">
          <p className="text-base dark:text-black font-semibold leading-4 text-gray-800">
            Name
          </p>
          <p className="text-xl dark:text-black leading-5">{data?.fullName}</p>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col w-1/3 dark:text-black gap-2">
          <p className="text-base dark:text-black font-semibold leading-4 text-gray-800">
            Contact Information
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <MailIcon />
              <p className="cursor-pointer text-sm leading-5 dark:text-black">
                {data?.email}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <PhoneCallIcon />
              <p className="cursor-pointer text-sm leading-5 dark:text-black">
                {data?.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-col w-1/3">
          <p className="text-base dark:text-black font-semibold leading-4 text-gray-800">
            Address
          </p>
          <p className="text-sm leading-5 dark:text-gray-300">
            {data?.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
