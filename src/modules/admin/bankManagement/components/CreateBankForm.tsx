import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useCreateBankForm from "../hooks/useCreateBankForm";

import CreateAndEditBankForm from "./CreateAndEditBankForm";

const CreateBankForm = () => {
  const {form, handleSubmit} = useCreateBankForm();

  return (
    <form
      noValidate
      name='create-bank-account-form'
      id='create-bank-account-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Create new bank' />
      <CreateAndEditBankForm form={form} />
      <ModalFooter isLoading={false} title='Create Bank' />
    </form>
  );
};

export default CreateBankForm;
