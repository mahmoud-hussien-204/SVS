import TransitionPage from "@/components/TransitionPage";

import EnableTwoFactorAuthenticationForm from "../components/EnableTwoFactorAuthenticationForm";

import UpdatePasswordForm from "../components/UpdatePasswordForm";

import Card from "@/components/Card";

import Title from "@/components/Title";

import Button from "@/components/Button";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";
import useUserProfile from "../hooks/useUserProfile";

export const Component = () => {
  const {data} = useUserProfile();
  return (
    <ModalProvider>
      <TransitionPage>
        <div className='mb-2rem'>
          <Card>
            <Title>Change Password</Title>
            <UpdatePasswordForm />
          </Card>
        </div>
        {!data?.user.google2fa_secret && (
          <Card>
            <Title>Two-steps verification</Title>
            <h6 className='mb-0.5rem font-semibold text-neutral-400'>
              Two factor authentication is not enabled yet.
            </h6>
            <p className='mb-1.5rem text-neutral-400'>
              Two-factor authentication adds an additional layer of security to your account by
              requiring more than just a password to log in.
            </p>
            <EnableTwoFactorAuthenticationFormButton />
          </Card>
        )}
      </TransitionPage>
      <Modal enableTwoFactorAuthentication={EnableTwoFactorAuthenticationForm} />
    </ModalProvider>
  );
};

Component.displayName = "SecurityPage";

const EnableTwoFactorAuthenticationFormButton = () => {
  const {show, setClassName} = useModal();
  return (
    <Button
      onClick={() => {
        show(EnumModals.enableTwoFactorAuthentication);
        setClassName("max-w-[50rem]");
      }}
      type='button'
    >
      Enable Two Factor Authentication
    </Button>
  );
};
