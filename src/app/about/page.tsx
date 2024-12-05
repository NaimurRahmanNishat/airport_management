"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import abouti from "../../../public/abouti.jpg";
import aboutii from "../../../public/aboutii.jpg";

const Page = () => {
  const [bgIndex, setBgIndex] = useState<number>(0);

  const bgImage = [
    "/herobg1.jpg",
    "/herobg2.jpg",
    "/herobg3.jpg",
    "/herobg4.jpg",
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
      <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pb-10">
        <div className="">
          <h1 className="text-4xl md:text-5xl pt-4 md:pt-10 text-purple-800 text-center cursor-pointer pb-4 md:pb-10">
            About Us
          </h1>
          <div className="flex items-center justify-center text-rose-700 md:pb-8 pb-4">
            <Link href={"/"}>
              <h3 className="text-2xl gap-3 px-3 cursor-pointer">Home</h3>
            </Link>
            <span className="flex items-center justify-center gap-5">|</span>
            <h3 className="text-2xl gap-3 px-3 cursor-pointer">About</h3>
          </div>
        </div>
        {/* About document one */}
        <div className="bg-[#fdfeff] w-full h-full grid md:grid-cols-2 grid-cols-1">
          {/* Text */}
          <div className="mt-5 px-3">
            <h2 className="font-secondary text-xl pb-3 md:pb-6">
              German Quality with Global Vision: Shaping the Future of Airports.
            </h2>
            <p className="text-semibold text-black md:pb-4 pb-3">
              We boast over 30 years of excellence in shaping the global
              aviation industry. Evolving from being the premier ORAT services
              provider to an acclaimed airport operator and advisor, we excel in
              consulting, airport/terminal concession services, and management.{" "}
            </p>
            <p className="pb-2 md:pb-4">Our consulting expertise spans </p>
            <ol className="list-disc pl-5">
              <li>strategy and transformation,</li>
              <li>airport master planning and design,</li>
              <li>operational readiness and airport transfer (ORAT), </li>
              <li>commercial operations and passenger experience </li>
              <li>efficient and sustainable operations </li>
              <li>advanced airports.</li>
            </ol>
            <p>
              Since early 2019, we manage Terminal A at Newark Liberty
              International Airport. Furthermore, we serve as management partner
              for airports in Bulgaria, Honduras, and El Salvador. Doing all
              that, we redefine the future of airports worldwide.{" "}
            </p>
            <p>
              Our DNA is deeply rooted in German quality and diligence, enriched
              by the international business experience of the entire team.
            </p>
          </div>
          {/* Image */}
          <div className="mt-5 flex flex-col items-end px-3">
            <Image
              src={abouti}
              alt="aboutimagei"
              width={600}
              height={600}
              className=""
            />
            <p className="flex items-center justify-center">
              Munich Airport&apos;s 5-star quality together with MAI&apos;s
              international experience form <br /> the basis for successful best
              practice solutions. © Flughafen München GmbH{" "}
            </p>
          </div>
        </div>
        {/* About document two */}
        <div className="bg-[#fdfeff] w-full h-full grid md:grid-cols-2 grid-cols-1 mt-20">
          {/* Text */}
          <div className="mt-5 px-3">
            <h2 className="font-secondary text-xl pb-3 md:pb-6">
              Our evolution
            </h2>
            <p className="text-semibold text-black md:pb-4 pb-3">
              In May 1992 Munich Airport (FMG) moved from the city center Riem
              to its current site in an unprecedented overnight operation. This
              success and the associated reputation of the project laid the
              foundation for Munich&apos;s international business activities.
            </p>
            <p className="pb-2 md:pb-4">
              Soon there were inquiries from different parts of the world: other
              airports requested support for planning a smooth airport transfer
              or airport opening. The so called &quot;Operational Readiness and
              Airport Transfer&quot; (ORAT) service was born and Munich Airport
              started sharing its &quot;Made in Germany&quot; expertise with
              other airports, airlines and partners across the globe. Over the
              years, FMG&apos;s service portfolio grew alongside its
              international business activities and soon covered the entire life
              cycle of an airport.{" "}
            </p>
            <p className="pb-2">
              In August 2017 this expertise was transferred into a 100%
              subsidiary, Munich Airport International GmbH (MAI) - now
              exclusively responsible for the international management,
              consulting and training business of Munich Airport Group. By now
              the company has diversified even further and has evolved from
              leading ORAT service provider to global airport operator with more
              than 100 airport experts worldwide.
            </p>
            <ol className="list-disc px-5 pb-4">
              <li>1992: Opening of the new Munich Airport </li>
              <li>2003: Opening of the Terminal 2 at Munich Airport </li>
              <li>
                2010: Foundation of the international business department{" "}
              </li>
              <li>
                2016: Opening of the T2 Satellite building at Munich Airport{" "}
              </li>
              <li>2017: Foundation of Munich Airport International GmbH </li>
              <li>
                2019: Acquisition of amd.sigma strategic airport development
                GmbH{" "}
              </li>
              <li>
                2019: Takeover of operations at Terminal A at Newark Liberty
                Int. Airport (EWR){" "}
              </li>
              <li>
                2020: Takeover of operations at Toncontín International Airport
                (TGU){" "}
              </li>
              <li>2021: Takeover of operations at Sofia Airport (SOF) </li>
              <li>
                2021: Opening and operations of the new Palmerola International
                Airport (XPL){" "}
              </li>
              <li>
                2024: EWR awarded 5 Stars and &quot;Best new airport terminal
                2024&quot; by Skytrax{" "}
              </li>
            </ol>
          </div>
          {/* Image */}
          <div className="mt-5 flex flex-col items-end px-3">
            <Image
              src={aboutii}
              alt="aboutimageii"
              width={680}
              height={900}
              className=""
            />
            <p className="flex text-end mt-2 justify-end items-end">
              In only 16 hours Munich Airport moved from Riem to Erdinger Moos.
              This was the largest move of this size in the European aviation
              industry to date. © Flughafen München GmbH
            </p>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Page;
