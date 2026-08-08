import Image from "next/image";
import Link from "next/link";
import { Clock3, Phone } from "lucide-react";

import delivery from "../img/delivery.png";
import { yellowtail } from "./whyUs";

export default function Delivery() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 rounded-[40px] bg-[#F8FCF3] p-10 lg:grid-cols-2 lg:p-16">
          <div className="max-w-[480px]">
            <div className="mb-3 flex items-center gap-3">
              <span
                className={`${yellowtail.className} text-[30px] text-[#2E7D32]`}
              >
                Who We Serve?
              </span>
              <span className="h-[2px] w-14 bg-[#2E7D32]" />
            </div>

            <h2 className="mb-6 text-5xl font-bold text-[#333]">
              Who We Serve?
            </h2>

            <p className="mb-8 leading-8 text-[#777]">
              We serve those in need for long-term meal assistance or anyone who
              might be in need of a short-term plan while recovering from an
              injury or illness, or who would simply enjoy healthy meals that
              require minimal preparation time.
            </p>

            <div className="mb-10 flex flex-col gap-6 md:flex-row">
              <div className="flex items-start gap-3">
                <Clock3 size={24} className="mt-1 text-[#0C6A2B]" />

                <div>
                  <p className="font-semibold text-[#333]">Monday - Friday</p>
                  <p className="text-[#666]">9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={24} className="mt-1 text-[#0C6A2B]" />

                <div>
                  <p className="font-semibold text-[#333]">(786) 600-59-09</p>
                </div>
              </div>
            </div>

            <Link
              href="/howitworks"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#0C6A2B] px-10 font-semibold text-[#0C6A2B] transition hover:bg-[#0C6A2B] hover:text-white"
            >
              Read more
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={delivery}
              alt="Meals America Delivery"
              className="h-auto w-full max-w-[700px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
