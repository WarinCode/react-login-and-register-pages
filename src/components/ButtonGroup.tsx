import { ReactElement, FC } from "react";

const ButtonGroup: FC<AppProps.ButtonGroupProps<HTMLDivElement>> = ({
  children,
  attributes,
}): ReactElement<HTMLDivElement> => {
  return <div {...attributes}>{children}</div>;
};

export default ButtonGroup;
