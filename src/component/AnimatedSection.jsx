"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  animateSection,
  animateHeading,
  animateParagraphs,
  animateImage,
  animateCards,
  animateImageHover,
  animateCardHover,
  animateButtonHover,
} from "@/lib/animations";

export default function AnimatedSection({ children, className = "" }) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // Section
      animateSection(section);

      // Headings
      const headings = section.querySelectorAll("h1, h2, h3");

      headings.forEach((heading) => {
        animateHeading(heading);
      });

      // Paragraphs
      const paragraphs = section.querySelectorAll("p");

      if (paragraphs.length) {
        animateParagraphs(paragraphs);
      }

      // Images
      const images = section.querySelectorAll("img");

      images.forEach((image) => {
        animateImage(image);
      });

      // Image hover
      const hoverImages = section.querySelectorAll("[data-hover-image]");

      hoverImages.forEach((image) => {
        animateImageHover(image);
      });

      // Cards
      const cards = section.querySelectorAll("[data-card]");

      if (cards.length) {
        animateCards(cards);

        cards.forEach((card) => {
          animateCardHover(card);
        });
      }

      const buttons = section.querySelectorAll("[data-hover-button]");

      buttons.forEach((button) => {
        animateButtonHover(button);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
