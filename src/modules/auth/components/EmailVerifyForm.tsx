import Input from "@/components/Input";

import FormCardTitle from "./FormCardTitle";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import useEmailVerifyForm from "../hooks/useEmailVerifyForm";

const EmailVerifyForm = () => {
  const { form, handleSubmit, isPending } = useEmailVerifyForm();

  return (
    <form onSubmit={handleSubmit} noValidate id='email-verify-form'>
      <FormCardTitle
        title='Email Verification'
        subtitle="Enter Code sent to your email address"
      />

      <div className='my-1.25rem'>
        <Label htmlFor='register-form-password'>Code</Label>
        <Input
          {...form.register("access_code")}
          type={"text"}
          placeholder='OTP Code'
          isError={!!form.formState.errors.access_code}
        />
        <ErrorMessage>{form.formState.errors.access_code?.message}</ErrorMessage>
      </div>

      <Button type='submit' className='w-full' isLoading={isPending}>
        Verify
      </Button>
    </form>
  );
};

export default EmailVerifyForm;
