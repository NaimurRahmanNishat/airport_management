"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [bgIndex, setBgIndex] = useState<number>(0);

  const bgImage = [
    "/herobg4.jpg",
    "/herobg3.jpg",
    "/herobg2.jpg",
    "/herobg1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImage.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bgImage.length]);

  return (
    <main
      style={{ backgroundImage: `url(${bgImage[bgIndex]})` }}
      className="bg-cover bg-center w-full h-full transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-10">
        <div className="">
          <h2 className="text-4xl text-center md:pt-20 pt-10 md:pb-20 pb-10">
            Your contact to Flughafen München-Riem Airport
          </h2>
        </div>
        <div className="w-full h-full pb-4 md:h-full bg-[#ebe1fc]">
          <div className="md:w-[900px] w-full h-full md:gap-5 gap-3">
            <p className="pt-5 pb-5 px-5 w-full">
              Do you have questions, suggestions, etc.? We&apos;re always happy
              to receive feedback. Please complete the mandatory input fields.
            </p>
            <p className="text-lg px-5 pt-2 pb-1">
              Fields marked with * are required fields.{" "}
            </p>
            <p className="text-lg px-5 pb-4">Your concern *</p>
            <form className="px-5">
              <input
                type="text"
                placeholder="-please choose-"
                className="px-3 py-2 w-[300px] outline-none"
              />
              <label className="flex flex-col pt-10 text-lg pb-2">
                Message *
              </label>
              <textarea
                name="message"
                id=""
                className="md:w-full pt-2 w-full outline-none"
              ></textarea>
              <div className="flex items-center justify-between">
                {/* left side */}
                <div className="md:pt-4 pt-2 md:pb-4 pb-2">
                  <h4 className="font-secondary text-black">Salutation</h4>
                  <div className="flex items-center gap-5">
                    <input type="checkbox" className="rounded-full" />
                    <p>Mr.</p>
                    <input type="checkbox" />
                    <p>Mrs.</p>
                  </div>
                </div>
                {/* right side */}
                <div className="md:pt-4 pt-2 md:pb-4 pb-2">
                  <h4 className="font-secondary text-black">Title</h4>
                  <div className="flex items-center gap-5">
                    <input type="checkbox" className="rounded-full" />
                    <p>Dr.</p>
                    <input type="checkbox" />
                    <p>Prof.</p>
                  </div>
                </div>
              </div>
              {/* Applicante name */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>First Name *</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>Last Name *</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
              </div>
              {/* Street Number */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>Street</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>Housenumber</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
              </div>
              {/* Zip code */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>Postal code</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>City</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
              </div>
              <div className="flex pt-2 md:pt-5 pb-2 md:pb-5 flex-col">
                <label>Mobile Phone</label>
                <input type="number" className="py-2 w-full outline-none"/>
              </div>
              <div className="flex pb-2 md:pb-5 flex-col">
                <label>Email *</label>
                <input type="text" className="py-2 w-full outline-none"/>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>Flight from</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>Flight to</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>Airline</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>Flight number</label>
                  <input type="number" className="w-full py-2 outline-none"/>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <label>Date of flight</label>
                  <input type="date" className="w-full py-2 outline-none"/>
                </div>
                <div>
                  <label>Time of flight</label>
                  <input type="text" className="w-full py-2 outline-none"/>
                </div>
              </div>
              <div className=" pt-4 pb-8">
                <button className="px-5 py-2 rounded-md bg-indigo">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;


// https://www.munich-airport.com/your-contact-to-munich-airport-835056     follow wabsite
// #ff014f pink color   #f4f5f6              #f9004d