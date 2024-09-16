import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import UsersList from "../components/UsersList";

import Modal from "@/components/Modal";

import ConfirmationForm from "@/components/ConfirmationForm";

import ViewUserForm from "../components/ViewUserForm";

import EditUserForm from "../components/EditUserForm";

import AddUserForm from "../components/AddUserForm";

import SuspendForm from "../components/SuspendForm";

export const Component = () => {
  usePageTitle("Users List");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <UsersList />
        </div>
      </TransitionPage>

      <Modal
        view={ViewUserForm}
        edit={EditUserForm}
        add={AddUserForm}
        suspended={SuspendForm}
        confirmation={ConfirmationForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "UsersPage";
