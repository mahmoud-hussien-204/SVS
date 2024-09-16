import ProtectedRouter from "@/components/ProtectedRouter";

import {Outlet} from "react-router-dom";

import Header from "@/components/Header";

import Sidebar from "@/components/Sidebar";

import Content from "@/components/Content";

import WithRole from "@/components/WithRole";

import TransitionPage from "@/components/TransitionPage";

export const Component = () => {
  return (
    <ProtectedRouter>
      <WithRole>
        <TransitionPage>
          {/* this input for toggle sidebar  */}
          <input type='checkbox' id='toggle-sidebar' className='peer-nested peer hidden' />
          <Header />
          <Sidebar />
          <Content>
            <Outlet />
          </Content>
        </TransitionPage>
      </WithRole>
    </ProtectedRouter>
  );
};

Component.displayName = "RootLayout";
