import Button from "@/components/Button";

import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import {IUserData} from "../interfaces";

import Status from "@/components/Status";

import dayjs from "dayjs";

const ViewUserForm = ({hide, data}: IModalComponentProps) => {
  const userData = data as IUserData;

  return (
    <div>
      <ModalHeader title='View User' />
      <ModalBody>
        <div className='flex gap-1rem'>
          <img
            src='https://api.dicebear.com/9.x/dylan/svg?seed=Snuggles&hairColor=000000&mood=happy'
            alt={userData.userName}
            className='max-h-[9rem] rounded'
          />

          <div className='flex-1'>
            <div className='flex justify-between'>
              <div>
                <h3 className='mb-0.25rem text-18 capitalize'>
                  {userData.firstName} {userData.lastName}
                  <mark className='ms-0.5rem rounded-full bg-primary px-0.5rem text-14'>
                    {userData.role}
                  </mark>
                </h3>
                <h6 className='text-neutral-400'>{userData.email}</h6>
              </div>
              <Status status={userData.status} />
            </div>
            <h6 className='mb-0.25rem mt-1.25rem text-neutral-400'>
              Phone number: <span className='text-white'>{userData.phoneNumber}</span>
            </h6>
            <h6 className='text-neutral-400'>
              Created at:{" "}
              <span className='text-white'>
                {dayjs(userData.createdAt).format("MMMM D, YYYY h:mm A")}
              </span>
            </h6>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          type='button'
          className='btn-ghost text-neutral-400 hover:bg-transparent hover:text-white'
          onClick={hide}
        >
          Cancel
        </Button>
      </ModalFooter>
    </div>
  );
};

export default ViewUserForm;
