import Button from "@/components/Button";

import useGeneralKycSettingsForm from "../../hooks/general/useGeneralKycSettingsForm";

import Label from "@/components/Label";

import Select from "@/components/Select";

import {constantEnableAndDisablesOptions} from "@/constants";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralKycSettingsForm = () => {
  const {form, handleSubmit} = useGeneralKycSettingsForm();

  return (
    <form
      noValidate
      id='general-kyc-settings-form'
      name='general-kyc-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid grid-cols-4 gap-1.25rem'>
        <div>
          <Label htmlFor='general-kyc-settings-kycMandatory'>KYC mandatory</Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-kycMandatory'
            {...form.register("kycMandatory")}
          />
          <ErrorMessage>{form.formState.errors.kycMandatory?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-nidVerificationMandatory'>NID verification</Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-nidVerificationMandatory'
            {...form.register("nidVerificationMandatory")}
          />
          <ErrorMessage>{form.formState.errors.nidVerificationMandatory?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-drivingLicenseVerificationMandatory'>
            Driving license verification
          </Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-drivingLicenseVerificationMandatory'
            {...form.register("drivingLicenseVerificationMandatory")}
          />
          <ErrorMessage>
            {form.formState.errors.drivingLicenseVerificationMandatory?.message}
          </ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-passportVerificationMandatory'>
            Passport verification{" "}
          </Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-passportVerificationMandatory'
            {...form.register("passportVerificationMandatory")}
          />
          <ErrorMessage>
            {form.formState.errors.passportVerificationMandatory?.message}
          </ErrorMessage>
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

export default GeneralKycSettingsForm;
