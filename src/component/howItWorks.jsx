import Image from "next/image";
import { Check, UserRound, HeartHandshake } from "lucide-react";

import delyveryMan from "../img/deliveryMan.png";
import delivery from "../img/delivery.png";
import { yellowtail } from "./whyUs";
import AnimatedSection from "./AnimatedSection";

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
const eligibilityRequirements = [
  "Be a resident of Florida",
  "Be a U.S. citizen or a qualified non-citizen",
  "Have a Social Security Number",
  "Be 65 years of age or older",
  "Meet the level of care needs for a Skilled Nursing Facility",
  "Meet the financial requirements by the local county assistance office",
];

const waiverServicesLeft = [
  "Accessibility Adaptations, Equipment, Technology and Medical Supplies",
  "Adult Daily Living Services",
  "Assistive Technology",
  "Community Transition Services",
  "Home Adaptations",
  "Home Delivered Meals",
  "Home Health Services",
  "Non-Medical Transportation Services",
  "Nutritional Consultation Services",
  "Nursing Services",
];

const waiverServicesRight = [
  "Participant-Directed Community Supports",
  "Participant-Directed Goods and Services",
  "Personal Assistance Services",
  "Personal Emergency Response System (PERS)",
  "Physical Therapy Services",
  "Respite",
  "Service Coordination",
  "Specialized Medical Equipment and Supplies",
  "Speech and Language Therapy Services",
  "TeleCare",
  "Therapeutic and Counseling Services",
];

export default function HowItWorks() {
  return (
    <AnimatedSection>
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
              data-hover-image
              alt="Meals America delivery service"
              className="w-[600px] max-w-none"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-5 mt-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#333] md:text-5xl">
            Aging Waiver
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-sm font-semibold leading-5 text-[#777] md:text-base">
            We serve those in need for long-term meal assistance or anyone who
            might be in need of a short-term plan while recovering from an
            injury or illness, or who would simply enjoy healthy meals that
            require minimal preparation time.
          </p>

          <p className="mx-auto mt-6 max-w-[900px] text-sm leading-5 text-[#777] md:text-base">
            Aging Home and Community-Based Waiver Services may be available to
            any Florida over 65 to enable them to live in their homes and
            communities with additional support and services.
          </p>

          <p className="mx-auto mt-6 max-w-[900px] text-sm leading-5 text-[#777] md:text-base">
            Meals America is happy to provide extra information about the waiver
            and who&apos;s eligible. If you have any questions reach our
            customer care representative at{" "}
            <a href="tel:+17866005909" className="font-bold text-[#08752E]">
              (786) 600-59-09
            </a>
            , use our LIVE chat box, or fill out the form below and someone will
            reach back to you over e-mail within 2 business days. We will
            happily assist you with any questions you have.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[750px] text-center">
          <h3 className="text-base font-bold text-[#444] md:text-lg">
            Aging Waiver eligibility requirements:
          </h3>

          <ul className="mt-4 space-y-1 text-sm leading-5 text-[#777] md:text-base">
            {eligibilityRequirements.map((item) => (
              <li key={item} className="relative">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-base font-bold text-[#444] md:text-lg">
            Services that Aging Waiver may be available to include:
          </h3>

          <div className="mt-5 grid gap-x-12 md:grid-cols-2">
            <ul className="space-y-1 text-sm leading-5 text-[#777] md:text-base">
              {waiverServicesLeft.map((item) => (
                <li key={item} className="text-center md:text-right">
                  • {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-1 text-sm leading-5 text-[#777] md:text-left">
              {waiverServicesRight.map((item) => (
                <li key={item} className="text-center md:text-left">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[750px] text-center text-sm font-semibold leading-5 text-[#555] md:text-base">
          If you have any questions, contact our Professional and qualified team
          of health care experts at{" "}
          <a href="tel:+17866005909" className="font-bold text-[#08752E]">
            (786) 600-59-09
          </a>{" "}
          to help you determine if you qualify for the FL Aging Waiver.
        </p>

        <div className="max-w-[1920px]">
          <div className="mx-auto grid max-w-[1200px] items-center lg:grid-cols-2">
            <div className="px-6 py-16 lg:px-10 lg:py-20">
              <div className="flex items-center gap-3">
                <span
                  className={`${yellowtail.className} font-script text-2xl text-[#08752E]`}
                >
                  Who We Serve?
                </span>

                <span className="h-[2px] w-14 bg-[#08752E]" />
              </div>

              <h2 className="mt-2 text-4xl font-extrabold text-[#333] md:text-5xl">
                Why us?
              </h2>

              <p className="mt-6 max-w-[570px] text-sm leading-5 text-[#777] md:text-[15px]">
                Meals America is determined to provide good meals for those in
                need and attempt to address the needs of the participants at
                home on long-term care, post-discharge and those with chronic
                conditions. We try to help all participants to remain
                independent and provide the best meal plans and a large menu
                with many options to choose from to fit any dietary need.
              </p>

              <p className="mt-4 max-w-[570px] text-sm leading-5 text-[#777] md:text-[15px]">
                We have a variety of options from vegetarian to kosher,
                low-sodium, gluten-free, and many more. Our meals help those
                with health issues or injuries to make proper meals easily and
                safe. We deliver straight to their doorstep each week.
              </p>

              <p className="mt-4 max-w-[570px] text-sm leading-5 text-[#777] md:text-[15px]">
                The meals get warmed up in the microwave and are ready to be
                served and enjoyed in minutes! Please note that all referrals
                submitted by case managers and coordinators by 5:00 PM EST by
                Friday will be delivered the following week.
              </p>
            </div>

            <div className="relative flex h-full min-h-[520px] items-center justify-center ">
              <Image
                src={delivery}
                data-hover-image
                alt="Meals America home delivery"
                className="w-[600px] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
