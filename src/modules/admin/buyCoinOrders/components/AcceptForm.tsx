import ConfirmationForm from "@/components/ConfirmationForm";

interface IProps extends IModalComponentProps {
  data: {
    message: string;
    subTitle?: string;
  };
}

const AcceptForm = ({data}: IProps) => {
  return (
    <form noValidate>
      <ConfirmationForm isLoading={false} message={data.message} submitButtonTitle='Yes, Accept' />
    </form>
  );
};

export default AcceptForm;
