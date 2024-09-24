import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import UsersList from "../components/UsersList";

import Modal from "@/components/Modal";

import DeleteForm from "../components/DeleteForm";

import ViewUserForm from "../components/ViewUserForm";

import EditUserForm from "../components/EditUserForm";

import AddUserForm from "../components/AddUserForm";

import SuspendForm from "../components/SuspendForm";
import useQuery from "@/hooks/useQuery";
import {apiGetUsers} from "../services";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import {ENUM_USERS_STATUS} from "../enums";

export const Component = () => {
  usePageTitle("Users List");

  const {filterSearchParams} = useApiUrlFilter();
  const type = filterSearchParams as ENUM_USERS_STATUS;

  const {data} = useQuery({
    queryFn: () => apiGetUsers(type),
    queryKey: ["admin-users", type],
  });

  console.log(data);

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <UsersList users={data?.data || []} />
        </div>
      </TransitionPage>

      <Modal
        view={ViewUserForm}
        edit={EditUserForm}
        add={AddUserForm}
        suspended={SuspendForm}
        delete={DeleteForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "UsersPage";
