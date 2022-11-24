import React from "react";
import Medicine from "../models/Medicine";
import mongoose from "mongoose";
import Link from "next/link";


const dashboard = ({med}) => {
  console.log(med);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {med.map((item) => {
            return (
              <Link
                key = {item._id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
                href={`/medicines/${item.slug}`}
              >
                <div className="block relative h-48 rounded overflow-hidden" >
                  <img
                    alt="ecommerce"
                    className=" object-cover object-center m-auto md:mx-0 h-full  block"
                    src={item.image}

                  />
                </div>
                <div className="mt-4 text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <span className="mt-1">Rs {item.price}</span>
                </div>
              </Link>)
            
            })}
          
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let med = await Medicine.find();
  return {
    props: { med: JSON.parse(JSON.stringify(med)) },
  };
}

export default dashboard;
