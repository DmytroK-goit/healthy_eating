import Image from "next/image";
import flag from "../img/about/flag.png";
import manager from "../img/about/manager.png";
import health from "../img/about/health.png";

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

      <p>About</p>
    </section>
  );
}
