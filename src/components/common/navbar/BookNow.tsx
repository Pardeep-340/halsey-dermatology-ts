import { useState } from "react";
import NavBookNow from "./NavBookNow";
import Cta from "../Cta";
import Popup from "../Popup";

const BookNow = () => {
  const [isNavBookNowVisible, setIsNavBookNowVisible] = useState(false);
  return (
    <>
      <div className="hidden md:block w-[122px]">
        <Cta
          className="text-nowrap w-[122px] md:!py-3.5 py-0 !px-0 !bg-transparent !border-white/50"
          onClick={() => setIsNavBookNowVisible(!isNavBookNowVisible)}
        >
          Book Now
        </Cta>
      </div>
      <Popup isOpen={isNavBookNowVisible} onClose={() => setIsNavBookNowVisible(!isNavBookNowVisible)} className="max-w-[824px]">
        <NavBookNow />
      </Popup>
    </>
  );
};

export default BookNow;
