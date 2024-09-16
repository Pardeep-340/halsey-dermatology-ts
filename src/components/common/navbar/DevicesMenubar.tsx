import { DEVICES_LIST } from "@/utils/Helper";
import Link from "next/link";

const DevicesMenubar = () => {
  return (
    <>
      <div className="w-full lg:max-w-[227px] mx-auto">
        <h4 className="text-sm xl:text-base font-semibold h-[56px] flex items-center text-holly border-b border-dark-gray ps-3">
          Devices
        </h4>
        <ul className="w-full max-w-[227px]">
          {DEVICES_LIST.map((device: string, index: number) => (
            <li key={index} className="py-1 xl:py-[9px] ps-3 ">
              <Link
                href={`/devices/${device.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm xl:text-base font-normal text-black hover:text-laurel common-transition"
              >
                {device}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default DevicesMenubar;
