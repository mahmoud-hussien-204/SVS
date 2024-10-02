import CopyText from "@/components/CopyText";

import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import QRCode from "react-qr-code";

interface IProps {
  success: boolean;
  message: string;
  data: {
    address: string;
  };
  payment_type: string;
  payment_coin_type: string;
  coin: number;
  payable: string;
}

const BuyCoinFormSuccess = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  console.log("data", data);

  return (
    <>
      <ModalHeader title='Request Submitted Successfully' />
      <ModalBody>
        <div className='flex items-center gap-1.25rem'>
          <div>
            <QRCode value={data?.data?.address || ""} size={150} />
          </div>
          <div>
            <h4 className='mb-0.25rem text-18 text-white'>Request Submitted Successfully</h4>
            <p className='mb-0.75rem'>
              Please send{" "}
              <strong>
                {data.payable} {data.payment_coin_type}
              </strong>{" "}
              with this address
            </p>
            <div className='mb-0.5rem flex items-start gap-0.5rem'>
              <h6>Address:</h6>
              <CopyText text={data.data.address} />
            </div>

            <div className='flex items-start gap-0.5rem'>
              <h6>Payable Coin:</h6>
              <h6>
                {data.payable} {data.payment_coin_type}
              </h6>
            </div>
          </div>
        </div>
      </ModalBody>
    </>
  );
};

export default BuyCoinFormSuccess;
