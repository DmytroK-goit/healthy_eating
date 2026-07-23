import About from "@/component/about";
import Contact from "@/component/contact";
import Hero from "@/component/hero";
import HowItWorks from "@/component/howItWorks";
import Menu from "@/component/menu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Menu />
      <Contact />
    </>
  );
}
