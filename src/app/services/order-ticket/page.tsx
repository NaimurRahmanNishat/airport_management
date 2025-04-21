"use client";
import { useState } from "react";

const Page = () => {
  const [openPassenger, setOpenPassenger] = useState<boolean>(false);
  const [tripType, setTripType] = useState<"oneway" | "roundtrip" | null>("oneway");

  const handleMorePassenger = () => {
    setOpenPassenger(!openPassenger);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="md:py-16 py-6">
        <h2 className="text-2xl text-center">Dummy ticket booking</h2>
        <p className="text-center py-3">
          Please complete the below form and follow instructions in order to
          make your Dummy ticket
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
        {/* passenger details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:pb-12 pb-6">Passenger Details</h2>

          {/* name inputs */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3 w-1/2">
              <label className="text-lg font-medium">
                First / Given name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="first and middle name on passport"
                className="px-2 py-1 rounded-sm w-full border border-slate-300 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <label className="text-lg text-red-800 font-medium">
                Last / Surname <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="last name on passport"
                className="px-2 py-1 rounded-sm w-full border border-slate-300 outline-none"
              />
            </div>
          </div>

          {/* date of birth */}
          <div className="flex flex-col gap-2 py-3">
            <label className="text-lg text-red-800 font-medium">
              Date of birth <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              className="px-2 py-1 rounded-md w-1/2 border border-gray-400 focus:border-red-800 outline-none"
            />
          </div>

          {/* gender */}
          <div className="py-1.5">
            <label className="text-lg text-red-800 font-medium">
              Gender <span className="text-red-600">*</span>
            </label>
            <div>
              <input type="radio" name="gender" id="male" className="mr-2" />
              <label htmlFor="male" className="mr-2">Male</label>
              <input type="radio" name="gender" id="female" className="mr-2" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          {/* add more passengers */}
          <div className="py-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" onClick={handleMorePassenger} />
              <label className="text-xl text-medium">
                Add more passengers: (optional)
              </label>
            </div>
            {openPassenger && (
              <div className="pt-5">
                <h3 className="text-xl">Number of additional passengers: (optional)</h3>
                <div className="py-4">
                  <select className="px-2 w-full py-2 border outline-none cursor-pointer border-green-500 rounded-sm">
                    <option value="">I am the only traveler</option>
                    <option value="">add 1 more passenger (100%)</option>
                    <option value="">add 2 more passenger (200%)</option>
                    <option value="">add 3 more passenger (300%)</option>
                    <option value="">add 4 more passenger (400%)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* travel details */}
          <div>
            <h2 className="md:text-3xl text-xl font-semibold">Travel Details</h2>
            <div>
              <h4 className="font-semibold text-lg py-5">Trip type <span className="text-red-700">*</span></h4>
              <div className="flex items-center gap-16">
                <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="tripType"
                  id="oneway"
                  checked={tripType === "oneway"}
                  onChange={() => setTripType("oneway")}
                />

                  <label htmlFor="oneway" className="text-lg font-medium">One Way</label>
                </div>
                <div className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="tripType"
                    id="roundtrip"
                    onClick={() => setTripType("roundtrip")}
                  />
                  <label htmlFor="roundtrip" className="text-lg font-medium">Round trip</label>
                </div>
              </div>

              {/* Conditional travel inputs */}
              {tripType && (
                <>
                  <div className="flex w-full gap-4">
                    <div className="w-1/2 flex flex-col py-2">
                      <label className="md:text-xl font-medium pb-2">From city / Origin <span className="text-red-800">*</span></label>
                      <input type="text" className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none" />
                    </div>
                    <div className="w-1/2 flex flex-col py-2">
                      <label className="md:text-xl font-medium pb-2">To city / Destination <span className="text-red-800">*</span></label>
                      <input type="text" className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none" />
                    </div>
                  </div>

                  <div className="flex w-full gap-4">
                    <div className="w-1/2 flex flex-col py-2">
                      <label className="md:text-xl font-medium pb-2">Departure date <span className="text-red-800">*</span></label>
                      <input type="date" className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none" />
                    </div>

                    {tripType === "roundtrip" && (
                      <div className="w-1/2 flex flex-col py-2">
                        <label className="md:text-xl font-medium pb-2">Return date <span className="text-red-800">*</span></label>
                        <input type="date" className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Additional information (optional) */}
          <div className="md:py-4 py-2">
            <h4 className="text-xl font-semibold pb-4">Additional information (optional)</h4>
            <textarea  placeholder="Enter any additional information that you like us to keep in mind." className="px-2 w-full py-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"></textarea>
          </div>
          {/* Delivery options */}
          <div></div>
        </div>

        {/* right side additional info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:pb-12 pb-6">Additional information</h2>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl pb-2 font-medium">Order Notes (optional)</h2>
            <textarea
              placeholder="Notes about your order"
              className="border px-4 py-1 border-slate-300 outline-none"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
