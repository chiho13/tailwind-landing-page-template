"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QDFB9JD0B8"
      ></Script>
      <Script>
        {`
  declare var dataLayer: any[];
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QDFB9JD0B8');
`}
      </Script>
      <main className="grow">
        {children}
        <Analytics />
      </main>

      <Footer />
    </>
  );
}
