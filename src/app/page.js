import About from "@/component/about";
import ChooseYourNutr from "@/component/chooseYourNutr";
import Contact from "@/component/contact";
import Delivery from "@/component/delivery";
import Hero from "@/component/hero";
import HowItWorks from "@/component/howItWorks";
import Menu from "@/component/menu";
import WhyUs from "@/component/whyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <ChooseYourNutr />

      <Delivery />
    </>
  );
}
