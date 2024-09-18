import ConfirmationForm from "@/components/ConfirmationForm";

interface IProps {
  message: string;
  subTitle?: string;
}

const RejectForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;
  return (
    <form noValidate>
      <ConfirmationForm isLoading={false} message={data.message} submitButtonTitle='Yes, Reject' />
    </form>
  );
};

export default RejectForm;
