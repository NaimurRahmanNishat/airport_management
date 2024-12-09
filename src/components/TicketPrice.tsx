import { motion } from "framer-motion";
import React from "react";

const TicketPrice = () => {
  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h1 className="mb-5 font-bold text-gradient text-5xl">
        Domestic Flight Ticket Price
      </h1>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.8,
        }}
        className="bg-slate-200/70 w-full grid"
      >
        <table className="border-collapse border border-slate-200 w-full table-fixed">
          <thead className="">
            <tr className="text-pink font-secondary font-semibold cursor-pointer">
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">From</th>
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">
                Destination
              </th>
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Baltrum
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                250$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Heidebusum
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                205$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Heligoland
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                185$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Juistairfield
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                280$
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
      <h1 className="mb-5 font-bold text-gradient text-5xl">
        International Flight Ticket Price
      </h1>
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
        className="bg-slate-200/70 w-full grid"
      >
        <table className="border-collapse border border-slate-200 w-full table-fixed">
          <thead className="">
            <tr className="text-pink font-secondary font-semibold cursor-pointer">
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">From</th>
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">
                Destination
              </th>
              <th className="border border-slate-600 w-1/3 pt-3 pb-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                BerlinBrandenburg
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                550$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Bremen
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                605$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Colognebonn
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                485$
              </td>
            </tr>
            <tr>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                Munich Riem
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-green-600">
                Dusseldorf
              </td>
              <td className="border border-slate-600 text-center pt-3 pb-3 font-semibold text-orange-600">
                780$
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TicketPrice;
