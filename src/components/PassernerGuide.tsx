import { motion } from "framer-motion";
import Image from "next/image";
import passengerguidei from "../../public/passengerguidei.jpg";
import passengerguideii from "../../public/passengerguideii.jpg";
import guideiii from "../../public/guideiii.jpg";

const PassernerGuide = () => {
  return (
    <main>
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
          className="text-3xl md:text-5xl text-orange-600 pt-5 text-center font-bold pb-5"
        >
          Departure Guideline
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between pt-5 pb-5">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
        >
          <Image
            src={passengerguidei}
            alt="passenger-iamge"
            width={700}
            height={600}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
        >
          <Image
            src={passengerguideii}
            alt="passenger-iamge"
            width={700}
            height={600}
          />
        </motion.div>
      </div>
      <div className="bg-slate-200/50 w-full h-full md:px-6 px-3">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
          className="text-[#ffc107] md:text-5xl font-semibold font-secondary text-2xl md:py-4 py-2"
        >
          Passenger guidance system for airports
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
          className="text-lg pb-4 pt-4"
        >
          Airports are a very demanding and complex environment with their
          requirements for processes, the regulations that must be observed, the
          safety of passengers and working personnel and the different workloads
          of the individual areas.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
          className="text-lg pb-4"
        >
          Only security solutions that have been thought through to the end and
          people guidance systems for processes that have been fully studied and
          understood will suffice.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.8,
          }}
          className="text-lg pb-4"
        >
          This is exactly where our strength lies. Via Guide employs aviation
          specialists (e.g. former airline employees and pilots) who know the
          requirements of passenger handling, the routes and processes in the
          terminal and on the airfield as well as the security requirements in
          all areas inside out.
        </motion.p>
        <h3 className="text-indigo md:text-5xl font-semibold font-secondary text-2xl md:py-4 py-2">
          Via Guide product portfolio for the terminal
        </h3>
        {/* image and text area */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 md:pt-5 pt-3">
          <Image
            src={guideiii}
            alt="passerner-guide"
            width={700}
            height={600}
          />
          {/* text div */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className="text-lg pb-4"
            >
              Whether it&apos;s shortened queues, a regulated and efficient
              security check process or clear and comprehensible communications
              through signposts and portals, our people guidance systems are
              optimally adaptable and can be expanded and combined to suit your
              needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className="text-lg pb-4"
            >
              Additionally, we also boast a range of electronic and smart
              solutions that, for example, warn people who are going the wrong
              way, measure the flow of passengers and adjust the queue route by
              fully automatic control or at the push of a button, thus
              increasing the quality of service and improving the customer
              experience.
            </motion.p>
            <h4 className="md:text-4xl text-3xl font-secondary text-pink md:pb-6 pb-3">
              Your benefits
            </h4>
            <ol className="list-disc px-4 pb-5">
              <li className="pb-1">
                Robust stability and maximum flexibility guaranteed
              </li>
              <li className="pb-1">
                Highest quality for long-lasting use in heavily frequented areas
              </li>
              <li className="pb-1">Up to 6,000 variants configurable</li>
              <li className="pb-1">
                Large selection of coloured webbing belts
              </li>
              <li className="pb-1">
                A wide range of installation options, from mobile or magnetic to
                firmly screwed down
              </li>
              <li className="pb-1">
                Multifunctional system, expandable with wall and door elements
                as well as post attachments (signage, frames for printouts or
                hand disinfection dispensers etc)
              </li>
            </ol>
          </div>
        </div>
        {/* PUBLIC GUIDANCE by Via Guide */}
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-3"></div>
      </div>
    </main>
  );
};

export default PassernerGuide;


// https://www.viaguide.com/en/industry-sectors/airports    follo the website