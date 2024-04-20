import { ReactElement, FC } from "react";

const InputField: FC<AppProps.InputFieldProps<HTMLDivElement>> = ({
  inputAttributes,
  inputRef
}): ReactElement<HTMLDivElement> => {  
  return (
    <input
      {...inputAttributes}
      ref={inputRef}
      className={`w-full h-[60px] py-2 ps-6 outline-none text-black font-prompt text-xl border-1 bg-gray200 rounded-xl my-3 tracking-wider placeholder:font-prompt placeholder:capitalize ${inputAttributes.className}`}
    />
  );
};

InputField.defaultProps = {
  inputAttributes: {
    required: true,
    spellCheck: false,
    autoFocus: false
  },
};
export default InputField;
