interface IProps {
  type: string;
  placeholder: string;
  onChangeData?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id: string;
  name: string;
  className?: string;
  readonly?: boolean;
  refs?: React.Ref<HTMLInputElement>;
}

const CustomInput = (props: IProps) => {
  const {
    type,
    placeholder,
    name,
    id,
    value,
    onChangeData,
    className,
    readonly,
    refs,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeData}
      value={value}
      name={name}
      id={id}
      ref={refs}
      readOnly={readonly}
      autoComplete="off"
      className={`border border-holly sm:text-base text-sm font-normal text-opacity-70 text-dove-gray border-opacity-5 sm:py-3 sm:px-3.5 p-2 bg-white bg-opacity-35 outline-none lg:h-[50px] ${className}`}
    />
  );
};

export default CustomInput;