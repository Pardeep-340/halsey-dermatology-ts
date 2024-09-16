import Icons from "@/components/homepage/common/Icons";
import Paragraph from "../Paragraph";
import { BOOK_NOW_LIST } from "@/utils/Helper";
interface Book {
  icon: string;
  title: string;
  description: string;
}

const NavBookNow = () => {
  return (
    <div className="max-w-[824px] md:p-2 lg:py-6 lg:px-7 flex md:flex-row flex-col mx-auto lg:gap-8 md:gap-5 gap-5 w-full">
      {BOOK_NOW_LIST.map((obj: Book, index: number) => (
        <div
          key={index}
          className={`lg:max-w-[212px] w-full lg:pr-8 pr-6 relative group ${index === 2 && "lg:!max-w-[231px] !pr-0"
            }`}
        >
          <div className="w-full flex md:flex-col flex-row md:items-center md:justify-center sm:gap-8 md:gap-0 gap-4">
            <div>
              <span className="sm:size-[58px] group-hover:scale-110 common-transition size-12 flex items-center justify-center bg-laurel rounded-full md:mb-6">
                <Icons icon={obj.icon} />
              </span>
            </div>
            <div className="flex flex-col md:items-center md:justify-center md:gap-1 gap-0.5">
              <p className="sm:text-xl text-lg !leading-130 text-laurel md:text-center font-semibold uppercase">
                {obj.title}
              </p>
              <Paragraph className="md:text-center">
                {obj.description}
              </Paragraph>
            </div>
          </div>
          <div
            className={`bg-black-border md:block hidden absolute top-0 bottom-0 right-0 w-[1px] ${index === 2 && "!hidden"
              }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default NavBookNow;
