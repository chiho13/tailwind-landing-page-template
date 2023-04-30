"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroImage from "@/public/images/hero-image.png";
import Modal from "@/components/utils/modal";

export default function Terms() {
  // const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

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

      <div className="max-w-[900px] mx-auto px-4 sm:px-6" data-aos="zoom-y-out">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <header className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-4xl mb-4 font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Privacy Policy
            </h1>
          </header>

          <div className="article w-richtext">
            <p className="mb-2">
              Vontane Limited ("Vontane," "we," "us," or "our") is committed to
              protecting the privacy of our users. This Privacy Policy explains
              how we collect, use, disclose, and protect your personal
              information when you use our document and slide storytelling text
              editor web app (the "Service"). By using our Service, you agree to
              the terms of this Privacy Policy and the processing of your
              personal information as described herein.
            </p>
            <p className="mb-2">
              This Privacy Policy complies with the General Data Protection
              Regulation (GDPR), the UK General Data Protection Regulation (UK
              GDPR), and other applicable data protection laws.
            </p>
            <div>
              <h5 className="text-bold mt-2 mb-2">Information We Collect</h5>
              <p className="mb-2">
                We may collect personal information, such as your name, email
                address, and other contact details, when you sign up for our
                services, make a purchase, or contact us for support. We may
                also collect non-personal information, like your browser type,
                IP address, and device type. Cookies or similar technologies may
                be used to gather this information.
              </p>

              <h5 className="text-bold mt-2 mb-2">
                How We Use Your Information
              </h5>
              <p className="mb-2">
                Your personal information may be used to provide our services,
                communicate with you about our products and services, improve
                our offerings, and personalize your experience on our website.
                We may also use your information to send you marketing
                communications or promotional offers, but you can opt out at any
                time.
              </p>

              <h5 className="text-bold mt-2 mb-2">Your Choices</h5>
              <p className="mb-2">
                You may choose not to provide certain personal information, but
                this could limit your ability to use specific features on our
                website or services. You can also opt out of receiving marketing
                communications from us.
              </p>

              <h5 className="text-bold mt-2 mb-2">Security</h5>
              <p className="mb-2">
                We employ reasonable measures to safeguard your personal
                information from unauthorized access, disclosure, or misuse.
                However, no method of transmission over the internet or
                electronic storage is completely secure, so we cannot guarantee
                absolute security.
              </p>

              <h5 className="text-bold mt-2 mb-2">
                Changes to this Privacy Policy
              </h5>
              <p className="mb-2">
                We may update this Privacy Policy occasionally. Any changes will
                be posted on our website, and we recommend reviewing the Privacy
                Policy periodically for updates.
              </p>

              <p className="mb-2">
                Please note that Vontane Limited complies with both the EU
                General Data Protection Regulation (GDPR) and the UK General
                Data Protection Regulation (UK GDPR) as applicable.
              </p>
            </div>

            <div>
              <p className="mt-4">
                If you have any questions, please contact{" "}
                <a
                  className="text-blue-500"
                  href="mailto:anthony.ho@vontane.com"
                >
                  anthony.ho@vontane.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
