import Input from "@/components/Input";

import useRegisterForm from "../hooks/useRegisterForm";

import FormCardTitle from "./FormCardTitle";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEmail from "@/components/icons/IconEmail";

import IconUser from "@/components/icons/IconUser";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";

import IconPhone from "@/components/icons/IconPhone";

const RegisterForm = () => {
  const { form, handleSubmit, isPending } = useRegisterForm();

  const { inputType, toggleVisibility } = usePasswordVisibility();

  const { inputType: confirmPasswordInputType, toggleVisibility: confirmPasswordToggleVisibility } =
    usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id='register-form'>
      <FormCardTitle
        title='Create an account'
        subtitle='Fill all inputs to register your account'
      />

      <div className='mb-1.25rem mt-1.88rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='register-form-first-name'>First name</Label>
          <InputWithIconContainer icon={<IconUser />}>
            <Input
              {...form.register("first_name")}
              type='text'
              id='register-form-first-name'
              placeholder='First name'
              isError={!!form.formState.errors.first_name}
            />
          </InputWithIconContainer>
          <ErrorMessage>{form.formState.errors.first_name?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='register-form-last-name'>Last name</Label>
          <InputWithIconContainer icon={<IconUser />}>
            <Input
              {...form.register("last_name")}
              type='text'
              id='register-form-last-name'
              placeholder='Last name'
              isError={!!form.formState.errors.last_name}
            />
          </InputWithIconContainer>
          <ErrorMessage>{form.formState.errors.last_name?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem mt-1.88rem'>
        <Label htmlFor='register-form-email'>E-mail</Label>
        <InputWithIconContainer icon={<IconEmail />}>
          <Input
            {...form.register("email")}
            type='email'
            id='register-form-email'
            placeholder='Email'
            isError={!!form.formState.errors.email}
            autoComplete='username'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem mt-1.88rem'>
        <Label htmlFor='register-form-phone'>Phone number</Label>
        <InputWithIconContainer icon={<IconPhone />}>
          <Input
            {...form.register("phone")}
            type='text'
            id='register-form-phone'
            placeholder='(+01)'
            isError={!!form.formState.errors.phone}
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='register-form-password'>Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: toggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("password")}
            type={inputType}
            id='register-form-password'
            placeholder='Password'
            isError={!!form.formState.errors.password}
            autoComplete='new-password'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
      </div>

      <div className='mb-2rem'>
        <Label htmlFor='register-form-confirm-password'>Confirm Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: confirmPasswordToggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("password_confirmation")}
            type={confirmPasswordInputType}
            id='register-form-confirm-password'
            placeholder='Password'
            isError={!!form.formState.errors.password_confirmation}
            autoComplete='new-password'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password_confirmation?.message}</ErrorMessage>
      </div>

      <Button type='submit' className='w-full' isLoading={isPending}>
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
