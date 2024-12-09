import Image from "next/image";
import React, { useState } from "react";
import aircrafti from "../../public/aircraft_number/aircrafti.jpeg";
import aircraftii from "../../public/aircraft_number/aircraftii.jpg";
import aircraftiii from "../../public/aircraft_number/aircraftiii.jpg";
import aircraftiv from "../../public/aircraft_number/aircraftiv.jpg";
import aircraftv from "../../public/aircraft_number/aircraftv.jpg";
import aircraftvi from "../../public/aircraft_number/aircraftvi.jpeg";
import aircraftvii from "../../public/aircraft_number/aircraftvii.jpg";
import aircraftviii from "../../public/aircraft_number/aircraftviii.jpg";
import aircraftix from "../../public/aircraft_number/aircraftix.jpg";
import aircraftx from "../../public/aircraft_number/aircraftx.jpeg";
import { motion } from "framer-motion";

const AircraftNumber = () => {
  const [openi, setOpeni] = useState<boolean>(false);
  const [openii, setOpenii] = useState<boolean>(false);
  const [openiii, setOpeniii] = useState<boolean>(false);
  const [openiv, setOpeniv] = useState<boolean>(false);
  const [openv, setOpenv] = useState<boolean>(false);
  const [openvi, setOpenvi] = useState<boolean>(false);
  const [openvii, setOpenvii] = useState<boolean>(false);
  const [openviii, setOpenviii] = useState<boolean>(false);
  const [openix, setOpenix] = useState<boolean>(false);
  const [openx, setOpenx] = useState<boolean>(false);

  const handleClicki = () => {
    setOpeni((prev) => !prev);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickii = () => {
    setOpenii((prev) => !prev);
    setOpeni(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickiii = () => {
    setOpeniii((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickiv = () => {
    setOpeniv((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickv = () => {
    setOpenv((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickvi = () => {
    setOpenvi((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickvii = () => {
    setOpenvii((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenviii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickviii = () => {
    setOpenviii((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenix(false);
    setOpenx(false);
  };

  const handleClickix = () => {
    setOpenix((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenx(false);
  };

  const handleClickx = () => {
    setOpenx((prev) => !prev);
    setOpeni(false);
    setOpenii(false);
    setOpeniii(false);
    setOpeniv(false);
    setOpenv(false);
    setOpenvi(false);
    setOpenvii(false);
    setOpenviii(false);
    setOpenix(false);
  };

  return (
    <main className="bg-slate-200/50 w-full h-full mt-5">
      <div className="">
        <ul className="">
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClicki} className="px-2 py-2">
              Airbus A330
            </button>
            {openi && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircrafti} alt="airi" width={600} height={500} />
                <div  className="text-black font-semibold">
                <p>
                  The Airbus A330 is a wide-body aircraft developed and produced
                  by Airbus. Airbus began developing larger A300 derivatives in
                  the mid-1970s, giving rise to the A330 twinjet as well as the
                  Airbus A340 quadjet, and launched both designs along with
                  their first orders in June 1987. The A330-300, the first
                  variant, took its maiden flight in November 1992 and entered
                  service with Air Inter in January 1994. The A330-200, a
                  shortened longer-range variant, followed in 1998 with Canada
                  3000 as the launch operator.
                </p>
                <p className="py-3">
                    In July 2014, Airbus announced the re-engined A330neo (new
                    engine option) comprising A330-800 and -900, which entered
                    service with TAP Air Portugal in December 2018. With the
                    exclusive, more efficient Trent 7000 turbofan and
                    improvements including sharklets, it offers up to 14% better
                    fuel economy per seat. The first-generation A330s (-200,
                    -200F, and -300) are now called A330ceo
                  </p>
                </div>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickii} className="px-2 py-2">
              Airbus A220
            </button>
            {openii && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftii} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Airbus A220 is a family of five-abreast narrow-body
                  airliners by Airbus Canada Limited Partnership (ACLP). It was
                  originally developed by Bombardier Aviation and had two years
                  in service as the Bombardier CSeries. The program was launched
                  on 13 July 2008. The smaller A220-100 (formerly CS100) first
                  flew on 16 September 2013, received an initial type
                  certificate from Transport Canada on 18 December 2015, and
                  entered service on 15 July 2016 with launch operator Swiss
                  Global Air Lines. The longer A220-300 (formerly CS300) first
                  flew on 27 February 2015, received an initial type certificate
                  on 11 July 2016, and entered service with airBaltic on 14
                  December 2016. Both launch operators recorded
                  better-than-expected fuel burn and dispatch reliability, as
                  well as positive feedback from passengers and crew.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickiii} className="px-2 py-2">
              Airbus A380-800
            </button>
            {openiii && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftiii} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Airbus A380 is a very large wide-body airliner, developed
                  and produced by Airbus. It is the world&apos;s largest
                  passenger airliner and the only full-length double-deck jet
                  airliner. Airbus studies started in 1988, and the project was
                  announced in 1990 to challenge the dominance of the Boeing 747
                  in the long-haul market. The then-designated A3XX project was
                  presented in 1994; Airbus launched the €9.5–billion
                  ($10.7–billion) A380 programme on 19 December 2000. The first
                  prototype was unveiled in Toulouse on 18 January 2005, with
                  its first flight on 27 April 2005. It then obtained its type
                  certificate from the European Aviation Safety Agency (EASA)
                  and the US Federal Aviation Administration (FAA) on 12
                  December 2006.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickiv} className="px-2 py-2">
              Airbus A330neo
            </button>
            {openiv && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftiv} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Airbus A330neo (&quot;neo&quot; for &quot;New Engine
                  Option&quot;) is a wide-body airliner developed by Airbus from
                  the original Airbus A330 (now A330ceo – &quot;Current Engine
                  Option&quot;).[4] A new version with modern engines comparable
                  with those developed for the Boeing 787 was called for by
                  operators of the A330ceo. It was launched on 14 July 2014 at
                  the Farnborough Airshow, promising 14% better fuel economy per
                  seat. It is exclusively powered by the Rolls-Royce Trent 7000
                  which has double the bypass ratio of its predecessor. Its two
                  versions are based on the A330-200 and -300: the -800 has a
                  range of 8,150 nmi (15,090 km; 9,380 mi) with 257 passengers
                  while the -900 covers 7,200 nmi (13,330 km; 8,290 mi) with 287
                  passengers. The -900 made its maiden flight on 19 October 2017
                  and received its EASA type certificate on 26 September 2018;
                  it was first delivered to TAP Air Portugal on 26 November 2018
                  and entered service on 15 December.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickv} className="px-2 py-2">
              Boeing 737
            </button>
            {openv && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftv} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Boeing 737 is an American narrow-body airliner produced by
                  Boeing at its Renton factory in Washington. Developed to
                  supplement the Boeing 727 on short and thin routes, the
                  twinjet retained the 707 fuselage width and six abreast
                  seating but with two underwing Pratt & Whitney JT8D low-bypass
                  turbofan engines. Envisioned in 1964, the initial 737-100 made
                  its first flight in April 1967 and entered service in February
                  1968 with Lufthansa. The lengthened 737-200 entered service in
                  April 1968, and evolved through four generations, offering
                  several variants for 85 to 215 passengers. The First
                  Generation 737-100/200 variants were powered by Pratt &
                  Whitney JT8D low-bypass turbofan engines and offered seating
                  for 85 to 130 passengers. Launched in 1980 and introduced in
                  1984, the Second Generation 737 Classic -300/400/500 variants
                  were upgraded with more fuel-efficient CFM56-3 high-bypass
                  turbofans and offered 110 to 168 seats
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickvi} className="px-2 py-2">
              Boeing 767
            </button>
            {openvi && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftvi} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Boeing 767 is an American wide-body airliner developed and
                  manufactured by Boeing Commercial Airplanes. The aircraft was
                  launched as the 7X7 program on July 14, 1978, the prototype
                  first flew on September 26, 1981, and it was certified on July
                  30, 1982. The initial 767-200 variant entered service on
                  September 8, 1982, with United Airlines, and the
                  extended-range 767-200ER in 1984. It was stretched into the
                  767-300 in October 1986, followed by the extended-range
                  767-300ER in 1988, the most popular variant. The 767-300F, a
                  production freighter version, debuted in October 1995. It was
                  stretched again into the 767-400ER from September 2000.
                  Designed to complement the larger 747, it has a seven-abreast
                  cross-section accommodating smaller LD2 ULD cargo containers.
                  The 767 is Boeing&apos;s first wide-body twinjet, powered by
                  General Electric CF6, Rolls-Royce RB211, or Pratt & Whitney
                  JT9D turbofans. JT9D engines were eventually replaced by
                  PW4000 engines.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickvii} className="px-2 py-2">
              Boeing 777
            </button>
            {openvii && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftvii} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Boeing 777, commonly referred to as the Triple Seven, is
                  an American long-range wide-body airliner developed and
                  manufactured by Boeing Commercial Airplanes. The 777 is the
                  world&apos;s largest twinjet and the most-built wide-body
                  airliner. The jetliner was designed to bridge the gap between
                  Boeing&apos;s other wide body airplanes, the twin-engined 767
                  and quad-engined 747, and to replace aging DC-10 and L-1011
                  trijets. Developed in consultation with eight major airlines,
                  the 777 program was launched in October 1990, with an order
                  from United Airlines. The prototype aircraft rolled out in
                  April 1994, and first flew in June of that year. The 777
                  entered service with the launch operator United Airlines in
                  June 1995. Longer-range variants were launched in 2000, and
                  first delivered in 2004. The 777 can accommodate a ten–abreast
                  seating layout and has a typical 3-class capacity of 301 to
                  368 passengers, with a range of 5,240 to 8,555 nautical miles
                  [nmi] (9,700 to 15,840 km; 6,030 to 9,840 mi).{" "}
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickviii} className="px-2 py-2">
              Sukhoi SSJ100
            </button>
            {openviii && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftviii} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Sukhoi Superjet 100 (Russian: Сухой Суперджет 100,
                  romanized: Sukhoy Superdzhet 100) or SSJ100 is a regional jet
                  designed by Russian aircraft company Sukhoi Civil Aircraft, a
                  division of the United Aircraft Corporation (now: Regional
                  Aircraft – Branch of the Irkut Corporation[4][5]). With
                  development starting in 2000, it made its maiden flight on 19
                  May 2008 and its first commercial flight on 21 April 2011 with
                  Armavia. The 46–49 t (45–48 long tons) MTOW plane typically
                  seats 87 to 98 passengers and is powered by two 77–79 kN
                  (17,000–18,000 lbf) PowerJet SaM146 turbofans developed by a
                  joint venture between French Safran and Russian NPO Saturn. By
                  May 2018, 127 were in service and by September the fleet had
                  logged 300,000 revenue flights and 460,000 hours. By November
                  2021 the fleet had logged at least 2,000,000 hours.[6] The
                  type has recorded four hull loss accidents and 89 deaths as of
                  July 2024.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickix} className="px-2 py-2">
              Tupolev Tu-204
            </button>
            {openix && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftix} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Tupolev Tu-204 (Russian: Туполев Ту-204) is a twin-engined
                  medium-range narrow-body jet airliner capable of carrying 210
                  passengers, designed by Tupolev and produced by Aviastar-SP
                  and Kazan Aircraft Production Association. First introduced in
                  1989, it was intended to be broadly equivalent to the Boeing
                  757, with slightly lower range and payload, and had
                  competitive performance and fuel efficiency in its class. It
                  was developed for Aeroflot as a replacement for the
                  medium-range Tupolev Tu-154 trijet in the 1990s. The latest
                  version, with significant upgrades and improvements, is the
                  narrow-body Tu-204SM, which made its maiden flight on 29
                  December 2010.
                </p>
              </motion.div>
            )}
          </li>
          <li className="flex flex-col gap-2 bg-slate-600 text-white hover:bg-[#ff014f] cursor-pointer mb-1">
            <button onClick={handleClickx} className="px-2 py-2">
              Comac C919
            </button>
            {openx && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2"
              >
                <Image src={aircraftx} alt="airi" width={600} height={500} />
                <p className="text-black font-semibold">
                  The Comac C919 is a narrow-body airliner developed by Chinese
                  aircraft manufacturer Comac. The development program was
                  launched in 2008. Production began in December 2011, with the
                  first prototype being rolled out on 2 November 2015; the
                  maiden flight took place on 5 May 2017. On 29 September 2022
                  the C919 received its CAAC type certificate. The first
                  production airframe was delivered to China Eastern Airlines on
                  9 December 2022 and was put into commercial passenger service
                  on 28 May 2023. The aircraft, primarily constructed with
                  aluminium alloys, is powered by CFM International LEAP
                  turbofan engines and carries 156 to 168 passengers in a normal
                  operating configuration up to 5,555 km (3000 nmi; 3,500 mi).
                </p>
              </motion.div>
            )}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default AircraftNumber;
