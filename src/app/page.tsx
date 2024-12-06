"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Page = () => {
  const [bgIndex, setBgIndex] = useState<number>(0);
  const bgImage = [
    "/herobg1.jpg",
    "/herobg2.jpg",
    "/herobg3.jpg",
    "/herobg4.jpg",
  ];

  // Background image change
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImage.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bgImage.length]);

  // Airport text showcase
  const airportDetails =
    "Welcome To Flughafen München-Riem International Airport";
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [visibleWords, setVisibleWords] = useState<string>("");
  const [isClearing, setIsClearing] = useState<boolean>(false);

  // Show airport details text word by word
  useEffect(() => {
    if (isClearing) {
      const clearTimeoutId = setTimeout(() => {
        setVisibleWords("");
        setCurrentWordIndex(0);
        setIsClearing(false);
      }, 500);
      return () => clearTimeout(clearTimeoutId);
    }

    const words = airportDetails.split("");
    const wordInterval = setInterval(() => {
      setVisibleWords((prev) => prev + words[currentWordIndex]);
      setCurrentWordIndex((prevIndex) =>
        prevIndex + 1 < words.length ? prevIndex + 1 : 0
      );

      if (currentWordIndex + 1 === words.length) {
        setIsClearing(true);
        clearInterval(wordInterval);
      }
    }, 100);

    return () => clearInterval(wordInterval);
  }, [currentWordIndex, isClearing, airportDetails]);

  // Historical text visibility control
  const [textOpacity, setTextOpacity] = useState(0);
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (textOpacity < 1) {
      interval = setInterval(() => {
        setTextOpacity((prevOpacity) => Math.min(prevOpacity + 0.1, 1));
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [textOpacity]);

  return (
    <main
      style={{ backgroundImage: `url(${bgImage[bgIndex]})` }}
      className="bg-cover bg-center w-full md:h-[1080px] h-full transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Airport active Image */}
        <div className="flex items-center justify-center md:pt-[100px] pt-[30px] font-extrabold text-3xl md:text-7xl flex-col md:flex-row">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className="text-center cursor-pointer text-gradient shadow-sm hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 active:scale-95"
          >
            Flughafen München-Riem <br />
            <p>International</p>
            <p>Airport</p>
          </motion.h1>
        </div>
        {/* Airport Details */}
        <div className="md:mt-[100px] mt-[10px] w-full md:h-[100px] h-[260px]">
          <h1 className="font-bold text-center text-5xl  pb-[20px] text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 shadow">
            {visibleWords}
          </h1>
        </div>
        {/* Historical Text */}
        <div
          className="mt-[10px] w-full h-full transition-opacity duration-1000 flex flex-col md:flex-row"
          style={{ opacity: textOpacity }}
        >
          <p className="text-[#eff7f4] md:pt-10 pt-[50px] pb-5 text-xl mx-2">
            Construction started in 1936. The first plane landed on 25 October
            1939, signalling the beginning of air traffic. At this time, it was
            one of the most modern airports in the world. It replaced the
            airfield at Oberwiesenfeld (now the site of the Olympic Village). In
            World War II it was home to Adolf Gulland’s legendary. It was almost
            completely destroyed by bombings on 9 April 1945. Until that day,
            civilian air traffic had also been handled in Riem. George Raffled
            of the United States Rainbow Division was the first of the allied
            forces to arrive at the airport. He reported to his superior
            officers that the airport had been abandoned by the Germans. <br />
            After the war Munich-Riem was the first airport in Germany to be
            used for civil aviation. Post-war operations started on 6 April 1948
            with the landing of a DC-3 operated by Pan American World Airways.
            On 12 October 1949 the Flughafen München-Riem GmbH (Munich-Riem
            Airport Ltd.) was founded. Wulf-Dieter Graf zoo Castell became one
            of its managing directors. The airports runway was lengthened to
            1,900 meters (6,234 ft) in November 1949. <br />
            Since the 1980s and into the early 1990s, the airfield was heavily
            congested. Originally the terminal was intended to handle between
            five and eight million passengers per year, but by 1991 the
            passenger numbers had skyrocketed to twelve million passengers per
            year, which was 50% to more than double the number of passengers
            that the airport was originally designed to handle.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
