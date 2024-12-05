import Image from "next/image";
import { FaArrowsLeftRight } from "react-icons/fa6";
import Munichriem from "../../public/Munichriem.jpg";
import Bremen from "../../public/international/Bremen.jpg";
import BerlinBrandenburg from "../../public/international/BerlinBrandenburg.jpg";
import Colognebonn from "../../public/international/Colognebonn.jpg";
import Dusseldorf from "../../public/international/Dusseldorf.jpg";

const InternationalRoute = () => {
  return (
    <main className="w-full pt-1 bg-slate-200/20 h-full">
    {/* BerlinBrandenburg Details */}
    <div className="">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div>
          <Image
            src={Munichriem}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Munich Riem</p>
        </div>
        <span>
          <FaArrowsLeftRight
            size={72}
            className="text-purple-700 rotate-90 md:rotate-0"
          />
        </span>
        <div>
          <Image src={BerlinBrandenburg} alt="munich-riem" width={600} height={400} />
          <p className="text-center font-semibold">BerlinBrandenburg</p>
        </div>
      </div>
      <p className="text-[#ffffff] px-2 pb-2">
        Baltrum is tidal independent laid by ferries owned by the shipping
        company Baltrum Line, founded in 1928, starting in Nebmersiel. The
        journey takes about 30 minutes and depending on the season and tourist
        season one ferry leaves once up to four times for each direction
        daily. The baggage is containerized and transported in the same ferry
        as the vacationers. The highlights of the passage are the seals on the
        shoals ahead of Norderney passed by the ferry. The shipping company
        manages a bus connection to the train station of Nordan, Lower Saxony.
        Until 2006 the freight traffic was accomplished with the ferry Baltrum
        II via the port in Norddeich, Lower Saxony, but since then is
        transacted via the port in Nebmersiel. The port of Nebmersiel was
        inaugurated in 1970 and extended by a cargo wharf with 35 meters (115
        ft) in length from April to August 2008 due to the relocation of the
        freight transportation.
      </p>
    </div>
    {/* Bremen Details */}
    <div className="">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div>
          <Image
            src={Munichriem}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Munich Riem</p>
        </div>
        <span>
          <FaArrowsLeftRight
            size={72}
            className="text-purple-700 rotate-90 md:rotate-0"
          />
        </span>
        <div>
          <Image
            src={Bremen}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Bremen</p>
        </div>
      </div>
      <p className="text-[#ffffff] px-2 pb-2">
        Heide–Büsum Airport (German: Flugplatz Heide-Büsum, IATA: HEI, ICAO:
        EDXB) is a small regional airport located in Büsum, a town in the
        Schleswig-Holstein region of northern Germany. It&apos;s primarily
        used for general aviation, private flights, and charter services. Here
        are some details: Location: The airport is situated near the North Sea
        coast, serving the Dithmarschen district. It&apos;s roughly 4
        kilometers from the center of Büsum and about 20 kilometers from
        Heide. Facilities: It has a single runway (asphalt) and basic
        amenities for passengers and aircraft. Popular Uses: The airport is
        often used by tourists heading to Büsum, which is a popular seaside
        resort, or for trips to Heligoland, a nearby island in the North Sea.
        Special Features: Some flights also focus on scenic views of the
        Wadden Sea, a UNESCO World Heritage Site.
      </p>
    </div>
    {/* Colognebonn Details */}
    <div className="">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div>
          <Image
            src={Munichriem}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Munich Riem</p>
        </div>
        <span>
          <FaArrowsLeftRight
            size={72}
            className="text-purple-700 rotate-90 md:rotate-0"
          />
        </span>
        <div>
          <Image
            src={Colognebonn}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Colognebonn</p>
        </div>
      </div>
      <p className="text-[#ffffff] px-2 pb-2">
        Heligoland Airport (German: Flugplatz Helgoland-Düne, IATA: HGL, ICAO:
        EDHX) is a unique and small airport located on the island of Düne,
        which is part of the Heligoland archipelago in the North Sea, Germany.
        It&apos;s notable for being Germany&apos;s smallest commercial
        airport. Here are some key facts about it: Location: Heligoland is
        about 70 kilometers (43 miles) off the German mainland. The airport is
        on the smaller of the two main islands, Düne, which is adjacent to the
        main Heligoland island. The airport has three short runways, all made
        of asphalt. Due to their length and crosswind challenges, the airport
        mainly handles small aircraft and experienced pilots. Charter flights
        and scheduled services to connect Heligoland with the mainland.
        Tourism, as Heligoland is a popular destination for its stunning
        cliffs, unique wildlife, and duty-free shopping. Scenic flights over
        the North Sea and Wadden Sea.Small regional airlines operate flights
        to and from airports such as Heide–Büsum, Cuxhaven, and Bremerhaven,
        providing essential links for tourists and residents. The short
        runways and the exposed location make landing and takeoff particularly
        challenging and scenic. Düne island itself is a tourist spot with
        sandy beaches and seals, making the airport a convenient gateway.
      </p>
    </div>
    {/* Dusseldorf Details */}
    <div className="">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div>
          <Image
            src={Munichriem}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Munich Riem</p>
        </div>
        <span>
          <FaArrowsLeftRight
            size={72}
            className="text-purple-700 rotate-90 md:rotate-0"
          />
        </span>
        <div>
          <Image
            src={Dusseldorf}
            alt="munich-riem"
            width={600}
            height={400}
          />
          <p className="text-center font-semibold">Dusseldorf</p>
        </div>
      </div>
      <p className="text-[#ffffff] px-2 pb-2">
        Juist Airfield (German: Flugplatz Juist, IATA: JUI, ICAO: EDWJ) is a
        small regional airport located on the island of Juist, one of the East
        Frisian Islands in the North Sea, Germany. It&apos;s primarily used for
        connecting the island to the mainland and for tourism purposes.
        Location: The airfield is on Juist, a narrow barrier island known for
        its car-free policy, sandy beaches, and tranquil atmosphere. The
        island is part of Lower Saxony, Germany. It has a single grass runway,
        which limits its usage to smaller aircraft and good weather
        conditions. The airfield is subject to tidal influences, as Juist is a
        low-lying island. It primarily serves as a lifeline for the island&apos;s
        residents and visitors, offering faster transportation compared to
        ferries. It’s popular among tourists looking for a unique way to visit
        Juist or enjoy scenic flights over the Wadden Sea. Regular flights are
        operated by FLN Frisia Luftverkehr, a small airline that connects
        Juist with the mainland (e.g., Norden-Norddeich Airfield). Charter
        flights are also available for private travel.
      </p>
    </div>
  </main>
  )
}

export default InternationalRoute;