import Button from "@/components/Button";

import IconSendRequest from "@/components/icons/IconSendRequest";

import useModal from "@/hooks/useModal";

import { EnumModals } from "@/enums";
import { ICoin } from "../../wallets/interfaces";

const Head = ({ coins }: { coins: ICoin[] }) => {
  const { show } = useModal();
  return (
    <div className='flex items-center justify-end'>
      <Button type='button' onClick={() => show(EnumModals.add, coins)}>
        <IconSendRequest />
        Buy Coin
      </Button>
    </div>
  );
};

export default Head;
