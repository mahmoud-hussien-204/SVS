import ConfirmationForm from "@/components/ConfirmationForm";

import {IPendingWithdrawal} from "../interfaces";
import useMutation from "@/hooks/useMutation";
import InterceptorHelper from "@/helpers/intercepterHelper";

type IProps = IPendingWithdrawal;

const RejectForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: () => InterceptorHelper.intercept(data.action.Reject, {}, false),
    mutationKey: ["acceptTransaction"],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-withdrawal-requests"]});
        hide();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to reject this request?'
        submitButtonTitle='Yes, Reject'
      />
    </form>
  );
};

export default RejectForm;
