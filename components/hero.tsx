"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import Modal from "@/components/utils/modal";
import { ArrowRight } from "lucide-react";
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

        <div className=" pt-24 pb-12 md:pt-32 md:pb-20 text-center block lg:flex  lg:text-left items-start">
          {/* Section header */}
          <div className=" lg:pl-5 pb-12 md:pb-16 ">
            <h1
              className="text-5xl md:text-7xl mt-[20px] text-gray-800 font-bold font-mono leading-tighter tracking-tighter mb-4 lg:w-[600px] mx-auto"
              data-aos="zoom-y-out"
            >
              <span className="bg-clip-text text-transparent mr-6   bg-gradient-to-r to-blue-500 from-sky-400">
                Audio Content
              </span>
              <br></br>
              Made Easy
              {/* <br></br>
              <span className="bg-clip-text text-transparent mr-6   bg-gradient-to-r to-blue-500 from-sky-400">
                10x
              </span>
              your sales */}
              {/* <span className="bg-clip-text text-transparent mr-6   bg-gradient-to-r from-blue-500 to-sky-400">
                interactive
              </span> */}
            </h1>

            <div className="max-w-4xl mx-auto">
              <p
                className="text-2xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Create Professional Audio Content
                <br />
                for Travel, Education and Marketing
              </p>
              <p
                className="text-lg text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                <strong>
                  Powered by the latest AI Text to Speech Technology
                </strong>
              </p>

              <div
                className=" mx-auto justify-center lg:justify-start flex gap-6 "
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <a
                  href="https://app.vontane.com/login"
                  className=" flex h-[44px] w-[160px] items-center justify-center rounded-[10px]  bg-gradient-to-r from-blue-500 to-sky-400 text-center text-base  font-semibold text-white transition"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-md ml-2">Get Started</span>
                  </div>
                </a>
                <a
                  href="https://app.vontane.com/kinkakuji_(golden_pavilion)-da77312b-1bea-447a-9060-64393fb3f6b8"
                  target="_blank"
                  className=" flex h-[44px] w-[160px] items-center justify-center rounded-[10px] text-center text-base  font-semibold text-gray-700 transition border border-gray-500 hover:bg-gray-100"
                >
                  <div className="flex gap-3 items-center justify-center h-full">
                    <span className="text-md ml-2 ">Example</span>
                    <ArrowRight className="text-gray-700" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Image
            data-aos="zoom-y-in"
            data-aos-delay="300"
            src="/images/iphonemockup.png"
            alt="demo image"
            className="mx-auto lg:ml-[40px] rounded-lg"
            width={280}
            height={580}
          />
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
