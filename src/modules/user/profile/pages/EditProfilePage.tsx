import TransitionPage from "@/components/TransitionPage";

import Card from "@/components/Card";

import Title from "@/components/Title";

import useEditProfile from "../hooks/useEditProfile";

import useAuth from "@/modules/auth/hooks/useAuth";

import IconPen from "@/components/icons/IconPen";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import Select from "@/components/Select";

import {constantCountries} from "../constants";

export const Component = () => {
  const {userData} = useAuth();

  const {handleSubmit, form} = useEditProfile();

  return (
    <TransitionPage>
      <Card>
        <Title>General Information</Title>
        <form name='edit-profile-form' id='edit-profile-form' noValidate onSubmit={handleSubmit}>
          <div className='mb-2rem flex items-center gap-1rem'>
            <div className='relative'>
              <img src={userData?.photo} alt='' className='w-6rem rounded-full' />
              <label
                className='absolute bottom-0 right-0 flex h-2rem w-2rem cursor-pointer items-center justify-center rounded-full bg-primary text-base-100'
                htmlFor='edit-profile-form-photo'
              >
                <IconPen />
              </label>
            </div>
            <div>
              <h5>{userData?.name}</h5>
              <h6 className='text-neutral-400'>{userData?.email}</h6>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-1.5rem'>
            <div>
              <Label htmlFor='edit-profile-form-fullName'>Full Name</Label>
              <Input
                {...form.register("fullName")}
                id='edit-profile-form-fullName'
                placeholder='Enter full name'
                type='text'
                isError={!!form.formState.errors.fullName}
              />
              <ErrorMessage>{form.formState.errors.fullName?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='edit-profile-form-email'>Email</Label>
              <Input
                {...form.register("email")}
                id='edit-profile-form-email'
                placeholder='Enter email'
                type='text'
                isError={!!form.formState.errors.email}
              />
              <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='edit-profile-form-phone'>Phone</Label>
              <Input
                {...form.register("phone")}
                id='edit-profile-form-phone'
                placeholder='Enter phone'
                type='text'
                isError={!!form.formState.errors.phone}
              />
              <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='edit-profile-form-country'>Country</Label>
              <Select
                {...form.register("country")}
                options={constantCountries}
                id='edit-profile-form-country'
                isError={!!form.formState.errors.country}
              />
              <ErrorMessage>{form.formState.errors.country?.message}</ErrorMessage>
            </div>
          </div>

          <div className='mt-2rem flex items-center gap-0.5rem'>
            <Button type='submit' className='min-w-[160px]'>
              Save Changes
            </Button>
            <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "EditProfilePage";
