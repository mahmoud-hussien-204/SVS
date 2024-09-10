import ModalBody from "./ModalBody";

import ModalFooter from "./ModalFooter";

import ModalHeader from "./ModalHeader";

const ConfirmationForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as {message: string};

  return (
    <form noValidate>
      <ModalHeader title='Confirmation' />
      <ModalBody>
        <h5 className='mb-0.5rem text-18 text-white'>{data.message}</h5>
        <h6 className='text-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h6>
      </ModalBody>
      <ModalFooter isLoading={false} title='Yes, Confirm' />
    </form>
  );
};

export default ConfirmationForm;
