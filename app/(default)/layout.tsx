"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import CookieConsent from "react-cookie-consent";

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
      <main className="grow">{children}</main>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="mySiteCookies"
        style={{
          background: "#2b2b2b",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
        }}
        buttonStyle={{
          color: "#2b2b2b",
          fontSize: "16px",
          backgroundColor: "#f1f1f1",
          borderRadius: "6px",
          padding: "2px 10px",
          fontWeight: "bold",
        }}
        expires={150}
      >
        We use cookies to provide the best experience on our website. Please
        accept our cookies for optimal performance.
      </CookieConsent>

      <Footer />
    </>
  );
}
