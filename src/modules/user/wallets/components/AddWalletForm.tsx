import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import useAddWalletForm from "../hooks/useAddWalletForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import { constantWalletType } from "../constants";

import { ICoin } from "../interfaces";

import { useCallback } from "react";

const AddWalletForm = ({ data }: IModalComponentProps) => {
  const { form, handleSubmit, isPending } = useAddWalletForm();

  const coins = data as ICoin[]

  const handelOpthions = useCallback(() => {
    return coins?.map((data) => {
      return {
        label: data.name,
        value: data.type
      }
    })
  }, [coins])

  return (
    <form noValidate name='add-wallet' id='add-wallet' onSubmit={handleSubmit}>
      <ModalHeader title='Add New Wallet' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='add-wallet-walletType'>Select Wallet Type</Label>
          <Select
            {...form.register("type")}
            options={constantWalletType}
            id='add-wallet-walletType'
            isError={!!form.formState.errors.type}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.type?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='add-wallet-name'>Wallet Name</Label>
          <Input
            type='text'
            {...form.register("wallet_name")}
            placeholder='Enter Wallet Name'
            id='add-wallet-name'
            isError={!!form.formState.errors.wallet_name}
          />
          <ErrorMessage>{form.formState.errors.wallet_name?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='add-wallet-coinType'>Select Coin Type</Label>
          <Select
            {...form.register("coin_type")}
            options={handelOpthions()}
            id='add-wallet-coinType'
            isError={!!form.formState.errors.coin_type}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.coin_type?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Add Wallet' />
    </form>
  );
};

export default AddWalletForm;
