import Button from "@/components/Button";

import useFeatureSettingsForm from "../hooks/useFeatureSettingsForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import Title from "@/components/Title";

import ErrorMessage from "@/components/ErrorMessage";

import SwitchInput from "@/components/SwitchInput";

const FeatureSettingsForm = () => {
  const {form, handleSubmit} = useFeatureSettingsForm();

  return (
    <form
      noValidate
      id='feature-settings-form'
      name='feature-settings-form'
      onSubmit={handleSubmit}
    >
      <Title>Multi-signature Pocket</Title>
      <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem border-b border-b-neutral-800 pb-1rem'>
        <div>
          <Label htmlFor='feature-settings-maxCo'>Max Co User For One Pocket</Label>
          <Input
            {...form.register("maxCo")}
            type='text'
            placeholder='Enter Max Co User For One Pocket'
            id='feature-settings-maxCo'
            isError={!!form.formState.errors.maxCo}
          />
          <ErrorMessage>{form.formState.errors.maxCo?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-approvals'>
            The (%) Users Approval Needed For A Withdraw
          </Label>
          <Input
            {...form.register("approvals")}
            type='text'
            placeholder='The (%) Users Approval Needed For A Withdraw'
            id='feature-settings-approvals'
            isError={!!form.formState.errors.approvals}
          />
          <ErrorMessage>{form.formState.errors.approvals?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-multiSignatureStatus'>
            Multi-signature Pocket Feature Status
          </Label>
          <SwitchInput
            {...form.register("multiSignatureStatus")}
            id='feature-settings-multiSignatureStatus'
            isError={!!form.formState.errors.multiSignatureStatus}
          />
          <ErrorMessage>{form.formState.errors.multiSignatureStatus?.message}</ErrorMessage>
        </div>
      </div>

      <Title>Enable Google Re capcha</Title>
      <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem border-b border-b-neutral-800 pb-1rem'>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaSecretKey'>Captcha Secret Key</Label>
          <Input
            {...form.register("googleReCaptchaSecretKey")}
            type='text'
            placeholder='Enter Captcha Secret Key'
            id='feature-settings-googleReCaptchaSecretKey'
            isError={!!form.formState.errors.googleReCaptchaSecretKey}
          />
          <ErrorMessage>{form.formState.errors.googleReCaptchaSecretKey?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaSiteKey'>Captcha Site Key</Label>
          <Input
            {...form.register("googleReCaptchaSiteKey")}
            type='text'
            placeholder='Enter Captcha Site Key'
            id='feature-settings-googleReCaptchaSiteKey'
            isError={!!form.formState.errors.googleReCaptchaSiteKey}
          />
          <ErrorMessage>{form.formState.errors.googleReCaptchaSiteKey?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaStatus'>
            Enable Google Re capcha Status
          </Label>
          <SwitchInput
            {...form.register("googleReCaptchaStatus")}
            id='feature-settings-googleReCaptchaStatus'
            isError={!!form.formState.errors.googleReCaptchaStatus}
          />
          <ErrorMessage>{form.formState.errors.googleReCaptchaStatus?.message}</ErrorMessage>
        </div>
      </div>

      <Title>Swap Enable/Disable</Title>
      <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem border-b border-b-neutral-800 pb-1rem'>
        <div>
          <Label htmlFor='feature-settings-swapStatus'>Enable/Disable Swap Feature</Label>
          <SwitchInput
            {...form.register("swapStatus")}
            id='feature-settings-swapStatus'
            isError={!!form.formState.errors.swapStatus}
          />
          <ErrorMessage>{form.formState.errors.swapStatus?.message}</ErrorMessage>
        </div>
      </div>

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={false}>
          Save Changes
        </Button>
        <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FeatureSettingsForm;
