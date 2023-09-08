"use client";
import { useState } from "react";
import FaqDropdown from "./faqDropdown";
import faq from "@/app/faq.json";

export default function FAQ() {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  function toggleDropdown(index: number) {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  }

  return (
    <>
      {faq.map(({ _id, question, answer }, index) => (
        <FaqDropdown
          key={index}
          id={_id}
          onClick={toggleDropdown}
          open={dropdownOpen}
          question={question}
          answer={answer}
        />
      ))}
    </>
  );
}
