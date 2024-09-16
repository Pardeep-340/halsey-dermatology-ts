"use client";
import { useState } from "react";
import { FAQS_LIST } from "@/utils/Helper";
import Icons from "./Icons";
import Paragraph from "./Paragraph";

const Faq = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(0);
  const TOGGLE_ACCORDION = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? -1 : index);
  };
  
  return (
    <div className="bg-white-rock">
      <div className="container xl:max-w-[1188px] pt-12 pb-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 xl:gap-11">
          <div className="w-full md:max-w-[200px] lg:max-w-[290px] md:translate-y-[207px] lg:translate-y-[240px] xl:translate-y-[300px]">
            <h2 className=" font-bold leading-none text-center md:text-start text-[100px] sm:text-[120px] md:text-[200px] lg:text-[250px] xl:text-[290px] md:-rotate-90 md:-translate-x-[29px] xl:-translate-x-[42px] lg:-translate-x-[55px]">
              FAQ
            </h2>
            <Paragraph className="pt-3 md:pt-0 lg:pt-8 xl:pt-4 text-center md:text-start">
              Answers to your frequently asked questions.
            </Paragraph>
          </div>
          <div className="border-t border-off-black">
            {FAQS_LIST.map((value, index) => (
              <div key={index} className="relative z-10 mx-auto w-full ">
                <div
                  onClick={() => TOGGLE_ACCORDION(index)}
                  className="w-full cursor-pointer p-3 md:p-6 lg:p-[30px] border-b border-off-black"
                >
                  <button
                    type="button"
                    className="flex w-full justify-between gap-4 text-left text-base font-semibold !leading-130 md:text-lg lg:text-xl"
                    aria-controls={`faqs-text-${index}`}
                  >
                    <p className="flex gap-2">{value.question}</p>
                    <span
                      className={`common-transition mt-0.5 ${expandedQuestion === index && "rotate-180"
                        }`}
                    >
                      {expandedQuestion === index ? (
                        <Icons icon="subtractIcon" />
                      ) : (
                        <Icons icon="plusIcon" />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faqs-text-${index}`}
                    role="region"
                    aria-labelledby={`faqs-title-${index}`}
                    className={`grid overflow-hidden text-base text-light-gray common-transition ${expandedQuestion === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className={`overflow-hidden ${index > 8 && "!ps-9"}`}>
                      <Paragraph className="mt-3 md:mt-4 xl:mt-6 lg:pe-12 pe-10">
                        {value.answer}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
