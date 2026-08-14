import Image from "next/image";

import logo from "../img/logo.png";
import dishBottom from "../img/aboutPage/dish.png";
import spoon from "../img/menu/spoon.png";
import cook from "../img/menu/cook.png";
import {
  breakfast,
  comfort,
  deli,
  family,
  glutenFree,
  gourmet,
  homestyle,
  international,
  salads,
  vegetarian,
} from "@/db/menu";

function MenuItem({ item }) {
  return (
    <div className="flex gap-2">
      <div className="min-w-0 flex-1">
        <h3 className="text-[10px] font-extrabold leading-[1.15] text-[#399447] md:text-[11px]">
          {item.name}
        </h3>

        <p className="mt-1 text-[8px] leading-[1.25] text-[#777]">
          {item.description}
        </p>
      </div>

      <div className="w-[38px] shrink-0 text-[8px] leading-3 text-[#777]">
        <p>{item.calories}</p>
        <p>cal</p>
        <p>{item.weight}</p>
      </div>
    </div>
  );
}

function MenuSection({ title, items }) {
  return (
    <div>
      <h2 className="mb-4 text-center text-[15px] font-extrabold text-[#ed4334]">
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1100px] overflow-hidden bg-[#f8faf8]">
        <div className="relative px-6 pb-8 pt-6 md:px-20">
          <div className="mx-auto max-w-[300px] text-center">
            <Image
              src={logo}
              alt="Meals America"
              width={150}
              height={120}
              className="mx-auto"
            />

            <h1 className="text-2xl font-extrabold text-[#e53226]">
              Meals America
            </h1>

            <p className="text-sm font-bold text-[#378b45]">
              Free Meals For Eligible Adults
            </p>
          </div>

          {/* <div className="absolute left-[-35px] top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
            <p className="whitespace-nowrap text-[34px] font-extrabold tracking-wide text-[#998b87]">
              HOME-DELIVERED FROZEN MEALS
            </p>
          </div> */}

          <div className="absolute right-[-20px] top-1/2 hidden -translate-y-1/2 rotate-90 md:block">
            <p className="whitespace-nowrap text-[13px] font-bold text-[#998b87]">
              MealsAmericaFL.com
            </p>
          </div>
        </div>

        <div className="grid gap-10 px-6 pb-16 md:grid-cols-3 md:px-[115px]">
          <div className="space-y-10">
            <MenuSection title="Week 1 Gourmet" items={gourmet} />

            <MenuSection title="Week 2 Comfort" items={comfort} />

            <MenuSection title="Week 5 Family" items={family} />

            <MenuSection title="Week 6 Homestyle" items={homestyle} />
          </div>

          <div className="space-y-10">
            <MenuSection title="Week 3 Deli" items={deli} />

            <MenuSection title="Week 4 International" items={international} />

            <MenuSection title="Breakfast" items={breakfast} />

            <MenuSection title="Salads" items={salads} />
          </div>

          <div className="space-y-10">
            <MenuSection title="Vegetarian" items={vegetarian} />

            <MenuSection title="Gluten-Free" items={glutenFree} />
          </div>
        </div>
        {/* 
        <div className="relative h-[180px] overflow-hidden">
          <Image
            src={dishBottom}
            alt=""
            className="absolute bottom-[-100px] left-1/2 w-[280px] -translate-x-1/2"
          />
        </div> */}
      </div>
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[950px] px-5 text-center">
          <h2 className="text-2xl font-extrabold uppercase text-[#333] md:text-3xl">
            Heating Instructions:
          </h2>

          <p className="mt-4 text-xs text-[#666] md:text-sm">
            Food must be cooked thoroughly to 165°F. Appliances vary, adjust
            cooking times as needed.
          </p>

          <div className="mx-auto mt-8 grid max-w-[850px] gap-5 md:grid-cols-2">
            <div className="flex min-h-[115px] items-center gap-5 rounded-lg bg-white px-6 py-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <Image
                src={spoon}
                alt="Microwave oven instructions"
                className="h-[42px] w-[42px] shrink-0 object-contain"
              />

              <div>
                <h3 className="text-sm font-bold text-[#333]">
                  Microwave Oven
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#777] md:text-xs">
                  Recipes delivered with 1000-watt microwave oven; heat for
                  4-minutes on full power. Stir and heat an additional 1-2
                  minutes. Let stand for about 1 minute.
                </p>
              </div>
            </div>

            <div className="flex min-h-[115px] items-center gap-5 rounded-lg bg-white px-6 py-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <Image
                src={cook}
                alt="Conventional oven instructions"
                className="h-[42px] w-[42px] shrink-0 object-contain"
              />

              <div>
                <h3 className="text-sm font-bold text-[#333]">
                  Conventional Oven
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-[#777] md:text-xs">
                  Preheat Oven to 350°F. Cook on baking sheet in center of oven
                  35-40 minutes. Let stand for about 1 minute.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-7 text-xs font-semibold text-[#555] md:text-sm">
            Occasionally, any meal delivered may be substituted without notice
            based on product availability.
          </p>
        </div>
      </section>
    </section>
  );
}
