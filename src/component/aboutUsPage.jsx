import Image from "next/image";

import dish from "../img/aboutPage/dish.png";
import brocoly from "../img/aboutPage/brocoly.png";
import leavs from "../img/aboutPage/leavs.png";
import AnimatedSection from "./AnimatedSection";

export default function AboutUsPage() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-white py-20 lg:min-h-[620px]">
      <Image
        src={leavs}
        data-hover-image
        alt=""
        className="absolute left-[27%] top-10 z-0 w-[90px] lg:left-[28%] lg:w-[110px]"
      />

      <Image
        src={dish}
        data-hover-image
        alt="Healthy meal from Meals America"
        className="absolute -right-20 top-14 z-0 w-[280px] md:w-[350px] lg:-right-24 lg:top-24 "
      />

      <Image
        src={brocoly}
        data-hover-image
        alt=""
        className="absolute -bottom-10 -left-10 z-0 w-[140px] md:w-[180px] lg:-bottom-16 lg:-left-5 lg:w-[220px]"
      />

      <div className="relative z-10 mx-auto max-w-[650px] px-6 text-center lg:max-w-[700px]">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-[#333] md:text-5xl">
          Welcome to Meals America!
        </h1>

        <div className="space-y-6 text-[14px] leading-[1.7] text-[#777] md:text-[15px]">
          <p>
            Meals America is a local business located in Orange County, FL. We
            deliver nutritious and healthy meals to eligible seniors every week
            in all 67 counties in Florida. We proudly serve anyone on long-term
            care (assisting elderly to age at home), chronic care, injury,
            short-term disability, post-discharge care. We provide meals to
            eligible with Medicare/Medicaid, and other managed care
            organizations in FL.
          </p>

          <p>
            Our meals are for anyone who is unable to cook and prepare meals for
            themselves, or simply individuals and caregivers who would love to
            enjoy a fresh and easy meal. Our priority is our customer’s health.
            We care about each preference and dietary needs; therefore, we
            provide a variety of meal options and have options for low-sodium,
            gluten-free, Kosher, and vegetarian meals, allowing each customer to
            customize their meal plan to their preference.
          </p>

          <p>
            Meals America delivers ready-to-go meals that require NO preparation
            and only need to be heated so that our customers can enjoy healthy
            meals in minutes that taste like homemade meal they’d cook for
            themselves!
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
