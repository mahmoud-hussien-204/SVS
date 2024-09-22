import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import useSendRequestForm from "../hooks/useSendRequestForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import useQuery from "@/hooks/useQuery";

import { apiGetCoinRequests } from "../services";

import { constantRequestCoinType } from "../constants";

import { ENUM_SEND_REQUEST_FORM_TYPE } from "../interfaces";

const SendRequest = () => {
  const { form, handleSubmit } = useSendRequestForm();

  const { data, isLoading } = useQuery({
    queryFn: apiGetCoinRequests,
    queryKey: ["get-user-coin-requests"],
  })

  const handelTypeOpthions = () => {
    return data?.wallets.map((data) => ({ label: data.name, value: data.id })) ?? []
  }

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

        {form.watch("type") == ENUM_SEND_REQUEST_FORM_TYPE.SEND_COIN && <div className='mb-1.25rem'>
          <Label htmlFor='send-request-wallet'>Select Your Wallet</Label>
          <Select
            {...form.register("wallet_id")}
            options={[{ label: "Select Type", value: "", disabled: true }, ...handelTypeOpthions()]}
            id='send-request-wallet'
            isError={!!form.formState.errors.wallet_id}
            defaultValue=''
            disabled={isLoading}
          />
          <ErrorMessage>{form.formState.errors.wallet_id?.message}</ErrorMessage>
        </div>}

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
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Send Request' />
    </form>
  );
};

export default SendRequest;
