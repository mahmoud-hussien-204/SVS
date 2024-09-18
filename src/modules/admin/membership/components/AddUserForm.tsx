import ModalHeader from "@/components/ModalHeader";

import AddAndEditUserForm from "./AddAndEditUserForm";

import ModalFooter from "@/components/ModalFooter";

import useAddUserForm from "../hooks/useAddUserForm";

const AddUserForm = () => {
  const {form, handleSubmit} = useAddUserForm();

  return (
    <form noValidate name='add-user-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Create New User' />
      <AddAndEditUserForm form={form} />
      <ModalFooter isLoading={false} title='Add New User' />
    </form>
  );
};

export default AddUserForm;
