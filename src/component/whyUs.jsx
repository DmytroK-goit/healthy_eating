import Image from "next/image";

import dishFirst from "../img/whyUs/dish_first.png";
import dishSec from "../img/whyUs/dish_sec.png";
import greenLeaves from "../img/whyUs/green_leaves.png";

import Hamburger from "../img/whyUs/Hamburger.png";
import spoon from "../img/whyUs/spoon.png";
import truck from "../img/whyUs/Truck.png";
import cook from "../img/whyUs/cook.png";
import { Yellowtail } from "next/font/google";

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
});

const benefits = [
  {
    icon: Hamburger,
    title: "Delicious & Healthy",
  },
  {
    icon: spoon,
    title: "Ready to heat",
  },
  {
    icon: truck,
    title: "Delivery",
  },
  {
    icon: cook,
    title: "Taste and preferences",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative flex justify-center">
            <Image
              src={greenLeaves}
              alt=""
              className="absolute -top-22 left-3/4 -translate-x-3/4"
            />

            <div className="relative h-[520px] w-full max-w-[540px]">
              <Image
                src={dishFirst}
                alt="Healthy food"
                className="absolute left-0 top-0 w-[320px] rounded-lg"
              />

              <Image
                src={dishSec}
                alt="Meal"
                className="absolute bottom-0 right-0 w-[320px] rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="max-w-[520px]">
            <span
              className={`${yellowtail.className} mb-2 flex items-center gap-3 text-[32px] text-[#2E7D32]`}
            >
              Our benefits
              <span className="h-[2px] w-14 bg-[#2E7D32]" />
            </span>

            <h2 className="mb-6 text-5xl font-bold text-[#333]">
              Why choose us?
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-500">
              We are proud to provide a healthy and nutritious meal for those in
              need! We listen to your preferences and customize the weekly menu
              considering your requests! Your health is our priority!
            </p>

            <div className="space-y-5">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-md bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center border-l-4 border-green-600 pr-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <span className="font-semibold text-gray-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
