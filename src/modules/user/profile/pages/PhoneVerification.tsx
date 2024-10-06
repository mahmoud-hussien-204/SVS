import Card from "@/components/Card";

import Input from "@/components/Input";

import Label from "@/components/Label";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import usePhoneVerificationForm from "../hooks/usePhoneVerificationForm";

import ErrorMessage from "@/components/ErrorMessage";

import ResendCode from "@/components/ResendCode";

import Button from "@/components/Button";
import useAuth from "@/modules/auth/hooks/useAuth";

export const Component = () => {
  const {handleSubmit, form, isPending} = usePhoneVerificationForm();

  const {userData} = useAuth();

  return (
    <TransitionPage>
      <Card>
        <Title>Phone Verification</Title>
        <form
          name='phone-verification-form'
          id='phone-verification-form'
          noValidate
          onSubmit={handleSubmit}
        >
          <div className='mb-2rem grid grid-cols-2 gap-1.25rem'>
            <div>
              <Label htmlFor='phone-verification-form-input'>Phone Number</Label>
              <div className='relative'>
                <Input
                  {...form.register("phone")}
                  type='text'
                  id='phone-verification-form-input'
                  placeholder='Enter your phone number'
                  isError={!!form.formState.errors.phone}
                />
                <ResendCode email={userData?.email || ""} />
              </div>
              <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='phone-verification-form-code'>Verification Code</Label>
              <Input
                {...form.register("code")}
                type='text'
                id='phone-verification-form-code'
                placeholder='Enter Verification Code'
                isError={!!form.formState.errors.code}
              />
              <ErrorMessage>{form.formState.errors.code?.message}</ErrorMessage>
            </div>
          </div>
          <Button type='submit' isLoading={isPending} className='min-w-[160px]'>
            Verify
          </Button>
        </form>
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "PhoneVerification";
