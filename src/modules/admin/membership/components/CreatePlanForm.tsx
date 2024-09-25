import ModalHeader from "@/components/ModalHeader";

import CreateAndEditPlanForm from "./CreateAndEditPlanForm";

import ModalFooter from "@/components/ModalFooter";

import useCreatePlanForm from "../hooks/useCreatePlanForm";

const CreatePlanForm = () => {
  const {form, handleSubmit} = useCreatePlanForm();

  return (
    <form noValidate name='create-plan-form' id='create-plan-form' onSubmit={handleSubmit}>
      <ModalHeader title='Create New Plan' />
      <CreateAndEditPlanForm form={form} />
      <ModalFooter isLoading={false} title='Create Plan' />
    </form>
  );
};

export default CreatePlanForm;
