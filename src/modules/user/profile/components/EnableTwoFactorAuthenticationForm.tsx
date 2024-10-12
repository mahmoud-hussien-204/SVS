import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Label from "@/components/Label";

import Input from "@/components/Input";

import useEnableTwoFactorAuthentication from "../hooks/useEnableTwoFactorAuthentication";

import useUserProfile from "../hooks/useUserProfile";

import QRCode from "react-qr-code";

import {getG2fUrl} from "@/helpers";

const EnableTwoFactorAuthenticationForm = () => {
  const {form, handleSubmit, isPending} = useEnableTwoFactorAuthentication();

  const {data} = useUserProfile();

  return (
    <form
      noValidate
      id='enable-two-factor-authentication-form'
      name='enable-two-factor-authentication-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Enable Two Factor Authentication' />
      <ModalBody>
        <div className='flex flex-wrap items-center gap-1rem sm:flex-nowrap'>
          <div style={{background: "white", padding: "10px"}}>
            <QRCode
              value={getG2fUrl(data?.user.email ?? "", data?.google2fa_secret ?? "")}
              size={150}
            />
          </div>
          <div>
            <h6 className='mb-0.5rem text-neutral-400'>Authenticator Apps</h6>
            <p className='mb-1.5rem text-14 leading-1.5rem text-neutral-400'>
              Using an authenticator app like Google Authenticator, Microsoft Authenticator or
              1Password, scan the QR code. It will generate a 6 digit code for you to enter below.
            </p>
            <Label htmlFor='enable-two-factor-authentication-form-code'>
              Enter Authentication Code
            </Label>
            <Input
              id='enable-two-factor-authentication-form-code'
              placeholder='Enter Authentication Code'
              isError={!!form.formState.errors?.code}
              {...form.register("code")}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter title='Submit' isLoading={isPending} />
    </form>
  );
};

export default EnableTwoFactorAuthenticationForm;
