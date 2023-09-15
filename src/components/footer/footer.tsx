"use client";
import { useEffect, useState } from "react";
import MobileFooter from "@/components/footer/mobile/mobileFooter";
import DesktopFooter from "@/components/footer/desktop/desktopFooter";
import { isDeviceMobile } from "@/utils/isDeviceMobile";

export default function Footer() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("User-Agent:", window.navigator.userAgent);
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  const Footer =
    userAgent === ""
      ? () => <></>
      : isDeviceMobile(userAgent)
      ? MobileFooter
      : DesktopFooter;

  return <Footer />;
}
