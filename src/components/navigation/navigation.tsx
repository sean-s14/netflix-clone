"use client";
import { useEffect, useState } from "react";
import MobileNav from "@/components/navigation/mobile/mobileNav";
import DesktopNav from "@/components/navigation/desktop/desktopNav";
import { isDeviceMobile } from "@/utils/isDeviceMobile";

export default function Navigation() {
  const [userAgent, setUserAgent] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(isDeviceMobile(window.navigator.userAgent));
    }
  }, []);

  const Navigation =
    userAgent === null ? () => <></> : userAgent ? MobileNav : DesktopNav;

  return <Navigation />;
}
