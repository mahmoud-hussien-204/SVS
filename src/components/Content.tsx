import useShowSideBar from "@/hooks/useShowSideBar";

import { PropsWithChildren } from "react";

const Content = ({ children }: PropsWithChildren) => {
  const { showSidebar } = useShowSideBar();
  return (
    <section className={`mt-header-height-with-padding ${showSidebar && "ms-header-start"} duration-150 p-container-padding`}>
      {children}
    </section>
  );
};

export default Content;
