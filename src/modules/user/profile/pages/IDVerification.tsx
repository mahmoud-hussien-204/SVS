import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import { FormProvider } from "react-hook-form";

import useIDVerificationForm from "../hooks/useIDVerificationForm";

import ImageUploader from "../components/ImageUplaoder";

export const Component = () => {
  const { handleSubmit, form } = useIDVerificationForm();

  return (
    <FormProvider {...form}>
      <TransitionPage>
        <Card>
          <Title>ID Verification</Title>
          <form
            name='id-verification-form'
            id='id-verification-form'
            noValidate
            onSubmit={handleSubmit}
          >
            <div className='mb-2rem grid grid-cols-2 gap-1.25rem'>
              <div>
                {/* <Label htmlFor='phone-verification-form-input'>Phone Number</Label> */}
                <div className='relative'>
                  <ImageUploader name="front_img" title="Front ID" locale />
                </div>
                <ErrorMessage>{form.formState.errors.front_img?.message}</ErrorMessage>
              </div>
              <div>
                {/* <Label htmlFor='phone-verification-form-input'>Phone Number</Label> */}
                <div className='relative'>
                  <ImageUploader name="back_img" title="Back ID" locale />
                </div>
                <ErrorMessage>{form.formState.errors.back_img?.message}</ErrorMessage>
              </div>
            </div>
            <Button type='submit' className='min-w-[160px]'>
              Verify
            </Button>
          </form>
        </Card>
      </TransitionPage>
    </FormProvider>
  );
};

Component.displayName = "IDVerification";
