import { ReactElement, FC } from "react";

const Button: FC<AppProps.ButtonProps> = ({
  attributes,
  childAttributes,
  text,
  displayImg
}): ReactElement<HTMLButtonElement> => {
  return (
    <button
      {...attributes}
      className={`w-full h-[60px] capitalize text-xl rounded-xl shadow-lg text-black font-prompt font-bold ${attributes?.className}`}
    >
      {displayImg && <img {...childAttributes} className={`w-7 h-7 me-3 ${childAttributes?.className}`}/>}
      {text}
    </button>
  );
};

Button.defaultProps = {
    displayImg: false,
    childAttributes: {
        loading: "lazy"
    }
}

export default Button;
