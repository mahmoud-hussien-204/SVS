import Button from "@/components/Button";

import useGeneralSettingsOtherForm from "../../hooks/general/useGeneralSettingsOtherForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralSettingsOtherForm = () => {
  const {form, handleSubmit} = useGeneralSettingsOtherForm();

  return (
    <form
      noValidate
      id='general-settings-other-form'
      name='general-settings-other-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid grid-cols-2 gap-1.25rem'>
        <div>
          <Label htmlFor='general-settings-other-minimum-amount'>
            Admin send default coin minimum
          </Label>
          <Input
            {...form.register("minimumAmount")}
            type='text'
            id='general-settings-other-minimum-amount'
            placeholder='Admin send default coin minimum'
            isError={!!form.formState.errors.minimumAmount}
          />
          <ErrorMessage>{form.formState.errors.minimumAmount?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-other-maximum-amount'>
            Admin send default coin maximum
          </Label>
          <Input
            {...form.register("maximumAmount")}
            type='text'
            id='general-settings-other-maximum-amount'
            placeholder='Admin send default coin maximum'
            isError={!!form.formState.errors.maximumAmount}
          />
          <ErrorMessage>{form.formState.errors.maximumAmount?.message}</ErrorMessage>
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

export default GeneralSettingsOtherForm;
