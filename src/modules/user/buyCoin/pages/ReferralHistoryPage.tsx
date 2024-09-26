import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Search from "@/components/Search";

import Status from "@/components/Status";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import TransitionPage from "@/components/TransitionPage";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import dayjs from "dayjs";

import {apiGetBuyCoinReferralHistory} from "../services";

export const Component = () => {
  usePageTitle("Buy Coin Referral History");

  const {limitSearchParams, pageSearchParams, searchSearchParams} = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () =>
      apiGetBuyCoinReferralHistory(pageSearchParams, limitSearchParams, searchSearchParams),
    queryKey: [
      "getBuyCoinReferralHistory",
      pageSearchParams,
      limitSearchParams,
      searchSearchParams,
    ],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;
  return (
    <TransitionPage>
      <div className='max-w-[450px]'>
        <Search placeholder='Search in the buy coin referral history' />
      </div>

      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Coin Amount</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Payment Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading
                ? Array.from({length: 10}).map((_, index) => (
                    <TableBoxedLayoutTR key={index} className='!bg-red-300'>
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                    </TableBoxedLayoutTR>
                  ))
                : data?.data.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.wallet.type}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={item.deposit_status} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                    </TableBoxedLayoutTR>
                  ))}
            </TableBoxedLayoutTBody>
          </TableBoxedLayoutContainer>

          <div className='mt-2rem flex items-center justify-between'>
            <PageLimit />
            <Pagination totalPages={totalPages} />
          </div>
        </Box>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "ReferralHistoryPage";
