import useModal from "@/hooks/useModal";

import Button from "./Button";

interface IPropsBase {
  isLoading?: boolean;
  title?: string;
  children?: React.ReactNode;
}

interface IPropsWithChildren extends IPropsBase {
  children: React.ReactNode;
  isLoading?: boolean;
  title?: string;
}

// If children are not provided, isLoading and title are required
interface IPropsWithoutChildren extends IPropsBase {
  children?: undefined;
  isLoading: boolean;
  title: string;
}

type Props = IPropsWithChildren | IPropsWithoutChildren;

const ModalFooter = (props: Props) => {
  const {hide} = useModal();

  return (
    <div className='mt-1rem flex items-center justify-end gap-1rem'>
      {props?.children ? (
        props.children
      ) : (
        <>
          <Button
            disabled={props.isLoading}
            type='button'
            className='btn-ghost text-neutral-400 hover:bg-transparent hover:text-white'
            isLoading={props.isLoading}
            onClick={hide}
          >
            Cancel
          </Button>
          <Button disabled={props.isLoading} type='submit' className='min-w-[100px]'>
            {props.title}
          </Button>
        </>
      )}
    </div>
  );
};

export default ModalFooter;
