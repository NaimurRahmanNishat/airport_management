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
      className="bg-cover bg-center w-full h-full opacity-65 transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-10">
        <div className="">
          <h2 className="text-4xl text-center md:pt-20 pt-10 md:pb-20 pb-10">Your contact to Flughafen München-Riem Airport</h2>
        </div>
        <div className="w-full h-[1080px] bg-[#e6d8fc]">
          <p className="pt-5 pb-5 px-5">Do you have questions, suggestions, etc.? We&apos;re always happy to receive feedback. Please complete the mandatory input fields.</p>
          <p className="text-lg px-5 pt-2 pb-1">Fields marked with * are required fields. </p>
          <p className="text-lg px-5 pb-4">Your concern *</p>
          <form className="px-5">
            <input type="text" placeholder="-please choose-" className="px-3 py-2 w-[300px]"/>
            <label className="flex flex-col pt-10 text-lg pb-2">Message *</label>
            <textarea name="message" id="" className="w-[880px] pt-2" ></textarea>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Page;