import ImageUploader from "./ImageUplaoder";

import ErrorMessage from "@/components/ErrorMessage";

import {FormProvider} from "react-hook-form";

import ModalHeader from "@/components/ModalHeader";

import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import usePassportVerificationForm from "../hooks/usePassportVerificationForm";
import useUserProfile from "../hooks/useUserProfile";

function PassportVerificationForm() {
  const {handleSubmit, form, isPending} = usePassportVerificationForm();
  const {data} = useUserProfile();
  return (
    <FormProvider {...form}>
      <form
        name='passport-verification-form'
        id='passport-verification-form'
        noValidate
        onSubmit={handleSubmit}
      >
        <ModalHeader title='Passport Verification' />
        <ModalBody>
          <div className='mb-2rem grid grid-cols-2 gap-1.25rem'>
            <div>
              <div className='relative'>
                <ImageUploader name='file_two' title='Front Side' locale={!data?.pass_front?.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_two?.message}</ErrorMessage>
            </div>
            <div>
              <div className='relative'>
                <ImageUploader name='file_three' title='Back Side' locale={!data?.pass_back?.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_three?.message}</ErrorMessage>
            </div>
          </div>
        </ModalBody>

        {!data?.pass_back?.id && <ModalFooter isLoading={isPending} title='Verify' />}
      </form>
    </FormProvider>
  );
}

export default PassportVerificationForm;
