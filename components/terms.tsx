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

      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <header className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-4xl mb-4 font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Terms of Service
            </h1>
          </header>

          <div className="article w-richtext">
            <h5 className="font-bold text-xl mb-4">Introduction</h5>
            <p className="mb-2">
              Welcome to Vontane Limited ("Vontane" or "we"). By using our
              document and slide storytelling text editor web app, you are
              agreeing to comply with and be bound by the following terms and
              conditions of use, which govern Vontane's relationship with you in
              relation to this website.
            </p>
            <p></p>
            <h6 className="font-bold text-lg mb-4">Terms:</h6>
            <ol className="list-decimal pl-5">
              <li>
                <strong>Acceptance of Terms:</strong> By using Vontane's
                services, you are agreeing to these terms. If you do not agree
                to these terms, please do not use our web app.
              </li>
              <li>
                <strong>Use of Vontane:</strong> Our web app is designed to be
                used by individuals, businesses, and organizations. You are
                solely responsible for the use of Vontane and any resulting
                consequences.
              </li>
              <li>
                <strong>Eligibility:</strong> You must be at least 13 years of
                age to use our Service. By using the Service, you represent and
                warrant that you have the right, authority, and capacity to
                enter into these Terms of Service and to abide by all terms and
                conditions set forth herein.
              </li>
              <li>
                <strong>Account Registration and Security:</strong> You may be
                required to create an account to access certain features of our
                Service. You are responsible for maintaining the confidentiality
                of your account information, including your password, and for
                all activity that occurs under your account. You agree to notify
                Vontane immediately of any unauthorized use of your account or
                password, or any other breach of security. You may not share
                your account or password with anyone or use another user's
                account without permission.
              </li>
              <li>
                <strong>Usage Restrictions:</strong> You agree not to use the
                Service for any illegal, unauthorized, or otherwise improper
                purposes, or in any manner that infringes upon the rights of
                others. You also agree not to interfere with or disrupt the
                Service or the servers or networks connected to the Service.
              </li>
              <li>
                <strong>Intellectual Property Rights:</strong> All content,
                including text, images, logos, and other material provided by
                Vontane, is the property of Vontane or its licensors and is
                protected by copyright, trademark, and other applicable laws.
                Except as expressly permitted in these Terms of Service, you may
                not reproduce, distribute, modify, or create derivative works of
                any content without the prior written consent of Vontane or the
                applicable rights holder.
              </li>
              <li>
                <strong>User-Generated Content:</strong> All user-generated
                content, including text, images, and other material created,
                uploaded, or submitted by you through the Service, remains your
                property. By using the Service, you grant Vontane a worldwide,
                non-exclusive, royalty-free license (with the right to
                sublicense) to use, copy, reproduce, process, adapt, modify,
                publish, transmit, display, and distribute such content in any
                and all media or distribution methods, only to the extent
                necessary to provide the Service to you.
              </li>
              <li>
                <strong>Subscription fee:</strong> Vontane primarily uses
                Stripe, a third-party payment processor, to manage and process
                subscription payments for its premium tier services. By
                subscribing to the premium tier, you agree to provide accurate
                and up-to-date payment information and authorize Stripe to
                process your payments on behalf of Vontane. You also agree to
                comply with Stripe's terms of service and privacy policy, which
                are available on the Stripe website. If your payment method is
                declined or fails for any reason, Vontane may suspend or
                terminate your access to the premium tier services until the
                issue is resolved.
              </li>
              <li>
                <strong>Billing and Renewal:</strong> If you choose a
                subscription-based premium tier, you will be billed in advance
                for the chosen billing period (e.g., monthly or annually)
                through Stripe. Your subscription will automatically renew at
                the end of each billing period unless you cancel your
                subscription before the end of the current billing period. You
                can cancel your subscription at any time through your account
                settings or by contacting Vontane customer support. If you
                cancel your subscription, you will continue to have access to
                the premium tier features until the end of the current billing
                period, but your subscription will not be renewed.
              </li>
              <li>
                <strong>Refunds:</strong> Vontane may, in its sole discretion,
                offer refunds for its premium tier services under certain
                conditions. If you believe you are eligible for a refund, please
                contact Vontane customer support with your refund request and
                provide any relevant information. Any approved refunds will be
                processed through Stripe according to the payment method used
                for the original transaction.
              </li>
              <li>
                <strong>Price Changes:</strong> Vontane reserves the right to
                modify the fees for its premium tier services at any time. We
                will provide notice of any price changes by posting the updated
                fees on our website or by notifying you through email or other
                means. If you do not agree to the new fees, you may cancel your
                subscription through Stripe before the new fees take effect.
              </li>

              <li>
                <strong>Liability:</strong> Vontane is not responsible for any
                damages or losses that may result from the use of our web app.
              </li>
              <li>
                <strong>Privacy:</strong> Vontane respects your privacy and
                collects and uses your information in accordance with its
                Privacy Policy.
              </li>
              <li>
                <strong>Termination:</strong> Vontane reserves the right to
                terminate your use of its services at any time, with or without
                notice.
              </li>
              <li>
                <strong>Amendments to Terms and Conditions:</strong> Vontane
                reserves the right to amend these terms and conditions at any
                time. Any changes will be posted on this page, and you are
                responsible for periodically reviewing the most recent version.
              </li>
              <li>
                <strong>Governing Law:</strong> These terms and conditions are
                governed by and construed in accordance with the laws of the
                country where Vontane Limited is registered. You agree to submit
                to the exclusive jurisdiction of the courts located in that
                country.
              </li>
            </ol>
            <p className="mt-4">
              By using Vontane's services, you are agreeing to these terms and
              conditions.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
