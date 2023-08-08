"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import Modal from "@/components/utils/modal";

export default function Hero() {
  // const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setErrorMessage(""); // Reset the error message

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatusMessage("Successfully joined the waitlist!");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}

        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 h-[700px] ">
            <h1
              className="text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 lg:w-[600px] mx-auto"
              data-aos="zoom-y-out"
            >
              Create{" "}
              <span className="bg-clip-text text-transparent mr-6   bg-gradient-to-r to-blue-500 from-sky-400">
                engaging
              </span>
              and{" "}
              <span className="bg-clip-text text-transparent mr-6   bg-gradient-to-r from-blue-500 to-sky-400">
                interactive
              </span>
              content
            </h1>

            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                For Educators, Marketers and Creatives
              </p>

              <div
                className=" mx-auto flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                {/* <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div> */}

                {/* <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}

                <a
                  href="#"
                  className="subscribe-btn flex h-[44px] w-[160px] items-center justify-center rounded-[10px]  bg-gradient-to-r from-blue-500 to-sky-400 text-center text-base  font-semibold text-white transition"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-md ml-2">Sign up for Free</span>
                  </div>
                </a>

                <Image
                  data-aos="zoom-y-in"
                  data-aos-delay="300"
                  src="/images/landingpageimage.png"
                  alt="demo image"
                  className="rounded-lg mt-[100px] border-2 border-gray-300 shadow-md opacity-80"
                  width={700}
                  height={300}
                />

                {/* <div className="relative w-full max-w-md lg:max-w-lg">
                  <div
                    className="
                        text-black
                        w-full
                        bg-white
                        flex flex-col
                        items-center
                        px-4
                        py-5
                        rounded-2xl
                        z-10
                        shadow-2xl shadow-black/10
                        md:px-7
                        lg:py-9
                        selection:bg-black selection:text-white
                    "
                  >
                    <h3 className="font-bold text-3xl mb-10 lg:text-4xl">
                      Get Notified
                    </h3>
                    <form
                      className="flex flex-col items-center w-full space-y-8 mb-8"
                      onSubmit={handleSubmit}
                    >
                      {statusMessage && (
                        <span className="flex items-center tracking-wide text-green-600 text-md text-bold mt-1 ml-1">
                          {statusMessage}
                        </span>
                      )}
                      <div className="flex flex-col space-y-4 w-full font-semibold">
                        <div className="p-[3px] rounded-lg  bg-gradient-to-r from-blue-500 to-sky-400">
                          <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                                    transition-colors
                                    w-full
                                    bg-slate-100
                                    px-5
                                    py-3
                                    rounded-md
                                    border-0
                                    focus:outline-none
                                    focus:ring-[3px] focus:ring-black
                                "
                          />
                        </div>

                        {errorMessage && (
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
                            {errorMessage}
                          </span>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="
                                transition-all
                                flex
                                items-center
                                justify-center
                                space-x-1
                                px-5
                                py-3
                                bg-black
                                text-white
                                rounded-lg
                                w-full
                                ring-transparent ring-offset-4 ring
                                active:ring-black
                                hover:bg-neutral-800
                            "
                      >
                        <span>Join waitlist</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </form>
                    <p className="text-slate-500">
                      We'll get in touch with you{" "}
                      <span className="font-bold">soon</span>.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
