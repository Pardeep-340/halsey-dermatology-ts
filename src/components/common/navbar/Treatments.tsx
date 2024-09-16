import { TREATMENTS_LIST } from "@/utils/Helper";
import Link from "next/link";
interface TreatmentsType {
  pair: {
    title: string;
    items: string[];
  }[];
}

const Treatments = () => {
  type Card = {
    title: string;
    items: string[];
  };
  
  return (
    <>
      <div className="max-[1198px] mx-auto">
        <div className="flex sm:justify-between flex-wrap gap-4">
          {TREATMENTS_LIST.map((section: TreatmentsType, index: number) => (
            <div
              key={index}
              className="w-full sm:max-w-[245px] lg:max-w-[177px] xl:max-w-[226.5px]"
            >
              {section.pair &&
                section.pair.map((pair:Card, i: number) => (
                  <div key={i}>
                    <h4 className=" text-sm xl:text-base font-semibold h-[56px] flex items-center text-holly border-b border-dark-gray ps-3">
                      {pair.title}
                    </h4>
                    <div className="flex">
                      <ul className="w-full max-w-[227px]">
                        {pair.items.map((item: string, index: number) => (
                          <li
                            key={index}
                            className="py-1 xl:py-2.5 ps-3"
                          >
                            <Link
                              href={`/treatments/${item.toLowerCase().replace("-", "").replace(/ /g, "-").replace("--", "-")}`}
                              className="text-sm xl:text-base font-normal text-black !leading-140 hover:text-laurel common-transition"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Treatments;
