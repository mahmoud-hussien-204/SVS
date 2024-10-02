import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import CardIdVerifiction from "../components/CardIdVerifiction";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import IdVerificationForm from "../components/IdVerificationForm";

import {EnumModals} from "@/enums";

import PassportVerificationForm from "../components/PassportVerificationForm";

import DriverLicenseForm from "../components/DriverLicenseForm";
import useUserProfile from "../hooks/useUserProfile";
import {useCallback} from "react";

export const Component = () => {
  const {data} = useUserProfile();

  const getStatusName = useCallback((statusFront?: string, statusBack?: string): string => {
    if (typeof statusFront == "undefined" && typeof statusBack == "undefined")
      return "Not Submited";

    return statusFront as string;
  }, []);

  return (
    <ModalProvider>
      <TransitionPage>
        <Card>
          <Title>Select Your ID Type</Title>

          <div className='mt-6 flex w-full flex-wrap items-center justify-evenly gap-8 pb-6'>
            <CardIdVerifiction
              imgSrc='/nid.svg'
              status={getStatusName(
                data?.nid_front?.deposit_status,
                data?.nid_back?.deposit_status
              )}
              title='National ID Verification'
              modalType={EnumModals.idVerification}
            />

            <CardIdVerifiction
              imgSrc='/passport.svg'
              status={getStatusName(
                data?.pass_front?.deposit_status,
                data?.pass_back?.deposit_status
              )}
              title='Passport'
              modalType={EnumModals.passport}
            />

            <CardIdVerifiction
              imgSrc='/driving-license.svg'
              status={getStatusName(
                data?.drive_front?.deposit_status,
                data?.drive_back?.deposit_status
              )}
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
