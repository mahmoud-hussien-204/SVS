import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import Search from "@/components/Search";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import dayjs from "dayjs";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import useQuery from "@/hooks/useQuery";

import {apiGetSwapHistory} from "../services";

import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("Swap History");

  const {limitSearchParams, pageSearchParams, searchSearchParams} = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetSwapHistory(pageSearchParams, limitSearchParams, searchSearchParams),
    queryKey: ["swap-history", pageSearchParams, limitSearchParams, searchSearchParams],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  return (
    <TransitionPage>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in Swap History' />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>From Wallet</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>To Wallet</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Requested Amount</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Converted Amount</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Rate</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading ? (
                Array.from({length: 10}).map((_, index) => (
                  <TableBoxedLayoutTR key={index} className='!bg-red-300'>
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                  </TableBoxedLayoutTR>
                ))
              ) : data?.data && data.data.length > 0 ? (
                data?.data.map((item) => (
                  <TableBoxedLayoutTR key={item.id}>
                    <TableBoxedLayoutTD>{item.from_wallet_id}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.to_wallet_id}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.requested_amount}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.converted_amount}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.rate}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                    </TableBoxedLayoutTD>
                  </TableBoxedLayoutTR>
                ))
              ) : (
                <DataNotFound colSpan={6} />
              )}
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

Component.displayName = "SwapHistoryPage";
