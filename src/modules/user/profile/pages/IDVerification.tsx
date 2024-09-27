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

export const Component = () => {
  return (
    <ModalProvider>
      <TransitionPage>
        <Card>
          <Title>ID Verification</Title>

          <div className='mt-6 flex w-full flex-wrap items-center justify-evenly gap-8 pb-6'>
            <CardIdVerifiction
              imgSrc='/nid.svg'
              status='Approved'
              title='National ID Verification'
              modalType={EnumModals.idVerification}
            />

            <CardIdVerifiction
              imgSrc='/passport.svg'
              status='Pending'
              title='Passport'
              modalType={EnumModals.passport}
            />

            <CardIdVerifiction
              imgSrc='/driving-license.svg'
              status='Pending'
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
