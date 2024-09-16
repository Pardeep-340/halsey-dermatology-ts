"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { EMAIL_REGEX } from "@/utils/Regex";
import Cta from "./Cta";
import CustomInput from "./CustomInput";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/utils/Helper";
import Icons from "./Icons";
import { toast } from "react-toastify";
interface FooterLink {
  title: string;
  links: {
    linkName: string;
    href?: string;
  }[];
}
interface SocialLink {
  icon: string;
  href: string;
}

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const HANDLE_EMAIL_CHANGE = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const HANDLE_SUBMIT = (event: FormEvent) => {
    event.preventDefault();
    if (EMAIL_REGEX.test(email)) {
      setIsValid(true);
      toast.success("E-Mail is submitted successfully");
      setEmail("");
    } else {
      setIsValid(false);
    }
  };
  const year = new Date().getFullYear();

  return (
    <div className="lg:pt-20 sm:pt-14 pt-12 bg-white-rock relative">
      <Image
        className="absolute right-0 bottom-0 opacity-30 lg:w-[302px] lg:h-[250px] pointer-events-none"
        src="/assets/images/homepage/png/footer-leaf.png"
        alt="leaf"
        height={200}
        width={150}
      />
      <div className="xl:max-w-[1188px] container">
        <div className="flex justify-between md:gap-10 gap-6 sm:mb-10 mb-5 lg:flex-row flex-col">
          <div className="max-w-[267px] w-full">
            <Link href="/" className="mb-12">
              <Image
                className="sm:w-auto w-[200px]"
                src="/assets/images/homepage/svg/logo.svg"
                alt="logo"
                width={267}
                height={40}
              />
            </Link>
            <div className="flex flex-col items-start lg:mt-12 md:mt-10 mt-6">
              <span className="font-normal text-base leading-150 text-holly text-opacity-70 mb-0 relative after:absolute after:w-full after:inline after:bg-holly after:bg-opacity-70 after:left-0 after:bottom-[3px] after:h-[1px]">
                3350 Noyac Rd
              </span>
              <span className="font-normal text-base leading-150 text-holly text-opacity-70 mb-0 relative after:absolute after:w-full after:inline after:bg-holly after:bg-opacity-70 after:left-0 after:bottom-[3px] after:h-[1px]">
                Sag Harbor, NY 11963
              </span>
              <span className="font-normal text-base leading-150 text-holly text-opacity-70 mt-4 mb-0 ">
                631.731.1099
              </span>
            </div>
          </div>
          <div className="lg:max-w-[666px] w-full flex justify-between gap-5 flex-wrap">
            {FOOTER_LINKS.map((obj: FooterLink, index: number) => {
              return (
                <ul key={index} className="m-0 p-0 flex flex-col gap-3.5">
                  <li>
                    <p className="font-semibold text-base leading-150 text-holly uppercase">
                      {obj.title}
                    </p>
                  </li>
                  {obj.links.map((link, index: number) => {
                    return (
                      <li key={index}>
                        <Link
                          href={link.linkName
                            .toLowerCase()
                            .split(" ")
                            .join("-")
                            .replace(",", " ")
                            .replace("home", " / ")}
                          className="font-normal text-base leading-150 text-holly text-opacity-70 text-nowrap hover:text-opacity-100 common-transition hover:text-laurel "
                        >
                          {link.linkName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
            <div className="flex flex-col gap-[35px]">
              <ul className="m-0 p-0 flex flex-col gap-[18px]">
                <li>
                  <p className="font-semibold text-base leading-108.8 text-holly uppercase">
                    Get in Touch
                  </p>
                </li>
                <li>
                  <form className="flex relative" onSubmit={HANDLE_SUBMIT}>
                    <CustomInput
                      type="email"
                      placeholder="Type your Email"
                      value={email}
                      name="email"
                      id=""
                      onChangeData={HANDLE_EMAIL_CHANGE}
                      className="!py-[7.2px] !bg-moon-mist placeholder:font-normal placeholder:text-base placeholder:leading-108.8 placeholder:text-holly !border-none sm:max-w-[208px] max-w-[150px] w-full !text-black !h-10"
                    />
                    <Cta type="submit" className="!px-6 !py-[7px] md:!text-base !text-sm">
                      submit
                    </Cta>
                    {!isValid && (
                      <p className="text-red-500 text-sm absolute -bottom-6 left-0">
                        Invalid email address
                      </p>
                    )}
                  </form>
                </li>
              </ul>
              <ul className="m-0 p-0 flex flex-col gap-[15px]">
                <li>
                  <p className="font-semibold text-base leading-108.8 text-holly uppercase">
                    Let’s Connect
                  </p>
                </li>
                <li className="flex gap-2">
                  {SOCIAL_LINKS.map((obj: SocialLink, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={obj.href}
                        target="_blank"
                        className="w-[30px] h-[30px] rounded-full bg-laurel flex items-center justify-center hover:scale-105 common-transition"
                      >
                        <Icons icon={obj.icon} />
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[1px] bg-opacity-15"></div>
      <div className="pt-[23px] pb-[22px]">
        <p className="font-normal text-sm leading-108.8 text-holly mb-0 text-center">
          Content © {year} Sagaponack Medical PC dba Halsey Dermatology
        </p>
      </div>
    </div>
  );
};

export default Footer;
