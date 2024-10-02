import ErrorMessage from "@/components/ErrorMessage";

import TransitionPage from "@/components/TransitionPage";

import useProfileGlobalSettings from "../hooks/useProfleGlobalSettings";

import Select from "@/components/Select";

import Label from "@/components/Label";

import Button from "@/components/Button";

import Card from "@/components/Card";

import useUserProfile from "../hooks/useUserProfile";

import {useCallback} from "react";

export const Component = () => {
  const {form, handleSubmit, isPending} = useProfileGlobalSettings();
  const countries = useUserProfile().data?.countries;

  const getCountries = useCallback(() => {
    const arr = [{value: "", label: "Select Country", disabled: true}];
    if (countries) {
      for (const key in countries) {
        arr.push({value: key, label: countries[key], disabled: false});
      }
    }

    return arr;
  }, [countries]);

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
            <Select
              options={getCountries()}
              defaultValue=''
              id='global-settings-form-language'
              {...form.register("lang")}
            />
            <ErrorMessage>{form.formState.errors.lang?.message}</ErrorMessage>
          </div>
          <div className='flex items-center gap-0.5rem'>
            <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
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
