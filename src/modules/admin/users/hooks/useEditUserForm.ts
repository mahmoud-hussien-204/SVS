import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IAddUserForm, IUserData} from "../interfaces";

import * as Yup from "yup";
import {getIdFromUrl} from "@/helpers";
import useMutation from "@/hooks/useMutation";
import {apiUpdateUser} from "../services";
import {useQueryClient} from "@tanstack/react-query";

const schema: Yup.ObjectSchema<IAddUserForm> = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("First name is required"),
  email: Yup.string().email("Enter a valid email").required("email is required"),
  phone: Yup.string().required("Phone number is required"),
  role: Yup.number().optional(),
});

const useEditUserForm = () => {
  const {hide, data} = useModal();

  const userData = data as IUserData;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: (data: any) => apiUpdateUser(data),
    mutationKey: ["admin-update-user"],
  });

  const form = useForm<IAddUserForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email: userData?.email || "",
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      phone: userData?.phone || "",
    },
  });

  const handleSubmit = form.handleSubmit((values: IAddUserForm) => {
    mutate(
      {...values, id: getIdFromUrl(userData.action.Edit)},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["admin-get-users"]});
          hide();
        },
      }
    );
  });

  return {form, handleSubmit, isPending};
};

export default useEditUserForm;
