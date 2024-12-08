"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import DomesticRoute from "@/components/DomesticRoute";
import InternationalRoute from "@/components/InternationalRoute";
import PassernerGuide from "@/components/PassernerGuide";
import AircraftNumber from "@/components/AircraftNumber";
import TicketPrice from "@/components/TicketPrice";

const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [bgIndex, setBgIndex] = useState<number>(0);
  const [openRoute, setOpenRoute] = useState<boolean>(false);
  const [openGuide, setOpenGuide] = useState<boolean>(false);
  const [airNumber, setAirNumber] = useState<boolean>(false);
  const [ticketPrice, setTicketPrice] = useState<boolean>(false);
  const [international, setInternational] = useState<boolean>(false);
  const [domestic, setDomestic] = useState<boolean>(false);

  const handleRoute = () => {
    setOpenRoute((prev) => !prev);
    setOpenGuide(false);
    setAirNumber(false);
    setTicketPrice(false);
    setInternational(false);
    setDomestic(false);
  };

  const handleGuide = () => {
    setOpenGuide((prev) => !prev);
    setOpenRoute(false);
    setAirNumber(false);
    setTicketPrice(false);
    setInternational(false);
    setDomestic(false);
  };

  const handleNumber = () => {
    setAirNumber((prev) => !prev);
    setOpenRoute(false);
    setOpenGuide(false);
    setTicketPrice(false);
    setInternational(false);
    setDomestic(false);
  };

  const handlePrice = () => {
    setTicketPrice((prev) => !prev);
    setOpenRoute(false);
    setOpenGuide(false);
    setAirNumber(false);
    setInternational(false);
    setDomestic(false);
  };

  const handleDomesticRoute = () => {
    setDomestic((prev) => !prev);
    setInternational(false);
  };

  const handleInternationalRoute = () => {
    setInternational((prev) => !prev);
    setDomestic(false);
  };

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

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main
      style={{ backgroundImage: `url(${bgImage[bgIndex]})` }}
      className="bg-cover bg-center w-full h-full transition-all duration-1000"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="flex items-center flex-col md:flex-row justify-center pt-2 text-xl font-semibold text-[#cf6110]">
          Hello, {user.firstName} welcome to Flughafen München-Riem
          International Airport
        </h3>
        <div className="mt-5 w-full h-[96px] md:h-[100px] opacity-100 grid gap-2 grid-cols-2 md:grid-cols-4">
          <button
            onClick={handleRoute}
            className="md:text-2xl bg-slate-200/35 text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Aircraft Route</span>
          </button>
          <button
            onClick={handleGuide}
            className="md:text-2xl bg-slate-200/35 text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Passenger Guide</span>
          </button>
          <button
            onClick={handleNumber}
            className="md:text-2xl bg-slate-200/35 text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Aircraft Number</span>
          </button>
          <button
            onClick={handlePrice}
            className="md:text-2xl bg-slate-200/35 text-purple-700 hover:ring-2 hover:bg-[#dc5110] hover:font-bold"
          >
            <span>Ticket Price</span>
          </button>
        </div>
        {/* Open Aircraft Route */}
        {openRoute && (
          <div className="pt-1">
            <div className="flex items-center justify-center opacity-100 py-5 gap-2 text-center text-green-600">
              <div className="cursor-pointer bg-slate-200/65 px-10 py-5 hover:font-secondary hover:text-orange-600 text-xl">
                <button onClick={handleDomesticRoute}>Domestic Route</button>
              </div>
              <div className="cursor-pointer bg-slate-200/65 px-5 md:py-5 md:px-10 py-2 hover:font-secondary hover:text-orange-600 text-xl">
                <button onClick={handleInternationalRoute}>
                  International Route
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Open Passenger Guide */}
        {openGuide && (
          <div>
            <PassernerGuide/>
          </div>
        )}
        {/* Open Aircraft Number */}
        {airNumber && (
          <div>
            <AircraftNumber/>
          </div>
        )}
        {/* Open Ticket Price */}
        {ticketPrice && (
          <div>
            <TicketPrice/>
          </div>
        )}
        {/* open Domestic flight */}
        {domestic && (
          <div>
            <DomesticRoute />
          </div>
        )}
        {/* open International flight */}
        {international && (
          <div>
            <InternationalRoute />
          </div>
        )}
      </div>
      {/* Airport Service */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-5 md:pt-8">
        <h2 className="md:text-5xl pb-5 text-3xl text-rose-400 font-bold text-center">
          Airport Service
        </h2>
        <p className="text-white pb-5 text-lg">
          A dummy ticket looks typically like a regular airline ticket and has a
          valid PNR/ booking code or booking reference number. A PNR code is a 6
          digit alpha numeric code that is provided by the airline. They can be
          verified on the airlines websites if checked using the &quot;Manage my
          booking&quot; tool or &quot;My trips&quot; section found on many
          airline websites. A dummy ticket is also known as a flight reservation
          or itinerary.
        </p>
        <p className="text-white pb-5 text-lg">
          The main use of a dummy ticket is for visa applications. Many
          embassies, consulates or visa application centers like VFS or BLS ask
          for a flight reservation during the visa application process. Dummy
          tickets are also used for proof of return to show at the immigration
          while traveling. Other uses of a dummy ticket are as below: * Visa
          applications Proof of return or onward travel Expedite passport
          renewal Show company HR/ Manager for leave and other purposes Exit
          visa procedures in many GCC countries Rent a car at airport locations
        </p>
        <p className="text-white pb-5 text-lg">
          Normally the dummy tickets get delivered within 6hours - 24 hours. As
          a matter of policy we also try to deliver the dummy ticket 1-2 days
          before the visa appointment date so as to maximize the validity of the
          tickets. We are known to provide last minute urgent tickets depending
          on the needs of the customer Prices start at 15 USD for the regular
          dummy ticket and go all the way up to 49 USD for confirmed dummy
          ticket with etkt number. The best way to contact is using the chatbox
          down below and chat with a support agent. If we are unavailable the
          next best way is by WhatsApp - +918884777300/+447466789047. You can
          also call us or email. dummyticket.com and affliated travel agents
          have a world wide presence and as such we provide you with 24/7
          operations which no company in this field is providing. We have major
          operations in New York, London, Bangalore and Dubai. Our new Manila
          office is coming up in a few months Just have a look at the checklist
          from the embassy. If its mentioned flight itinerary, airline
          reservation, flight booking or something similar to this, then you can
          use our tickets.
        </p>
        <p className="text-white pb-5 text-lg">
          We provide flight reservations for your visa application and/or proof
          of return/onward travel. We also provide dummy hotel booking and
          travel insurance for visa application purposes. dummyticket.com has
          one of the most generous commission structures in the travel and tour
          industry. The standard affiliate program offered by dummyticket.com is
          perfect for travel websites, blogs and vlogs. Use the below button to
          sign-up and start making money{" "}
        </p>
      </div>
    </main>
  );
};

export default Page;
