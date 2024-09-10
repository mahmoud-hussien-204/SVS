import Input from "@/components/Input";

import Label from "@/components/Label";

import useUpdatePasswordForm from "../hooks/useUpdatePasswordForm";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

const UpdatePasswordForm = () => {
  const {form, handleSubmit} = useUpdatePasswordForm();

  return (
    <form noValidate id='update-password-form' name='update-password-form' onSubmit={handleSubmit}>
      <input type='hidden' name='username' value='user123' aria-hidden='true' />
      <div className='grid grid-cols-3 gap-1rem'>
        <div className='mb-1.25rem'>
          <Label htmlFor='update-password-current-password-form'>Current Password</Label>
          <Input
            {...form.register("currentPassword")}
            type='password'
            id='update-password-current-password-form'
            placeholder='Current Password'
            isError={!!form.formState.errors.currentPassword}
            autoComplete='new-password'
          />
          <ErrorMessage>{form.formState.errors.currentPassword?.message}</ErrorMessage>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='update-password-new-password-form'>new Password</Label>
          <Input
            {...form.register("newPassword")}
            type='password'
            id='update-password-new-password-form'
            placeholder='New Password'
            isError={!!form.formState.errors.newPassword}
            autoComplete='new-password'
          />
          <ErrorMessage>{form.formState.errors.newPassword?.message}</ErrorMessage>
        </div>
        <div className='mb-2rem'>
          <Label htmlFor='update-password-confirm-password-form'>Confirm Password</Label>
          <Input
            {...form.register("confirmPassword")}
            type='password'
            id='update-password-confirm-password-form'
            placeholder='Confirm Password'
            isError={!!form.formState.errors.confirmPassword}
            autoComplete='new-password'
          />
          <ErrorMessage>{form.formState.errors.confirmPassword?.message}</ErrorMessage>
        </div>
      </div>

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]'>
          Save Changes
        </Button>
        <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
