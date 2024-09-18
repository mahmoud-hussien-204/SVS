import ConfirmationForm from "@/components/ConfirmationForm";

import {IWithdrawalRequest} from "../interfaces";

type IProps = IWithdrawalRequest;

const RejectForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={false}
        message='Are you sure you want to reject this request?'
        submitButtonTitle='Yes, Reject'
      />
    </form>
  );
};

export default RejectForm;
