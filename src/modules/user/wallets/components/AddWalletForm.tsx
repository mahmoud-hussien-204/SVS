import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import useAddWalletForm from "../hooks/useAddWalletForm";

import {fakeDataWallets} from "@/fakeData";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import {constantWalletType} from "../constants";

const AddWalletForm = () => {
  const {form, handleSubmit} = useAddWalletForm();

  return (
    <form noValidate name='add-wallet' id='add-wallet' onSubmit={handleSubmit}>
      <ModalHeader title='Add New Wallet' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='add-wallet-walletType'>Select Wallet Type</Label>
          <Select
            {...form.register("walletType")}
            options={constantWalletType}
            id='add-wallet-walletType'
            isError={!!form.formState.errors.walletType}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.walletType?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='add-wallet-name'>Wallet Name</Label>
          <Input
            type='text'
            {...form.register("walletName")}
            placeholder='Enter Wallet Name'
            id='add-wallet-name'
            isError={!!form.formState.errors.walletName}
          />
          <ErrorMessage>{form.formState.errors.walletName?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='add-wallet-coinType'>Select Coin Type</Label>
          <Select
            {...form.register("coinType")}
            options={fakeDataWallets}
            id='add-wallet-coinType'
            isError={!!form.formState.errors.walletType}
            defaultValue=''
          />
          <ErrorMessage>{form.formState.errors.walletType?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Add Wallet' />
    </form>
  );
};

export default AddWalletForm;
