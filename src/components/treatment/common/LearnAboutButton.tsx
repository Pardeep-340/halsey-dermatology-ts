import Icons from "./Icons";

const LearnAboutButton = () => {
  return (
    <div className="flex justify-center lg:mt-14 md:mt-12 mt-10">
      <button className="group uppercase flex items-center md:gap-3 gap-2 md:py-4 md:px-20 sm:px-6 px-4 py-3 font-medium md:text-lg sm:text-base text-sm text-laurel !leading-110 border border-solid border-laurel rounded-full hover:bg-laurel hover:text-white common-transition">
        Learn more about Nitronox Plus
        <span>
          <Icons icon="buttonGreenTick" className="sm:w-auto w-4" pathClassName="group-hover:stroke-white" />
        </span>
      </button>
    </div>
  );
};

export default LearnAboutButton;