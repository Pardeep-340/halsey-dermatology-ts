type CardTitle = {
    children: React.ReactNode;
    className?: string;
  };
  const CardTitle = ({ children, className }: CardTitle) => {
    return (
        <p className={`${className} text-xl md:text-2xl text-center mt-2 sm:mt-3 md:mt-4 !leading-130 font-semibold text-holly`}>
          {children}
        </p>
    )
  }

export default CardTitle