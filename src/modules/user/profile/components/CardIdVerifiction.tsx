import Status from '@/components/Status'
import useModal from '@/hooks/useModal'

interface IProps {
  title: string
  status: string
  imgSrc: string
  modalType: IModals
}

function CardIdVerifiction({ title, status, imgSrc, modalType }: IProps) {
  const { show } = useModal();

  const handelShowFormModal = () => {
    show(modalType);
  };

  return (
    <div className="grid place-items-center gap-4">
      <button onClick={handelShowFormModal} className="grid place-items-center h-52 w-64 bg-base-300 rounded-1rem">
        <img src={imgSrc} alt="id-verification" />
      </button>
      <span className="flex flex-col gap-2 items-center">
        <Status status={status} />
        <p>{title}</p>
      </span>
    </div>
  )
}

export default CardIdVerifiction