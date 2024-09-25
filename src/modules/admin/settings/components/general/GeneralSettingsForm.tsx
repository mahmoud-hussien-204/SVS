import Button from "@/components/Button";

import useGeneralSettingsForm from "../../hooks/general/useGeneralSettingsForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Select from "@/components/Select";

import {constantLanguage} from "@/constants";

const GeneralSettingsForm = () => {
  const {form, handleSubmit} = useGeneralSettingsForm();

  return (
    <form
      noValidate
      id='general-settings-form'
      name='general-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid grid-cols-3 gap-1.25rem'>
        <div>
          <Label htmlFor='general-settings-language'>Select Language</Label>
          <Select
            options={constantLanguage}
            defaultValue=''
            id='global-settings-form-language'
            {...form.register("language")}
          />
          <ErrorMessage>{form.formState.errors.language?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-company-name'>Company Name</Label>
          <Input
            {...form.register("companyName")}
            type='text'
            id='general-settings-company-name'
            placeholder='Company Name'
            isError={!!form.formState.errors.companyName}
          />
          <ErrorMessage>{form.formState.errors.companyName?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-numberOfConfirmation'>
            Number of confirmation for Notifier deposit
          </Label>
          <Input
            {...form.register("numberOfConfirmation")}
            type='text'
            id='general-settings-numberOfConfirmation'
            placeholder='Number of confirmation'
            isError={!!form.formState.errors.numberOfConfirmation}
          />
          <ErrorMessage>{form.formState.errors.numberOfConfirmation?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-baseCoinType'>Coin Payment Base Coin Type</Label>
          <Input
            {...form.register("baseCoinType")}
            type='text'
            id='general-settings-baseCoinType'
            placeholder='Coin Payment Base Coin Type'
            isError={!!form.formState.errors.baseCoinType}
          />
          <ErrorMessage>{form.formState.errors.baseCoinType?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-copyRightText'>Copyright Text</Label>
          <Input
            {...form.register("copyRightText")}
            type='text'
            id='general-settings-copyRightText'
            placeholder='Copyright Text'
            isError={!!form.formState.errors.copyRightText}
          />
          <ErrorMessage>{form.formState.errors.copyRightText?.message}</ErrorMessage>
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

export default GeneralSettingsForm;
