import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IWallet, IWithdrawForm} from "../interfaces";

import useModal from "@/hooks/useModal";

import {apiGetWalletDetailsWithdraw, apiWithdrawWallet} from "../services";

import useMutation from "@/hooks/useMutation";

import useQuery from "@/hooks/useQuery";

const useWithdrawForm = () => {
  const {hide, data} = useModal();

  const walletData = data as IWallet;

  const {data: walletDetails, isLoading} = useQuery({
    queryFn: () => apiGetWalletDetailsWithdraw(walletData?.id),
    queryKey: ["wallet-details-deposits", walletData?.id],
    enabled: Boolean(walletData?.id),
  });

  const schema: Yup.ObjectSchema<IWithdrawForm> = Yup.object().shape({
    address: Yup.string().required("Wallet address is required"),
    amount: Yup.number()
      .required("Please enter wallet name")
      .typeError("Amount must be a number")
      .moreThan(0, "Amount must be greater than 0"),
    message: Yup.string().optional(),
    wallet_id: Yup.number().required("Please select wallet"),
    code: Yup.string().when("wallet_id", () => {
      if (walletDetails && walletDetails["2fa_enabled"])
        return Yup.string().required("2FA code is required");

      return Yup.string().optional();
    }),
  });

  const form = useForm<IWithdrawForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      wallet_id: walletData.id,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiWithdrawWallet,
    mutationKey: ["user-withdraw-wallet"],
  });

  const handleSubmit = form.handleSubmit((values: IWithdrawForm) => {
    mutate(values, {
      onSuccess: () => {
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending, walletDetails, isLoading};
};

export default useWithdrawForm;
