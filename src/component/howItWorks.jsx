import Image from "next/image";
import { Check, UserRound, HeartHandshake } from "lucide-react";

import delyveryMan from "../img/deliveryMan.png";
import delyveryCar from "../img/delivery.png";

const questions = [
  "Are you over 65?",
  "Are you disabled or on a short-term disability?",
  "Do you need any assistance with grocery shopping and/or preparing meals?",
];
const questionsSecond = [
  "Are you on short-term disability?",
  "Are you disabled?",
  "Are you over 65?",
  "Do you have Medicare/Medicaid or ANY other health insurance that offer paid meal option?",
];

export default function HowItWorks() {
  return (
    <section>
      <div className="bg-white py-20">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <p className="mx-auto max-w-[760px] text-sm font-semibold leading-5 text-[#666]">
            We serve those in need for the long-term meal assistance or anyone
            who might be in need of a short-term plan while recovering from an
            injury or illness, or who would simply enjoy healthy meals that
            requires minimum preparation time.
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] text-3xl font-extrabold leading-tight text-[#333] md:text-[34px]">
            Answer these few questions to find out if you qualify
            <br className="hidden md:block" />
            for Home Delivered Meals by Meals America:
          </h2>

          <div className="mt-10 flex flex-col items-center gap-5">
            {questions.map((question) => (
              <div
                key={question}
                className="flex items-center gap-3 text-sm font-semibold text-[#555]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#08752E]">
                  <Check size={16} strokeWidth={3} className="text-white" />
                </span>

                <span>{question}</span>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[650px] text-sm font-semibold leading-5 text-[#555]">
            Can you say <span className="text-[#08752E]">yes</span> to any of
            these questions? If so, you might qualify for government or health
            plan assistance and have meals delivered to your door at no cost!
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex gap-6 rounded-xl bg-white p-7 text-left shadow-[0_5px_25px_rgba(0,0,0,0.06)]">
              <div className="shrink-0">
                <UserRound
                  size={48}
                  strokeWidth={1.8}
                  className="text-[#08752E]"
                />
              </div>

              <div>
                <h3 className="text-base font-bold leading-5 text-[#444]">
                  Information for Case
                  <br />
                  Managers/Coordinators
                </h3>

                <p className="mt-4 text-sm leading-5 text-[#777]">
                  If the participant qualifies for home meals delivery – submit
                  authorization for Meals Americas. We deliver within 2-3
                  business days from the day you have submitted the
                  authorization. Call us with any questions at{" "}
                  <a
                    href="tel:+17866005909"
                    className="font-bold text-[#08752E]"
                  >
                    (786) 600-59-09
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-6 rounded-xl bg-white p-7 text-left shadow-[0_5px_25px_rgba(0,0,0,0.06)]">
              <div className="shrink-0">
                <HeartHandshake
                  size={50}
                  strokeWidth={1.8}
                  className="text-[#08752E]"
                />
              </div>

              <div>
                <h3 className="text-base font-bold leading-5 text-[#444]">
                  Information for
                  <br />
                  Individuals/Caregivers
                </h3>

                <p className="mt-4 text-sm leading-5 text-[#777]">
                  If you have a health insurance plan and you may qualify for
                  home meal delivery, contact your case manager. If you or your
                  loved ones need home delivered meal but don’t qualify through
                  your insurance, please contact us at{" "}
                  <a
                    href="tel:+17866005909"
                    className="font-bold text-[#08752E]"
                  >
                    (786) 600-59-09
                  </a>{" "}
                  for the options available for private customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4FAF0]">
        <div className="mx-auto grid max-w-[1200px] items-center lg:grid-cols-2">
          {/* Text */}
          <div className="px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-4xl font-extrabold text-[#333] md:text-5xl">
              Who We Serve
            </h2>

            <p className="mt-5 max-w-[570px] text-sm font-bold leading-5 text-[#555]">
              We serve those in need for the long-term meal assistance or anyone
              who might be in need of a short-term plan while recovering from an
              injury or illness, or who would simply enjoy healthy meals that
              requires minimum preparation time.
            </p>

            <p className="mt-6 max-w-[570px] text-[15px] leading-6 text-[#666]">
              Meals America is proud to serve and deliver healthy, nutritious
              meals to your door. All our meals comply with Floridian state
              requirements. Your first delivery will be at your door within 2-3
              business days from the day we receive the authorization. Please,
              let us know your preferences, and we will be happy to modify the
              menu or customize it to your preference! Please, consider our
              delicious meals a complete nutrition solution. We are delighted to
              serve you and your satisfaction is our priority!
            </p>
          </div>

          <div className="relative flex h-full min-h-[420px] items-end justify-center overflow-hidden">
            <Image
              src={delyveryMan}
              alt="Meals America delivery service"
              className="w-[600px] max-w-none"
              priority
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Eligibility</h3>
        <p>
          Find out if you are eligible to have Meals America deliver meals to
          you each week at NO COST for you!
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          {questionsSecond.map((question) => (
            <div
              key={question}
              className="flex items-center gap-3 text-sm font-semibold text-[#555]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#08752E]">
                <Check size={16} strokeWidth={3} className="text-white" />
              </span>

              <span>{question}</span>
            </div>
          ))}
        </div>
        <p>
          If you answered “Yes” to any of these questions, you may qualify for
          Meals America weekly meal delivery plan at NO COST for you! If you
          have any questions call about your eligibility us (786) 600-59-09, use
          our LIVE chat box, or fill out the form below and someone will reach
          back to you over e-mail within 2 business days.
        </p>
        <h3>Aging Waiver</h3>
        <p>
          We serve those in need for long-term meal assistance or anyone who
          might be in need of a short-term plan while recovering from an injury
          or illness, or who would simply enjoy healthy meals that require
          minimal preparation time.
        </p>
        <p>
          Aging Home and Community-Based Waiver Services may be available to any
          Florida over 65 to enable them to live in their homes and communities
          with additional support and services. Meals America is happy to
          provide extra information about the waiver and who’s eligible. If you
          have any questions reach our customer care representative at (786)
          600-59-09, use our LIVE chat box, or fill out the form below and
          someone will reach back to you over e-mail within 2 business days. We
          will happily assist you with any questions you have.
        </p>
      </div>
    </section>
  );
}
