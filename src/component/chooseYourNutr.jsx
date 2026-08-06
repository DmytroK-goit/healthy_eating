import Image from "next/image";

import vegetable from "../img/choose/greens.png";
import menuImg from "../img/choose/menu.png";
import gourmet from "../img/choose/gourmet.png";
import comfort from "../img/choose/comfort.png";
import deli from "../img/choose/deli.png";
import international from "../img/choose/international.png";
import family from "../img/choose/family.png";
import homestyle from "../img/choose/homestyle.png";
import banner from "../img/choose/banner.png";
import { yellowtail } from "./whyUs";
import Link from "next/link";

const plans = [
  { icon: gourmet, title: "Gourmet" },
  { icon: comfort, title: "Comfort" },
  { icon: deli, title: "Deli" },
  { icon: international, title: "International" },
  { icon: family, title: "Family" },
  { icon: homestyle, title: "Homestyle" },
];

export default function ChooseYourNutr() {
  return (
    <section className="py-24">
      <div className="relative rounded-t-[180px] bg-[#084a1f] px-6 py-20 lg:px-20 max-h-[50%] z-1">
        <Image
          src={vegetable}
          alt=""
          className="absolute right-0 -top-20 w-60"
        />

        <div className="mb-14 text-center">
          <p
            className={`${yellowtail.className} font-script text-5xl text-[#B8D58A]`}
          >
            Nutrition plans
          </p>

          <h2 className="mt-2 text-5xl font-bold text-white">
            Choose Your Nutrition
          </h2>
        </div>

        <div className="mx-auto max-w-6xl rounded-[32px] bg-[#F8FBF5] p-8">
          <div className="grid grid-cols-6 border-b pb-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="flex flex-col items-center justify-center gap-3 border-r last:border-r-0"
              >
                <Image src={plan.icon} alt={plan.title} className="h-10 w-10" />

                <span className="text-sm font-semibold text-[#1B5E20]">
                  {plan.title}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <Image src={menuImg} alt="Menu" className="w-full rounded-3xl" />

            <div>
              <h3 className="mb-5 text-2xl font-bold text-[#333]">
                Meals includes:
              </h3>

              <ul className="space-y-3 text-[#777]">
                <li>• Loaf of Bread</li>
                <li>• Sticks of Butter</li>
                <li>• Quart of Juice</li>
                <li>• Half Gallon of 2% Milk</li>
                <li>• Box of Cereal or Oat Meal</li>
                <li>• Package of Cheese Sticks</li>
                <li>• Pack of Fruits Cups</li>
                <li>• Complimentary Dessert</li>
              </ul>

              <div className="mt-10 flex gap-5">
                <Link
                  href="/menu.xlsx"
                  download
                  className="inline-flex rounded-full border border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                >
                  DOWNLOAD MENU
                </Link>

                <button className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[566px] overflow-hidden ">
        <Image
          src={banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
          <h2 className="max-w-[600px] text-center text-5xl font-bold text-white">
            Schedule your first <span className="text-[#39C23F]">weekly</span>{" "}
            delivery
          </h2>

          <Link
            href="/"
            className="mt-8 rounded-full bg-[#39C23F] px-10 py-4 font-semibold text-white transition hover:bg-[#2faa36]"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </section>
  );
}
