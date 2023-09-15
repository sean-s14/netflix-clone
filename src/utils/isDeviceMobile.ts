import {
  mobileUserAgentRegex,
  mobileUserAgentRegexShort,
} from "@/constants/userAgents";

function isDeviceMobile(userAgent: string) {
  return (
    mobileUserAgentRegex.test(userAgent) ||
    mobileUserAgentRegexShort.test(userAgent.substring(0, 4))
  );
}

export { isDeviceMobile };
