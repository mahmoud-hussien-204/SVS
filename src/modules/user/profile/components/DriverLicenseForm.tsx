import ImageUploader from "./ImageUplaoder";

import ErrorMessage from "@/components/ErrorMessage";

import {FormProvider} from "react-hook-form";

import ModalHeader from "@/components/ModalHeader";

import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import useDriverLicenseForm from "../hooks/useDriverLicenseForm";
import useUserProfile from "../hooks/useUserProfile";

function DriverLicenseForm() {
  const {handleSubmit, form, isPending} = useDriverLicenseForm();
  const {data} = useUserProfile();
  return (
    <FormProvider {...form}>
      <form name='driver-license-form' id='driver-license-form' noValidate onSubmit={handleSubmit}>
        <ModalHeader title='Driver License' />
        <ModalBody>
          <div className='mb-2rem grid grid-cols-2 gap-1.25rem'>
            <div>
              <div className='relative'>
                <ImageUploader name='file_two' title='Front Side' locale={!data?.drive_front?.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_two?.message}</ErrorMessage>
            </div>
            <div>
              <div className='relative'>
                <ImageUploader name='file_three' title='Back Side' locale={!data?.drive_back?.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_three?.message}</ErrorMessage>
            </div>
          </div>
        </ModalBody>

        {!data?.drive_back?.id && <ModalFooter isLoading={isPending} title='Verify' />}
      </form>
    </FormProvider>
  );
}

export default DriverLicenseForm;
