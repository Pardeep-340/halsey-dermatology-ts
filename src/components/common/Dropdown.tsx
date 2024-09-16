import { useRef, useState, useEffect } from "react";
import Icons from "./Icons";

interface IProps {
  dropdownList: string[];
  defaultSelected?: string;
  onSelect?: (selected: string) => void;
}

const Dropdown = ({ dropdownList, defaultSelected, onSelect }: IProps) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultSelected
  );
  const catMenu = useRef<HTMLDivElement>(null);
  const CLOSE_OPEN_MENU = (e: MouseEvent) => {
    if (
      dropdownActive &&
      catMenu.current &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setDropdownActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", CLOSE_OPEN_MENU);
    return () => {
      document.removeEventListener("mousedown", CLOSE_OPEN_MENU);
    };
  }, [dropdownActive]);
  const HANDLE_SELECT = (value: string) => {
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
    setDropdownActive(false);
  };

  return (
    <div ref={catMenu} className="w-full relative">
      <div
        onClick={() => {
          setDropdownActive(!dropdownActive);
        }}
        className="flex justify-between items-center border border-black border-opacity-5 lg:h-[50px] sm:px-3.5 sm:py-3 p-2 cursor-pointer"
      >
        <p className="sm:text-base text-sm text-dove-gray text-opacity-70 font-normal">
          {selectedOption || dropdownList[0]}
        </p>{" "}
        <span
          className={`common-transition ${
            dropdownActive ? "rotate-180" : "rotate-0"
          }`}
        >
          <Icons icon="phoneArrow" />
        </span>
      </div>
      <div
        className={`flex flex-col sm:gap-[15px] gap-1.5 sm:py-[15px] py-1.5 absolute z-10 top-full left-0 w-full duration-300 transition-transform shadow-lg overflow-hidden text-base bg-white text-dove-gray text-opacity-70 ${
          dropdownActive
            ? "h-auto opacity-100 visible translate-y-0"
            : "h-0 opacity-0 invisible -translate-y-5"
        }`}
      >
        {dropdownList.map((value: string, index: number) => (
          <div key={index} className="w-full px-4">
            <label className="flex items-center sm:gap-2 gap-1 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedOption === value}
                onChange={() => HANDLE_SELECT(value)}
                className="hidden"
              />
              <div className="min-w-4 min-h-4 border-[2px] border-stack rounded-sm bg-white flex items-center justify-center pt-[0.5px]">
                {selectedOption === value ? <Icons icon="grayTick" /> : ""}
              </div>
              <span className="w-full group-hover:text-opacity-100 common-transition cursor-pointer sm:text-base text-sm text-dove-gray text-opacity-70 font-normal">
                {value}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
