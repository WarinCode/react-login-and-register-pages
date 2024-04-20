import { ReactElement, FC } from "react";

const InputGroup: FC<AppProps.InputGroupProps<HTMLDivElement>> = ({
  attributes,
  children,
}): ReactElement<HTMLElement> => {
  return <div {...attributes}>{children}</div>;
};

export default InputGroup;
