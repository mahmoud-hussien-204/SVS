import ImageUploader from './ImageUplaoder'

import ErrorMessage from '@/components/ErrorMessage'

import useIDVerificationForm from '../hooks/useIDVerificationForm';

import { FormProvider } from 'react-hook-form';

import ModalHeader from '@/components/ModalHeader';

import ModalBody from '@/components/ModalBody';

import ModalFooter from '@/components/ModalFooter';

function IdVerificationForm() {
  const { handleSubmit, form } = useIDVerificationForm();
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
              {/* <Label htmlFor='phone-verification-form-input'>Phone Number</Label> */}
              <div className='relative'>
                <ImageUploader name="front_img" title="Front Side" locale />
              </div>
              <ErrorMessage>{form.formState.errors.front_img?.message}</ErrorMessage>
            </div>
            <div>
              {/* <Label htmlFor='phone-verification-form-input'>Phone Number</Label> */}
              <div className='relative'>
                <ImageUploader name="back_img" title="Back Side" locale />
              </div>
              <ErrorMessage>{form.formState.errors.back_img?.message}</ErrorMessage>
            </div>
          </div>
        </ModalBody>

        <ModalFooter isLoading={false} title='Verify' />
      </form>
    </FormProvider >
  )
}

export default IdVerificationForm