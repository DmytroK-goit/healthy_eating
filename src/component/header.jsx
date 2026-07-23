import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-8 xl:px-20">
        <Link href="/">
          <Image
            src={logo}
            alt="Meals America"
            width={295}
            height={68}
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-12">
            <li>
              <Link
                href="#about"
                className="text-[15px] font-medium text-[#2B2B2B] transition hover:text-[#2D7D46]"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="#how"
                className="flex items-center gap-1 text-[15px] font-medium text-[#2B2B2B] transition hover:text-[#2D7D46]"
              >
                How It Works
              </Link>
            </li>

            <li>
              <Link
                href="#menu"
                className="text-[15px] font-medium text-[#2B2B2B] transition hover:text-[#2D7D46]"
              >
                Menu
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="text-[15px] font-medium text-[#2B2B2B] transition hover:text-[#2D7D46]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="#"
          className="rounded-full bg-[#166534] px-9 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#14532D]"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
