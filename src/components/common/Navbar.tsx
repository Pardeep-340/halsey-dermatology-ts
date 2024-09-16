"use client";
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Icons from "./Icons";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import BookNow from "./navbar/BookNow";
import { usePathname } from "next/navigation";
import { NAV_DROP_DOWN_ITEMS } from "./Helper";
interface DropDownItems {
  key: string;
  label: string;
  component: JSX.Element;
}
type DropdownKey = "treatments" | "skinConcerns" | "devices";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);
  const TOGGLE_MENU = () => {
    setIsOpen(!isOpen);
  };
  const TOGGLE_DROP_DOWN = (dropdown: DropdownKey) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav
      className={`${
        pathname === "/" || pathname === "/skin-concerns"
          ? "bg-laurel lg:bg-transparent relative z-20"
          : "bg-nav"
      }`}
    >
      <div className="container xl:max-w-[1188px] relative z-50">
        <div className="flex items-center justify-between h-[65px] md:h-[80px]">
          <Link href="/" className="w-[100px] lg:w-[201px]">
            <Icons icon="logo" />
          </Link>
          <div
            className="hidden lg:block"
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-baseline space-x-5 lg:space-x-[41px]">
              {NAV_DROP_DOWN_ITEMS.map(
                (value: DropDownItems, index: number) => (
                  <div key={index}>
                    <Link
                      href={`/${value.label.toLowerCase().replace(" ", "-")}`}
                      onMouseEnter={() =>
                        TOGGLE_DROP_DOWN(value.key as DropdownKey)
                      }
                      className={`text-sm lg:text-base leading-[108%] font-thin text-white opacity-75 hover:opacity-100 flex items-center ${
                        pathname.includes(
                          value.label.toLowerCase().replace(" ", "-")
                        ) && "!opacity-100"
                      }`}
                    >
                      {value.label}
                      <ChevronDownIcon
                        className={`h-5 w-5 ml-1 transition-transform ${
                          openDropdown === value.key
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </Link>
                    <div
                      onMouseEnter={() =>
                        TOGGLE_DROP_DOWN(value.key as DropdownKey)
                      }
                      className={`absolute top-14 z-10 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                        value.key === "treatments" &&
                        "!w-[962px] xl:!w-[1198px] start-0"
                      } ${
                        value.key === "skinConcerns" &&
                        "!w-[924px] start-[5%] xl:start-[19%]"
                      } ${value.key === "devices" && "w-[227px]"} ${
                        openDropdown === value.key
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {value.component}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex gap-9 items-center">
            <BookNow />
            <button
              onClick={TOGGLE_MENU}
              className="w-140 h-10 inline-flex items-center justify-center rounded-md text-white hover:scale-[1.1] duration-300 focus:outline-none lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="h-10 w-10" />
              ) : (
                <Bars3Icon className="h-10 w-10" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <HeaderMobile />
      </div>
    </nav>
  );
}

export default Navbar;
