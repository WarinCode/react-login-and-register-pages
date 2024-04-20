import { ReactElement, FC } from "react";

const Container: FC<AppProps.ContainerProps<HTMLElement>> = ({
  children,
  attributes
}): ReactElement<HTMLElement> => {
  return (
    <section {...attributes}>
      {children}
    </section>
  );
};

export default Container;
