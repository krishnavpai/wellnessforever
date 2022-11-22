import React, { use } from "react";
import bg from "../images/polygon-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const submitted = async (e) => {
    console.log(name, email, password);
    e.preventDefault();

    const data = { name, email, password };
    let res = await fetch(`http://localhost:3000/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try{
    let response = await res.json();
    console.log(response);
    setName("");
    setEmail("");
    setPassword("");
    
    if(response.success){
    toast.success("Signup Successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }
    catch(err){
    
      toast.error("User Already exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  }

  // const changed =  (e) => {
  //   if(e.target.name === "name"){
  //     setName(e.target.value);
  //   }
  //   else if(e.target.email === "email"){
  //     setEmail(e.target.value);
  //   }
  //   else if(e.target.password === "password"){
  //     setPassword(e.target.value);
  //   }
  // }

  return (<>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    <div className="text-blueGray-700  -z-10">

      

      <Image
        src = "/polygon-bg.jpg"
        alt=""
        layout="fill"
        objectFit="cover" />

      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white rounded-xl">
                    <form onSubmit={submitted} method="POST">
                      <div className="relative w-full mb-3 pt-8 ">
                        <label
                          htmlFor="name"
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Name
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Name"
                          />
                          </label>
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          htmlFor="email"
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Email
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          autoComplete="email"
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          />
                          </label>
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          htmlFor="password"
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        >
                          Password
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          />
                          </label>
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            I agree with the
                            <a
                              href=""
                              className="text-pink-500 px-2"
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                        >
                          <span>Create Account</span>
                        </button>
                      </div>
                      <span className="flex justify-center ml-2 text-md font-semibold text-blueGray-600 pt-4">
                        Already have an account?
                        <Link href="/login" className="text-teal-500 px-2">
                          Login
                        </Link>
                      </span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Signup;
