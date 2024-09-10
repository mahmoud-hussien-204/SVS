import React from "react";

type TitleWithTheProps = {
  title: string | React.ReactNode;
  theClassName?: string;
  titleClassName?: string;
  containerClassName?: string;
};

const TitleWithThe = ({
  title,
  theClassName,
  titleClassName,
  containerClassName,
}: TitleWithTheProps) => {
  const defaultTheClassName =
    "-:lg:text-5xl -:text-2xl -:font-bold -:text-white -:translate-x-5 -:-rotate-90";
  const defaultTitleClassName = "-:lg:text-8xl -:text-5xl -:font-bold -:text-[#FFBD59]";
  const defaultContainerClassName = "relative flex";

  return (
    <div className={`${defaultContainerClassName} ${containerClassName}`}>
      <p className={`${defaultTheClassName} ${theClassName}`}>the</p>
      <h5 className={`${defaultTitleClassName} ${titleClassName}`}>{title}</h5>
    </div>
  );
};

export default TitleWithThe;
