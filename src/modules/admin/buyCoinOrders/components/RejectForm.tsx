import ConfirmationForm from "@/components/ConfirmationForm";

interface IProps extends IModalComponentProps {
  data: {
    message: string;
    subTitle?: string;
  };
}

const RejectForm = ({data}: IProps) => {
  return (
    <form noValidate>
      <ConfirmationForm isLoading={false} message={data.message} submitButtonTitle='Yes, Reject' />
    </form>
  );
};

export default RejectForm;
