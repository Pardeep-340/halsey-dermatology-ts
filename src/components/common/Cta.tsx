"use client";
import Link from "next/link";
type NextLinkButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  header?: boolean;
  black?: boolean;
  white?: boolean;
  target?: "_blank" | "_self" | "none";
  onClick?: () => void;
};

const Cta = ({
  children,
  className = "",
  href,
  type,
  header,
  black,
  white,
  target,
  onClick,
  ...rest
}: NextLinkButtonProps) => {
  const ctaClass =
    "uppercase pb-[11.4px] pt-[11.6px] md:py-[14.5px] px-5 md:px-[25px] md:text-lg border border-transparent hover:border-laurel common-transition hover:text-laurel hover:shadow-white !leading-110 font-medium  bg-laurel text-white text-sm";
  const HANDLE_BUTTON = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <>
      {href ? (
        <Link {...rest} target={target} href={href} className={ctaClass}>
          {children}
        </Link>
      ) : (
        <button
          {...rest}
          onClick={HANDLE_BUTTON}
          type={`${type ? type : "button"}`}
          className={`${ctaClass} ${className} `}
        >
          {children}
        </button>
      )}
    </>
  );
};
export default Cta;
