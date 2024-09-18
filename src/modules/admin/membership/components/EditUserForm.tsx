import ModalHeader from "@/components/ModalHeader";

import AddAndEditUserForm from "./AddAndEditUserForm";

import ModalFooter from "@/components/ModalFooter";

import useEditUserForm from "../hooks/useEditUserForm";

const EditUserForm = () => {
  const {form, handleSubmit} = useEditUserForm();

  return (
    <form noValidate name='add-user-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Edit User' />
      <AddAndEditUserForm form={form} />
      <ModalFooter isLoading={false} title='Update User' />
    </form>
  );
};

export default EditUserForm;
