import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import {Link} from "react-router-dom";

import FormCard from "../components/FormCard";

import LoginForm from "../components/LoginForm";

export const Component = () => {
  usePageTitle("Login");
  return (
    <TransitionPage>
      <section className=''>
        <FormCard>
          <LoginForm />
          <div className='mt-1.25rem flex flex-col items-center justify-center gap-0.5rem sm:flex-row sm:justify-between'>
            <p className='text-14 text-neutral-content'>
              Don’t have an account?{" "}
              <Link to='/auth/register' className='text-primary'>
                Sign up
              </Link>
            </p>
            <Link
              to='/auth/reset-password'
              className='text-12 transition-colors duration-200 hover:text-primary'
            >
              Forgot password?
            </Link>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "LoginPage";
