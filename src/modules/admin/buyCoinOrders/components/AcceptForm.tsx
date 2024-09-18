import ConfirmationForm from "@/components/ConfirmationForm";

interface IProps {
  message: string;
  subTitle?: string;
}

const AcceptForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  return (
    <form noValidate>
      <ConfirmationForm isLoading={false} message={data.message} submitButtonTitle='Yes, Accept' />
    </form>
  );
};

export default AcceptForm;
