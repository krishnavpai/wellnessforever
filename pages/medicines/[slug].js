import React from 'react'
import {useRouter} from 'next/router'
import Medicine from "../../models/Medicine";
import mongoose from "mongoose";
import {BiArrowBack} from 'react-icons/bi'

const Post = ({med}) => {
    const router = useRouter()
    // console.log(med);
    const {slug} = router.query
  return (
    <>
        <h1>Post: {slug}</h1>
        
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
          <button><BiArrowBack  size = {30} className = "mb-4 text-blue-500" onClick={()=> router.back()} ></BiArrowBack> </button>

          <h2 className="text-3xl title-font text-blue-500 tracking-widest"> {med.title}</h2>

          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4"></h1>
          <div className="flex mb-4">
            <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>
                      </div>
          <p className="leading-relaxed mb-4">{med.description}</p>
          
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Quantity</span>
            <span className="ml-auto text-gray-900">4</span>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900"> Rs {med.price}</span>
            <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Buy</button>
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
          
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={med.image}/>
      </div>
    </div>
  </section>
    </>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let med = await Medicine.findOne({slug: context.query.slug});
  return {
    props: { med: JSON.parse(JSON.stringify(med)) },
  };
}
export default Post
