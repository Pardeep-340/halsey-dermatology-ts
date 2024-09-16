import Paragraph from "./Paragraph";
import Link from "next/link";
import AppointmentForm from "./AppointmentForm";
import Image from "next/image";
import GreenHeading from "./GreenHeading";
import SubHeading from "./SubHeading";

const ContactUs = () => {
  
  return (
    <div className="bg-white">
      <div className="container xl:max-w-[1188px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="flex lg:flex-row flex-col xl:gap-12 gap-8 items-center">
          <div className="lg:max-w-[545px] w-full">
            <GreenHeading color="laurel" className="text-laurel relative z-10">
              Appointment
            </GreenHeading>
            <SubHeading className="max-w-[484px] mt-2.5 uppercase !leading-130 relative z-10">
              Book Your Appointment Now
            </SubHeading>
            <Paragraph className="mt-4 mb-6 max-w-[508px]">
              Have questions or ready to schedule your appointment? Reach out to
              our friendly team today.
              <Link
                href={"#book-online"}
                className="text-laurel hover:text-black hover:!text-opacity-100 common-transition"
              >
                Click here to Instantly Book Online
              </Link>
            </Paragraph>
            <AppointmentForm />
          </div>
          <div className="lg:max-w-[545px] w-full">
            <Image
              src="/assets/images/homepage/webp/glasses-girl.webp"
              alt="glasses-girl"
              width={546}
              height={769}
              className="w-full lg:max-h-[769px] h-full md:max-h-[600px] max-h-[450px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
