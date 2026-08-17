import Image from "next/image";
import Link from "next/link";
import heroImg from "../img/heroImg.png";

export default function Hero() {
  return (
    <section className="relative h-[860px] overflow-hidden bg-white">
      <div className="absolute top-0 right-0 h-full w-[58%]">
        <Image
          src={heroImg}
          data-hover-image
          alt="Hero"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      <div
        className="
          absolute
          -left-[220px]
          -top-[50px]
          z-10
          flex
          h-[1150px]
          w-[1150px]
          items-center
          justify-center
          rounded-full
          bg-[#F8FFF5]
        "
      >
        <div className="ml-[260px] max-w-[520px]">
          <h1 className="text-[72px] font-bold leading-[1.05] text-[#0F5D2F]">
            Free Meals delivered
            <br />
            <span className="text-[#333333]">to your doorstep!</span>
          </h1>

          <p className="mt-8 max-w-[430px] text-xl leading-9 text-[#58715D]">
            We provide healthy, balanced meals delivered to your doorstep!
          </p>

          <div className="mt-12 flex gap-6">
            <Link
              href="#how"
              data-hover-button
              className="
                rounded-full
                border-2
                border-[#0F5D2F]
                px-10
                py-5
                font-semibold
                text-[#0F5D2F]
                transition
                hover:bg-[#0F5D2F]
                hover:text-white
              "
            >
              HOW IT WORKS
            </Link>

            <Link
              href="#"
              data-hover-button
              className="
                rounded-full
                bg-[#0F5D2F]
                px-12
                py-5
                font-semibold
                text-white
                transition
                hover:bg-[#0B4724]
              "
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
