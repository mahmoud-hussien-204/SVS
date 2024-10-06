import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import useSendRequestForm from "../hooks/useSendRequestForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import useQuery from "@/hooks/useQuery";

import {apiGetCoinRequests} from "../services";

import {constantRequestCoinType} from "../constants";

import {ENUM_SEND_REQUEST_FORM_TYPE} from "../interfaces";

import Note from "@/components/Note";

const SendRequest = () => {
  const {form, handleSubmit, isPending} = useSendRequestForm();

  const {data, isLoading} = useQuery({
    queryFn: apiGetCoinRequests,
    queryKey: ["get-user-coin-requests"],
  });

  const handelTypeOptions = () => {
    return data?.wallets.map((data) => ({label: data.name, value: data.id})) ?? [];
  };

  return (
    <form noValidate name='send-request' id='send-request' onSubmit={handleSubmit}>
      <ModalHeader title='Send Request' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-wallet'>Select Type</Label>
          <Select
            {...form.register("type")}
            options={constantRequestCoinType}
            id='send-request-wallet'
            isError={!!form.formState.errors.type}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.type?.message}</ErrorMessage>
        </div>

        {form.watch("type") == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN && (
          <div className='mb-1.25rem'>
            <Label htmlFor='send-request-wallet'>Select Your Wallet</Label>
            <Select
              {...form.register("wallet_id")}
              options={[{label: "Select Type", value: "", disabled: true}, ...handelTypeOptions()]}
              id='send-request-wallet'
              isError={!!form.formState.errors.wallet_id}
              defaultValue=''
              disabled={isLoading}
            />
            <ErrorMessage>{form.formState.errors.wallet_id?.message}</ErrorMessage>
          </div>
        )}

        <div className='mb-1.25rem'>
          <Label htmlFor='send-request-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter amount'
            id='send-request-amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
          <Note>
            Minimum amount : {data?.coin.minimum_withdrawal} {data?.coin.name} - Maximum amount :{" "}
            {data?.coin.maximum_withdrawal} {data?.coin.name}
          </Note>
        </div>

        <div>
          <Label htmlFor='send-request-email'>User Email</Label>
          <Input
            type='email'
            {...form.register("email")}
            placeholder='Enter user email'
            id='send-request-email'
            isError={!!form.formState.errors.email}
          />
          <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
          {form.watch("type") == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN ? (
            <Note>
              Note : Input user email where you want to send coin. Coin will send to his/her primary
              wallet.
            </Note>
          ) : (
            <Note>Note : Input user email where you want to send request for coin. </Note>
          )}
        </div>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Send Request' />
    </form>
  );
};

export default SendRequest;
