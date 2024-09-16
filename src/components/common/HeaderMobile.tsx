import { useState } from "react";
import Icons from "./Icons";
import Cta from "./Cta";
import NavBookNow from "./navbar/NavBookNow";
import { ACCORDION_ITEMS_LIST } from "./Helper";
import Popup from "./Popup";
interface AccordionList {
  title: string;
  content: JSX.Element;
}

const HeaderMobile = () => {
  const [isNavBookNowVisible, setIsNavBookNowVisible] = useState(false);
  const [isOpen, setIsOpen] = useState([false, false, false]);
  const TOGGLE_ACCORDION = (index: number) => {
    setIsOpen((prev) =>
      prev.map((item, idx) => (idx === index ? !item : false))
    );
  };

  return (
    <div className="px-4 pt-12 pb-24 md:pb-24 h-screen overflow-scroll lg:h-[calc(100dvh-80px)] bg-white flex flex-col gap-5 lg:justify-center items-center">
      {ACCORDION_ITEMS_LIST.map((item: AccordionList, index: number) => (
        <div key={index} className="w-full max-w-[550px]">
          <button
            className="border-b text-left py-4 flex justify-between items-center w-full"
            onClick={() => TOGGLE_ACCORDION(index)}
          >
            <span className="text-base leading-108.8 font-thin text-black">
              {item.title}
            </span>
            <span>
              {isOpen[index] ? (
                <Icons icon="navAccordionOpen" />
              ) : (
                <Icons icon="navAccordionClose" />
              )}
            </span>
          </button>
          {isOpen[index] && (
            <div className="py-4 text-black">{item.content}</div>
          )}
        </div>
      ))}

      <div className="w-[130px] lg:w-[122px] pt-10 mx-auto md:hidden">
        <Cta
          onClick={() => setIsNavBookNowVisible(!isNavBookNowVisible)}
          className="text-nowrap !border-white/50"
        >
          Book Now
        </Cta>
        <Popup
          isOpen={isNavBookNowVisible}
          onClose={() => setIsNavBookNowVisible(!isNavBookNowVisible)}
          className="max-w-[824px]"
        >
          <NavBookNow />
        </Popup>
      </div>
    </div>
  );
};

export default HeaderMobile;
