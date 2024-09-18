import ConfirmationForm from "@/components/ConfirmationForm";

import {IUserData} from "../interfaces";

type IProps = Pick<IUserData, "id">;

const SuspendForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <form noValidate name='delete-user-form' id='delete-user-form' onSubmit={handleSubmit}>
      <ConfirmationForm isLoading={false} message='Are you sure you want to Suspend this user?' />
    </form>
  );
};

export default SuspendForm;
