import Tabs from "@/components/Tabs";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { constantProfileTabs } from "../constants";
import ProfileProvider from "../providers/ProfileProvider";

export const Component = () => {
  usePageTitle("Settings");

  const { pathname } = useLocation();

  if (pathname.endsWith("/profile")) return <Navigate to='global-settings' />;

  return (
    <ProfileProvider>
      <TransitionPage>
        <div className='mb-1.5rem'>
          <Tabs
            to={(tab) => ({
              pathname: (tab as (typeof constantProfileTabs)[number]).value,
            })}
            tabs={constantProfileTabs}
          />
        </div>
        <Outlet />
      </TransitionPage>
    </ProfileProvider>
  );
};

Component.displayName = "ProfileLayout";
