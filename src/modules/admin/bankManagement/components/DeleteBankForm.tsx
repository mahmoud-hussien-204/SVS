import ConfirmationForm from "@/components/ConfirmationForm";

const DeleteBankForm = ({data}: IModalComponentProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form name='delete-bank' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={false}
        message='Are you sure you want to delete this bank?'
        submitButtonTitle='Yes, Delete'
      />
    </form>
  );
};

export default DeleteBankForm;
