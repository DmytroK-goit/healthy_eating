import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

import logo from "../img/logo.png";
import veget from "../img/vegetable.png";

export default function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="relative overflow-hidden bg-[#F8FAF4]">
        <div className="mx-auto flex max-w-[1440px] justify-between gap-20 px-8 py-16 xl:px-20">
          <div className="max-w-[330px]">
            <Link href="/">
              <Image src={logo} alt="Meals America" width={250} priority />
            </Link>

            <p className="mt-6 text-sm leading-7 text-[#667085]">
              All rights reserved.{" "}
              <Link
                href="https://mealsamericafl.com/"
                target="_blank"
                className="text-[#2D7D46] underline"
              >
                MealsAmericaFL.com
              </Link>{" "}
              is based in Florida and provides home-delivered meals to consumers
              across all sixty-seven counties in Florida.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact info</h3>

            <div className="space-y-5 text-[#404040]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#2D7D46]" />

                <p>
                  1733 Benbow Ct,
                  <br />
                  Ste 3, Apopka, FL, 32703
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#2D7D46]" />

                <a href="tel:7866005909">(786) 600-59-09</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#2D7D46]" />

                <a href="mailto:Support@MealsAmericaFL.com">
                  Support@MealsAmericaFL.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold">Links</h3>

            <ul className="space-y-4">
              <li>
                <Link href="#about">About Us</Link>
              </li>

              <li>
                <Link href="#works">How it works</Link>
              </li>

              <li>
                <Link href="#menu">Our menu</Link>
              </li>

              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={veget}
          alt="Vegetable"
          width={240}
          className="absolute bottom-0 right-0"
        />
      </div>

      <div className="bg-[#1F5E18]">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center px-8 text-sm text-white xl:px-20">
          © All rights reserved{" "}
          <Link
            href="https://mealsamericafl.com/"
            className="ml-1 underline"
            target="_blank"
          >
            MealsAmericaFL.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
