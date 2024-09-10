import ErrorMessage from "@/components/ErrorMessage";

import TransitionPage from "@/components/TransitionPage";

import useProfileGlobalSettings from "../hooks/useProfleGlobalSettings";

import Select from "@/components/Select";

import {constantLanguage} from "@/constants";

import Label from "@/components/Label";

import Button from "@/components/Button";

import Card from "@/components/Card";

export const Component = () => {
  const {form, handleSubmit} = useProfileGlobalSettings();

  return (
    <TransitionPage>
      <Card>
        <form
          noValidate
          onSubmit={handleSubmit}
          name='global-settings-form'
          id='global-settings-form'
          className='w-full max-w-[400px]'
        >
          <div className='mb-1.25rem'>
            <Label htmlFor='global-settings-form-language'>Select Language</Label>
            <Select options={constantLanguage} defaultValue='' id='global-settings-form-language' />
            <ErrorMessage>{form.formState.errors.language?.message}</ErrorMessage>
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
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GlobalSettingsPage";
