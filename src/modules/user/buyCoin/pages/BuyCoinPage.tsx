import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import {apiGetBuyCoin} from "../services";

import TransitionPage from "@/components/TransitionPage";

import BuyCoinForm from "../components/BuyCoinForm";
import TodayCoinRate from "../components/TodayCoinRate";

export const Component = () => {
  usePageTitle("Buy Coin");
  const {data} = useQuery({
    queryFn: apiGetBuyCoin,
    queryKey: ["user-buy-coin"],
  });

  return (
    <TransitionPage>
      <div className='grid grid-cols-2 gap-3rem px-8'>
        <BuyCoinForm coins={data?.coins || []} />

        <TodayCoinRate />
      </div>
    </TransitionPage>
  );
};

Component.displayName = "BuyCoinPage";
