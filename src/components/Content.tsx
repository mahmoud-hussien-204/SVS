import {PropsWithChildren} from "react";

const Content = ({children}: PropsWithChildren) => {
  return (
    <section className='ms-0 mt-header-height-with-padding p-container-padding duration-150 peer-checked:ms-header-start lg:ms-header-start lg:peer-checked:ms-0'>
      {children}
    </section>
  );
};

export default Content;
