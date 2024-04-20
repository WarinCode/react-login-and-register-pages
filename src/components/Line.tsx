import { ReactElement, FC } from "react";

const Line: FC<AppProps.LineProps<HTMLDivElement>> = (
  props: AppProps.LineProps<HTMLDivElement>
): ReactElement<HTMLDivElement> => {
  return (
    <div
      {...props}
      className="w-full flex flex-row items-center justify-center"
    >
      <div className=" w-[40%] h-[1.2px] bg-gray300"></div>
      <p className="w-[20%] capitalize text-gray300 mx-8 text-sm font-thin cursor-default">
        or log in
      </p>
      <div className="w-[40%] h-[1.2px] bg-gray300"></div>
    </div>
  );
};

export default Line;
