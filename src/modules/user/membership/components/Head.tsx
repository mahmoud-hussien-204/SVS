import Button from "@/components/Button";

import IconSendReceive from "@/components/icons/IconSendReceive";

import Search from "@/components/Search";

import { EnumModals } from "@/enums";

import useModal from "@/hooks/useModal";

import { useLocation } from "react-router-dom";
import { IWallet } from "../interfaces";

const Head = ({ wallets }: { wallets: IWallet[] }) => {
  const { show } = useModal();

  const { pathname } = useLocation();

  return (
    <div className='flex items-center justify-between'>
      {pathname.endsWith("membership-plans") ? (
        <div></div>
      ) : (
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in membership bonus history' />
        </div>
      )}
      <Button type='button' onClick={() => show(EnumModals.transfer, wallets)}>
        <IconSendReceive />
        Transfer Coin
      </Button>
    </div>
  );
};

export default Head;
