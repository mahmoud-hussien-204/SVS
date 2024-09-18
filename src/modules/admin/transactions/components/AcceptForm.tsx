import ConfirmationForm from "@/components/ConfirmationForm";

import {IWithdrawalRequest} from "../interfaces";

type IProps = IWithdrawalRequest;

const AcceptForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={false}
        message='Are you sure you want to accept this request?'
        submitButtonTitle='Yes, Accept'
      />
    </form>
  );
};

export default AcceptForm;
