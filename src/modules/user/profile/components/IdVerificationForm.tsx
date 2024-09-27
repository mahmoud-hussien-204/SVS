import ImageUploader from './ImageUplaoder'

import ErrorMessage from '@/components/ErrorMessage'

import useIDVerificationForm from '../hooks/useIDVerificationForm';

import { FormProvider } from 'react-hook-form';

import ModalHeader from '@/components/ModalHeader';

import ModalBody from '@/components/ModalBody';

import ModalFooter from '@/components/ModalFooter';

import useUserProfile from '../hooks/useUserProfile';

function IdVerificationForm() {
  const { handleSubmit, form, isPending } = useIDVerificationForm();
  const { data } = useUserProfile();

  return (
    <FormProvider {...form}>
      <form
        name='id-verification-form'
        id='id-verification-form'
        noValidate
        onSubmit={handleSubmit}
      >
        <ModalHeader title='ID Verification' />
        <ModalBody>
          <div className='mb-2rem grid grid-cols-2 gap-1.25rem'>
            <div>
              <div className='relative'>
                <ImageUploader name="file_two" title="Front Side" locale={!data?.nid_front.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_two?.message}</ErrorMessage>
            </div>
            <div>
              <div className='relative'>
                <ImageUploader name="file_three" title="Back Side" locale={!data?.nid_back.id} />
              </div>
              <ErrorMessage>{form.formState.errors.file_three?.message}</ErrorMessage>
            </div>
          </div>
        </ModalBody>

        {!data?.nid_back.id && <ModalFooter isLoading={isPending} title='Verify' />}
      </form>
    </FormProvider >
  )
}

export default IdVerificationForm