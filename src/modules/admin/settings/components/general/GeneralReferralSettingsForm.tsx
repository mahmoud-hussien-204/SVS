import Label from "@/components/Label";
import useGeneralReferralSettingsForm from "../../hooks/general/useGeneralReferralSettingsForm";
import Input from "@/components/Input";
import ErrorMessage from "@/components/ErrorMessage";
import Button from "@/components/Button";

const GeneralReferralSettingsForm = () => {
  const {form, handleSubmit} = useGeneralReferralSettingsForm();

  return (
    <form
      noValidate
      id='general-referral-settings-form'
      name='general-referral-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid grid-cols-4 gap-1.25rem'>
        <div>
          <Label htmlFor='general-referral-settings-referralRewardForSignUp'>
            Referral reward for signUp
          </Label>
          <Input
            {...form.register("referralRewardForSignUp")}
            type='text'
            id='general-referral-settings-referralRewardForSignUp'
            placeholder='Referral reward for signUp'
            isError={!!form.formState.errors.referralRewardForSignUp}
          />
          <ErrorMessage>{form.formState.errors.referralRewardForSignUp?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level1'>Level 1 (%)</Label>
          <Input
            {...form.register("level1")}
            type='text'
            id='general-referral-settings-level1'
            placeholder='Level 1 (%)
'
            isError={!!form.formState.errors.level1}
          />
          <ErrorMessage>{form.formState.errors.level1?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level2'>Level 2 (%)</Label>
          <Input
            {...form.register("level2")}
            type='text'
            id='general-referral-settings-level2'
            placeholder='Level 2 (%)
'
            isError={!!form.formState.errors.level2}
          />
          <ErrorMessage>{form.formState.errors.level2?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level3'>Level 3 (%)</Label>
          <Input
            {...form.register("level3")}
            type='text'
            id='general-referral-settings-level3'
            placeholder='Level 3 (%)
'
            isError={!!form.formState.errors.level3}
          />
          <ErrorMessage>{form.formState.errors.level3?.message}</ErrorMessage>
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

export default GeneralReferralSettingsForm;
