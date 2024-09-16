"use client";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { NAME_REGEX, PHONE_REGEX } from "@/utils/Regex";
import { toast } from "react-toastify";
import Dropdown from "./Dropdown";
import Icons from "./Icons";
import Cta from "./Cta";
import { APPOINTMENT_LIST, CONTACT_LIST } from "@/utils/Helper";

const AppointmentForm = () => {
  interface FormData {
    name: string;
    lastName: string;
    contact: string;
    message: string;
    comment: string;
  }
  interface FormError {
    name?: string;
    lastName?: string;
    contact?: string;
    message?: string;
    comment?: string;
    checkbox?: string;
  }
  const initialFormData: FormData = {
    name: "",
    lastName: "",
    contact: "",
    message: "",
    comment: "",
  };
  const initialFormError: FormError = {};
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formError, setFormError] = useState<FormError>(initialFormError);
  const [selectedOption, setSelectedOption] = useState<string>("Phone Call");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const INPUT_FILL = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "contact" && /[^\d]/.test(value)) {
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "name" || name === "lastName") {
      if (value === "") {
        setFormError((prevError) => ({
          ...prevError,
          [name]: `Invalid ${name}`,
        }));
      } else if (!NAME_REGEX.test(value)) {
        setFormError((prevError) => ({
          ...prevError,
          [name]: `Invalid ${name}`,
        }));
      } else {
        setFormError((prevError) => ({ ...prevError, [name]: "" }));
      }
    }
    if (name === "contact") {
      if (value === "" || value.length !== 10) {
        setFormError((prevError) => ({
          ...prevError,
          contact: "Phone number must be exactly 10 digits",
        }));
      } else {
        setFormError((prevError) => ({ ...prevError, contact: "" }));
      }
    }
    if (name === "comment") {
      if (value === "") {
        setFormError((prevError) => ({
          ...prevError,
          comment: "Comment is required",
        }));
      } else {
        setFormError((prevError) => ({ ...prevError, comment: "" }));
      }
    }
    if (name === "message" && value !== "") {
      setFormError((prevError) => ({ ...prevError, message: "" }));
    }
  };
  const SUBMIT_HANDLER = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error = { ...initialFormError };
    if (formData.name === "") {
      error.name = "Name is required";
    } else if (!NAME_REGEX.test(formData.name)) {
      error.name = "Invalid Name";
    }
    if (formData.lastName === "") {
      error.lastName = "Last name is required";
    } else if (!NAME_REGEX.test(formData.lastName)) {
      error.lastName = "Invalid Last Name";
    }
    if (selectedOption === "Phone Call") {
      if (formData.contact === "") {
        error.contact = "Phone number is required";
      } else if (!PHONE_REGEX.test(formData.contact)) {
        error.contact = "Invalid Phone Number";
      }
    } else if (selectedOption === "Secure Message") {
      if (formData.message === "") {
        error.message = "Message is required";
      }
    }
    if (formData.comment === "") {
      error.comment = "Comment is required";
    }
    if (!isCheckboxChecked) {
      error.checkbox = "Please agree to the terms";
    } else {
      error.checkbox = "";
    }
    setFormError(error);
    if (Object.values(error).every((err) => !err)) {
      console.log("Form data:", formData);
      toast.success("You booked an appointment successfully");
      setFormData(initialFormData);
      setFormError(initialFormError);
      setIsCheckboxChecked(false);
    } else {
      console.log("Form submission failed. Errors:", error);
    }
  };
  const HANDLE_CHECK_BOX = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <>
      <form
        onSubmit={SUBMIT_HANDLER}
        className="flex flex-col items-start w-full lg:gap-4 gap-3"
      >
        <div className="flex lg:gap-4 gap-3 w-full">
          <div className="w-full">
            <CustomInput
              type="text"
              placeholder="First Name"
              value={formData.name}
              id="FirstName"
              name="name"
              className={`w-full ${formError.name && "!border-red-700"}`}
              onChangeData={INPUT_FILL}
            />
            {formError.name && (
              <p className="mt-1 text-red-700 text-xs sm:text-sm">
                {formError.name}
              </p>
            )}
          </div>
          <div className="w-full">
            <CustomInput
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              id="LastName"
              name="lastName"
              className={`w-full ${formError.lastName && "!border-red-700"}`}
              onChangeData={INPUT_FILL}
            />
            {formError.lastName && (
              <p className="mt-1 text-red-700 text-xs sm:text-sm">
                {formError.lastName}
              </p>
            )}
          </div>
        </div>
        <Dropdown
          dropdownList={CONTACT_LIST}
          defaultSelected={selectedOption}
          onSelect={(selected) => {
            setSelectedOption(selected);
            if (selected !== "Phone Call") {
              setFormData({ ...formData, contact: "" });
              setFormError((prevError) => ({
                ...prevError,
                contact: "",
              }));
            }
            if (selected !== "Secure Message") {
              setFormData({ ...formData, message: "" });
              setFormError((prevError) => ({
                ...prevError,
                message: "",
              }));
            }
          }}
        />
        {selectedOption === "Phone Call" && (
          <div className="w-full">
            <input
              type="tel"
              placeholder="Phone No"
              value={formData.contact}
              id="contact"
              name="contact"
              className={`w-full sm:py-3 sm:px-3.5 p-2 border lg:h-[50px] border-holly border-opacity-5 outline-none sm:text-base text-sm font-normal text-opacity-70 text-dove-gray ${
                formError.contact && "!border-red-700"
              }`}
              maxLength={10}
              minLength={10}
              onChange={INPUT_FILL}
            />
            {formError.contact && (
              <p className="mt-1 text-red-700 text-xs sm:text-sm">
                {formError.contact}
              </p>
            )}
          </div>
        )}
        {selectedOption === "Secure Message" && (
          <div className="w-full">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={INPUT_FILL}
              className={`w-full sm:py-3 sm:px-3.5 p-2 border border-holly border-opacity-5 outline-none sm:text-base text-sm font-normal text-opacity-70 text-dove-gray resize-none sm:h-[77px] h-12 ${
                formError.message && "!border-red-700"
              }`}
            />
            {formError.message && formData.message === "" && (
              <p className="mt-1 text-red-700 text-xs sm:text-sm">
                {formError.message}
              </p>
            )}
          </div>
        )}
        <Dropdown
          dropdownList={APPOINTMENT_LIST}
          defaultSelected={"Appointment"}
        />
        <div className="w-full">
          <textarea
            id="comment"
            name="comment"
            placeholder="Comments/Information Requested"
            value={formData.comment}
            onChange={INPUT_FILL}
            className={`w-full sm:py-3 sm:px-3.5 p-2 border border-holly border-opacity-5 outline-none sm:text-base text-sm font-normal text-opacity-70 text-dove-gray resize-none sm:h-[106px] h-16 ${
              formError.comment && "!border-red-700"
            }`}
          />
          {formError.comment && (
            <p className="mt-1 text-red-700 text-xs sm:text-sm">
              {formError.comment}
            </p>
          )}
        </div>
        <div className="w-full gap-2.5">
          <label className="lg:py-2.5 lg:pl-4 lg:pr-0 p-2 bg-hint-of-green flex items-start cursor-pointer lg:gap-2.5 gap-1">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="hidden"
              checked={isCheckboxChecked}
              onChange={HANDLE_CHECK_BOX}
            />
            <div className="bg-hint-of-green m-1 flex items-center justify-center border-[3px] rounded-sm border-laurel !size-[18px] !min-w-[18px] min-h-[19px]">
              {isCheckboxChecked ? (
                <Icons icon="greenTick" />
              ) : (
                <div className="w-2.5 h-2"></div>
              )}
            </div>
            <q className="text-sm text-holly text-opacity-70 font-normal !leading-150">
              I hereby request to be contacted for the purpose of obtaining
              general marketing information about the devices / treatments
              listed above. I acknowledge that this information is not medical
              advice, and that any patient-specific advice or informed consent
              shall only be obtained at a visit with a qualified professional
              (MD/PA-C) on our staff.
            </q>
          </label>
          {!isCheckboxChecked && formError.checkbox && (
            <p className="mt-1 text-red-700 text-xs sm:text-sm">
              {formError.checkbox}
            </p>
          )}
        </div>
        <Cta
          type="submit"
          className="text-white sm:!py-2.5 sm:!text-lg bg-laurel border-laurel lg:mt-6 mt-3 cursor-pointer !leading-111"
        >
          Contact Us
        </Cta>
      </form>
    </>
  );
};

export default AppointmentForm;
