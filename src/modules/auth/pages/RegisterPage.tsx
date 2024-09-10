import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import {Link} from "react-router-dom";

import FormCard from "../components/FormCard";

import RegisterForm from "../components/RegisterForm";

export const Component = () => {
  usePageTitle("Register");
  return (
    <TransitionPage>
      <section>
        <FormCard>
          <RegisterForm />
          <div className='mt-1.25rem'>
            <p className='text-center text-14 text-neutral-content'>
              Already have an account?{" "}
              <Link to='/auth/login' className='text-primary'>
                Sign in
              </Link>
            </p>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "RegisterPage";
