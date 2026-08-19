import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollDefaults = {
  start: "top 82%",
  toggleActions: "play none none reverse",
};

export const animateSection = (element) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      ...scrollDefaults,
    },
  });
};

export const animateHeading = (element) => {
  return gsap.from(element, {
    y: 35,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      ...scrollDefaults,
    },
  });
};

export const animateParagraphs = (elements) => {
  return gsap.from(elements, {
    y: 25,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elements[0],
      ...scrollDefaults,
    },
  });
};

export const animateImage = (element) => {
  return gsap.from(element, {
    scale: 0.72,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      ...scrollDefaults,
    },
  });
};

export const animateCards = (elements) => {
  return gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: elements[0],
      ...scrollDefaults,
    },
  });
};

/* =========================
   HOVER ANIMATIONS
========================= */

export const animateImageHover = (element) => {
  const enter = () => {
    gsap.to(element, {
      scale: 1.05,
      y: -5,
      duration: 0.85,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(element, {
      scale: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
    });
  };

  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mouseenter", enter);
    element.removeEventListener("mouseleave", leave);
  };
};

export const animateCardHover = (element) => {
  const enter = () => {
    gsap.to(element, {
      y: -8,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(element, {
      y: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mouseenter", enter);
    element.removeEventListener("mouseleave", leave);
  };
};

export const animateButtonHover = (element) => {
  const enter = () => {
    gsap.to(element, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const leave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mouseenter", enter);
    element.removeEventListener("mouseleave", leave);
  };
};
