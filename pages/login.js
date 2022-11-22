import React from "react";
// import bg from "../images/polygon-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitted = async (e) => {
    // console.log(email, password);
    e.preventDefault();

    const data = { email, password };
    let res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();
    // console.log(response);

    setEmail("");
    setPassword("");
    if (response.success) {
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/");
      }, 1300);
    } else {
      toast.error(`${response.message}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
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
      <div className="BG">
        <Image
        src = "/polygon-bg.jpg"
        alt=""
        layout="fill"
        objectFit="cover" />

        <div className="text-blueGray-700">
          <main>
            <section className="relative w-full h-full py-40 min-h-screen">
              <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white rounded-xl">
                        <form onSubmit={submitted}>
                          <div className="relative w-full mb-3 pt-8 "></div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Email
                              <input
                                value={email}
                                type="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Email"
                              />
                            </label>
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Password
                              <input
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Password"
                              />
                            </label>
                          </div>

                          <div className="text-center mt-6">
                            <button
                              className="bg-blue-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Log In
                            </button>
                          </div>
                          <span className="flex justify-center ml-2 text-md font-semibold text-blueGray-600 pt-4">
                            Donot have an account?
                            <Link href="/signup" className="text-teal-500 px-2">
                              Sign Up
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
      </div>
    </>
  );
};

export default Login;
