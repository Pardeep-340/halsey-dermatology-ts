type GreenHeading = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const GreenHeading = ({ children, className, color }: GreenHeading) => {
  const isTextCenter = className?.includes("justify-center");

  return (
    <h2
      className={`${className} font-normal xl:text-custom-3xl md:text-3xl text-xl !leading-145 !font-kaushanScript flex items-center sm:gap-4 gap-2 text-${color}`}
    >
      <span
        className={`sm:w-[62px] w-10 h-[2px] block ${isTextCenter ? "" : "hidden"
          } bg-${color}`}
      ></span>
      {children}
      <span className={`sm:w-[62px] w-9 h-0.5 block bg-${color}`}></span>
    </h2>
  );
};

export default GreenHeading;
