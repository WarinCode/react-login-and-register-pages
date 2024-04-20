import { ReactElement, FC } from "react";

const Header: FC<AppProps.HeaderProps<HTMLElement>> = ({
  text,
  attributes,
}): ReactElement<HTMLElement> => {
  return (
    <header
      {...attributes}
      className={`text-black text-4xl font-prompt font-bold capitalize cursor-default mb-6 ${attributes?.className}`}
    >
      {text}
    </header>
  );
};

Header.defaultProps = {
  text: "welcome back!",
};

export default Header;
