import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import CardIdVerifiction from "../components/CardIdVerifiction";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import IdVerificationForm from "../components/IdVerificationForm";

import { EnumModals } from "@/enums";

import PassportVerificationForm from "../components/PassportVerificationForm";

import DriverLicenseForm from "../components/DriverLicenseForm";
import useUserProfile from "../hooks/useUserProfile";

export const Component = () => {
  const { data } = useUserProfile();

  return (
    <ModalProvider>
      <TransitionPage>
        <Card>
          <Title>Select Your ID Type</Title>

          <div className='mt-6 flex w-full flex-wrap items-center justify-evenly gap-8 pb-6'>
            <CardIdVerifiction
              imgSrc='/nid.svg'
              status={(data?.nid_front.status && data?.nid_back.status) === 1 ? "Verified" : "Pending"}
              title='National ID Verification'
              modalType={EnumModals.idVerification}
            />

            <CardIdVerifiction
              imgSrc='/passport.svg'
              status={(data?.pass_front.status && data?.pass_back.status) === 1 ? "Verified" : "Pending"}

              title='Passport'
              modalType={EnumModals.passport}
            />

            <CardIdVerifiction
              imgSrc='/driving-license.svg'
              status={(data?.drive_front.status === 1 && data?.drive_back.status === 1) ? "Verified" : "Pending"}

              title='Driving License'
              modalType={EnumModals.driverLicense}
            />
          </div>
        </Card>
      </TransitionPage>

      <Modal
        idVerification={IdVerificationForm}
        passport={PassportVerificationForm}
        driverLicense={DriverLicenseForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "IDVerification";
