import { ReactElement, FC } from "react";

const FormContainer: FC<AppProps.FormContainerProps> = ({
  children,
  attributes,
}): ReactElement<HTMLFormElement> => {
  return <form {...attributes}>{children}</form>;
};

export default FormContainer;
