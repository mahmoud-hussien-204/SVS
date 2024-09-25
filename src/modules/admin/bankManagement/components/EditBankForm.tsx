import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditBankForm from "../hooks/useEditBankForm";

import CreateAndEditBankForm from "./CreateAndEditBankForm";

const EditBankForm = () => {
  const {form, handleSubmit} = useEditBankForm();

  return (
    <form
      noValidate
      name='edit-bank-account-form'
      id='edit-bank-account-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Update Bank' />
      <CreateAndEditBankForm form={form} />
      <ModalFooter isLoading={false} title='Update Bank' />
    </form>
  );
};

export default EditBankForm;
