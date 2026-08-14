"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 cursor-pointer
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-[#08752E]
        text-white
        shadow-lg
        transition-all duration-300
        hover:bg-[#075e26]
        hover:-translate-y-1
        ${
          isVisible
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
}
