import Image from "next/image";
import flag from "../img/about/flag.png";
import manager from "../img/about/manager.png";
import health from "../img/about/health.png";
import Link from "next/link";
import green from "../img/about/green.png";
import dish from "../img/about/dish.png";

export default function About() {
  const cards = [
    {
      title: "AAA & State Governments",
      text: "Information for leaders in government or at Area Agencies on Aging.",
      icon: flag,
    },
    {
      title: "Case Managers",
      text: "Information for case managers who are looking for solutions for their clients or members.",
      icon: manager,
    },
    {
      title: "Individuals & Caregivers",
      text: "For self-pay customers managing a chronic disease, living independently, or caring.",
      icon: health,
    },
  ];
  return (
    <section className="bg-white mt-[40px]">
      <ul className="mx-auto grid max-w-[1340px] grid-cols-3 gap-6">
        {cards.map((card) => (
          <li
            key={card.title}
            className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
          >
            <div className="flex items-center gap-6">
              <Image
                src={card.icon}
                alt={card.alt}
                width={50}
                height={50}
                className="shrink-0"
              />

              <div>
                <h3 className="text-2xl font-bold text-[#323232]">
                  {card.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#6B6B6B]">
                  {card.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="container mx-auto px-4 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative max-w-xl">
            <Image
              src={green}
              data-hover-image
              alt="Green leaves"
              className="absolute -top-6 -left-6 w-20 lg:w-auto"
            />

            <h2 className="mb-6 text-4xl font-bold text-[#333] lg:text-6xl">
              About Us
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[#6C6C6C]">
              <p>
                Meals America provides home-delivered meals to consumers across
                all 67 counties in Florida. We offer a wide variety of frozen,
                refrigerated, and shelf-stable meals including dinners, deli
                café, breakfasts, soups, and specialty weeks.
              </p>

              <p>
                We also provide options for customers with dietary restrictions
                and have vegetarian, sodium-controlled, and gluten-free menus.
                We also provide emergency packs for emergency situations that
                contain shelf stable items only and do not require refrigeration
                or heating.
              </p>
            </div>

            <Link
              href="/"
              data-hover-button
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full border border-[#0F7A41] px-10 font-semibold text-[#0F7A41] transition hover:bg-[#0F7A41] hover:text-white"
            >
              Read More
            </Link>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={dish}
              data-hover-image
              alt="Healthy meal"
              className="h-auto w-full max-w-[820px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
