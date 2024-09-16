import { MEDICAL_DERMATOLOGY, REJUVENATION_ESTHETICS } from "@/utils/Helper";
import Link from "next/link";

interface ConcernListProps {
  title: string;
  concerns: string[];
}

const ConcernList: React.FC<ConcernListProps> = ({ title, concerns }) => {
  const half = Math.ceil(concerns.length / 2);
  const columns = [concerns.slice(0, half), concerns.slice(half)];
  return (
    <div className="w-full lg:w-1/2">
      <h4 className=" text-sm xl:text-base font-semibold h-[56px] flex items-center text-holly border-b border-dark-gray ps-3">
        {title}
      </h4>
      <div className="flex">
        {columns.map((column, colIndex) => (
          <ul className="w-full max-w-[227px]" key={colIndex}>
            {column.map((concern, index) => (
              <li key={index} className="py-1 xl:py-[9px] ps-3">
                <Link
                  href={`/skin-concerns/${concern.toLowerCase().replaceAll(' ', '-').replace('(', '').replace(')', '')}`}
                  className=" text-sm xl:text-base font-normal text-black hover:text-laurel common-transition"
                >
                  {concern}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const SkinConcerns: React.FC = () => {
  return (
    <div className="max-w-[924px] mx-auto">
      <div className="flex gap-4 flex-col md:flex-row">
        <ConcernList
          title="Medical and Pediatric Dermatology"
          concerns={MEDICAL_DERMATOLOGY}
        />
        <ConcernList
          title="Rejuvenation and Esthetics"
          concerns={REJUVENATION_ESTHETICS}
        />
      </div>
    </div>
  );
};

export default SkinConcerns;
