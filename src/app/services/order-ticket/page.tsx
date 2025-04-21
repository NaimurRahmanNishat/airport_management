"use client";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const options = [
  "Visa application",
  "Proof of return at airport",
  "Expedite passport renewal",
  "Visa extension",
  "Office work place needs it",
  "Prank a friend",
  "Other",
  "Prefer not to say",
  "Car rental",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. 'Swaziland')",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Page = () => {
  const [openPassenger, setOpenPassenger] = useState<boolean>(false);
  const [tripType, setTripType] = useState<"oneway" | "roundtrip" | null>(
    "oneway"
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [purpose, setPurpose] = useState<string>("Visa application");
  const [openCountryDropdown, setOpenCountryDropdown] =
    useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("Bangladesh");
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleMorePassenger = () => {
    setOpenPassenger(!openPassenger);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setOpenCountryDropdown(false);
  };

  const downloadPdf = async () => {
    if (!formRef.current) return;

    try {
      setIsGeneratingPdf(true);

      const canvas = await html2canvas(formRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");

      // Calculate dimensions maintaining aspect ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgHeight / imgWidth;
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdfWidth * ratio;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("dummy-ticket-request.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64" ref={formRef}>
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
          <form action="" method="post">
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
                <label htmlFor="male" className="mr-2">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  className="mr-2"
                />
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
                  <h3 className="text-xl">
                    Number of additional passengers: (optional)
                  </h3>
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
              <h2 className="md:text-3xl text-xl font-semibold">
                Travel Details
              </h2>
              <div>
                <h4 className="font-semibold text-lg py-5">
                  Trip type <span className="text-red-700">*</span>
                </h4>
                <div className="flex items-center gap-16">
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="tripType"
                      id="oneway"
                      checked={tripType === "oneway"}
                      onChange={() => setTripType("oneway")}
                    />

                    <label htmlFor="oneway" className="text-lg font-medium">
                      One Way
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="tripType"
                      id="roundtrip"
                      onClick={() => setTripType("roundtrip")}
                    />
                    <label htmlFor="roundtrip" className="text-lg font-medium">
                      Round trip
                    </label>
                  </div>
                </div>

                {/* Conditional travel inputs */}
                {tripType && (
                  <>
                    <div className="flex w-full gap-1 md:gap-4">
                      <div className="w-1/2 flex flex-col py-2">
                        <label className="md:text-xl font-medium pb-2">
                          From city / Origin{" "}
                          <span className="text-red-800">*</span>
                        </label>
                        <input
                          type="text"
                          className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col py-2">
                        <label className="md:text-xl font-medium pb-2">
                          To city / Destination{" "}
                          <span className="text-red-800">*</span>
                        </label>
                        <input
                          type="text"
                          className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex w-full gap-4">
                      <div className="w-1/2 flex flex-col py-2">
                        <label className="md:text-xl font-medium pb-2">
                          Departure date <span className="text-red-800">*</span>
                        </label>
                        <input
                          type="date"
                          className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none"
                        />
                      </div>

                      {tripType === "roundtrip" && (
                        <div className="w-1/2 flex flex-col py-2">
                          <label className="md:text-xl font-medium pb-2">
                            Return date <span className="text-red-800">*</span>
                          </label>
                          <input
                            type="date"
                            className="px-3 py-2 border border-gray-300 focus:border-red-600 rounded-md outline-none"
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Additional information (optional) */}
            <div className="md:py-4 py-2">
              <h4 className="text-xl font-semibold pb-4">
                Additional information (optional)
              </h4>
              <textarea
                placeholder="Enter any additional information that you like us to keep in mind."
                className="px-2 w-full py-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
              ></textarea>
            </div>

            {/* Delivery options */}
            <div>
              <h1 className="md:text-3xl text-xl">Delivery options:</h1>
              <div className="md:py-4 py-2 flex gap-4 flex-col">
                <strong className="text-lg">
                  Purpose of dummy ticket (optional)
                </strong>
                <div className="relative">
                  <div
                    className="px-3 py-2 border border-gray-300 rounded-md w-full cursor-pointer flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span>{purpose}</span>
                    <ChevronDown
                      className={`w-4 h-4 ml-2 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {options.map((option) => (
                        <div
                          key={option}
                          className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                            purpose === option ? "bg-gray-100 font-medium" : ""
                          }`}
                          onClick={() => {
                            setPurpose(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Appointment / Submission date (optional) */}
            <div className="md:pb-4 pb-2 flex flex-col">
              <strong className="pb-2">
                Appointment / Submission date (optional)
              </strong>
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-gray-700"
              />
            </div>

            {/* How will you like to receive the dummy ticket (optional) */}
            <div className="md:py-8 py-4">
              <strong>
                How will you like to receive the dummy ticket (optional)
              </strong>
              <div className="flex gap-16">
                <div className="flex gap-1 items-center py-2">
                  <input type="radio" name="receive" id="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="flex gap-1 items-center py-2">
                  <input type="radio" name="receive" id="whatsapp" />
                  <label htmlFor="whatsapp">Whatsapp</label>
                </div>
                <div className="flex gap-1 items-center py-2">
                  <input type="radio" name="receive" id="both" />
                  <label htmlFor="both">Both</label>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div>
              <h1 className="md:text-3xl text-xl">Billing Details</h1>
              <div className="md:py-8 py-2">
                <div className="flex flex-col gap-2">
                  <strong className="text-darkText">
                    Billing Name / Company (optional)
                  </strong>
                  <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-rgbGreen"
                  />
                </div>
                <div className="flex flex-col gap-2 md:py-4 py-2">
                  <strong className="text-darkText">
                    Pnone <span className="text-red-800">*</span>
                  </strong>
                  <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-rgbGreen"
                  />
                </div>
                <div className="flex flex-col gap-2 md:pb-4 pb-2">
                  <strong className="text-darkText">
                    Email address <span className="text-red-800">*</span>
                  </strong>
                  <input
                    type="text"
                    className="px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-rgbGreen"
                  />
                </div>
                <div>
                  <strong className="text-darkText">
                    Country <span className="text-red-800">*</span>
                  </strong>
                  <div className="relative mt-2">
                    <div
                      className="px-3 py-2 border border-rgbGreen focus:border-secondary rounded-md w-full cursor-pointer flex justify-between items-center"
                      onClick={() =>
                        setOpenCountryDropdown(!openCountryDropdown)
                      }
                    >
                      <span>{selectedCountry}</span>
                      <ChevronDown
                        className={`w-4 h-4 ml-2 transition-transform ${
                          openCountryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openCountryDropdown && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gary-300 focus:border-secondary rounded-md shadow-lg max-h-60 overflow-auto">
                        {countries.map((country) => (
                          <div
                            key={country}
                            className={`px-3 py-2 hover:bg-[#2ea2cc] cursor-pointer ${
                              selectedCountry === country
                                ? "bg-[#2ea2cc] text-white font-medium"
                                : ""
                            }`}
                            onClick={() => handleCountrySelect(country)}
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:py-4 py-2 flex flex-col gap-2">
                  <strong className="text-red-800">Street address *</strong>
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="House number and street name"
                      className="px-3 py-2 border border-gray-300 outline-none focus:border-red-800 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="px-3 py-2 border border-gray-300 outline-none focus:border-rgbGreen rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="md:py-4 py-2 flex flex-col gap-2">
                    <strong className="text-darkText">
                      Town / City <span className="text-red-800">*</span>
                    </strong>
                    <input
                      type="text"
                      className="px-3 py-2 border border-gray-300 outline-none focus:border-red-800 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <strong className="text-darkText">
                      State / County <span className="text-red-800">*</span>
                    </strong>
                    <input
                      type="text"
                      className="px-3 py-2 border border-gray-300 outline-none focus:border-red-800 rounded-md"
                    />
                  </div>
                  <div className="md:py-4 py-2 flex flex-col gap-2">
                    <strong className="text-darkText">
                      Postcode / ZIP <span className="text-red-800">*</span>
                    </strong>
                    <input
                      type="text"
                      className="px-3 py-2 border border-gray-300 outline-none focus:border-red-800 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Order place */}
          <div className="md:py-4 py-2 flex flex-col gap-2 md:pb-16">
            <button
              onClick={downloadPdf}
              disabled={isGeneratingPdf}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                isGeneratingPdf ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isGeneratingPdf ? "Generating PDF..." : "Download Order"}
            </button>
          </div>
        </div>

        {/* right side additional info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:pb-12 pb-6">Additional information</h2>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl pb-2 font-medium">
              Order Notes (optional)
            </h2>
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
