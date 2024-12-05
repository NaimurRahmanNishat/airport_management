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
      className="bg-cover bg-center w-full h-[1080px] opacity-65 transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Contact</div>
    </main>
  );
};

export default Page;