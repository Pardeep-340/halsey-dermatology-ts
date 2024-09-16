type SubHeading = {
  children: React.ReactNode;
  className?: string;
};
const SubHeading = ({ children, className }: SubHeading) => {
  return (
    <h3
      className={`${className} font-semibold xl:text-5xl md:text-4xl text-3xl text-holly`}
    >
      {children}
    </h3>
  );
}

export default SubHeading