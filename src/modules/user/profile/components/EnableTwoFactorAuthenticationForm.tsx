import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import ImageQrCode from "@/assets/qr-code.png";

import Label from "@/components/Label";

import Input from "@/components/Input";

import useEnableTwoFactorAuthentication from "../hooks/useEnableTwoFactorAuthentication";
import useQuery from "@/hooks/useQuery";
import {apiGetQrCode2FA} from "../services";

const EnableTwoFactorAuthenticationForm = () => {
  const {form, handleSubmit} = useEnableTwoFactorAuthentication();
  const {data, isLoading} = useQuery({
    queryKey: ["get-two-factor-authentication-qrCode"],
    queryFn: apiGetQrCode2FA,
    retry: 2,
  });

  return (
    <form
      noValidate
      id='enable-two-factor-authentication-form'
      name='enable-two-factor-authentication-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Enable Two Factor Authentication' />
      <ModalBody>
        <div className='flex items-center gap-1rem'>
          <img src={ImageQrCode} alt='qr code' className='max-h-[200px]' />
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
      <ModalFooter title='Submit' isLoading={false} />
    </form>
  );
};

export default EnableTwoFactorAuthenticationForm;
