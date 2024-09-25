import ConfirmationForm from "@/components/ConfirmationForm";

import InterceptorHelper from "@/helpers/intercepterHelper";

import useMutation from "@/hooks/useMutation";

const DeleteBankForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as {path: string};

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: () => InterceptorHelper.intercept(data.path as string, {}, false),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banks-list"]});
        hide();
      },
    });
  };

  return (
    <form name='delete-bank' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this bank?'
        submitButtonTitle='Yes, Delete'
      />
    </form>
  );
};

export default DeleteBankForm;
