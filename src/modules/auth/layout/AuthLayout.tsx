import ProtectedRouter from "@/components/ProtectedRouter";

import AuthJourneyProvider from "../providers/AuthJourneyProvider";

import {Outlet} from "react-router";

import ImageAuthHero from "@/assets/auth2.png";

export const Component = () => {
  return (
    <ProtectedRouter>
      <AuthJourneyProvider>
        <section className='grid gap-2rem lg:grid-cols-2'>
          <div className='hidden p-container-padding lg:block'>
            <img
              src={ImageAuthHero}
              alt='Auth hero'
              className='sticky top-container-padding w-full rounded-1.5rem object-cover'
              style={{
                height: "calc(100vh - 1.5rem * 2)",
              }}
            />
          </div>

          <div className='flex flex-col items-start px-container-padding py-5rem sm:px-5rem lg:px-3rem'>
            <img src='/logo.svg' alt='Logo' className='mb-5rem h-2.5rem' />
            <div className='flex w-full flex-1 items-center'>
              <div className='w-full'>
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </AuthJourneyProvider>
    </ProtectedRouter>
  );
};

Component.displayName = "AuthLayout";
