import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";
import Status from "@/components/Status";
import dayjs from "dayjs";
import Box from "@/components/Box";
import PageLimit from "@/components/PageLimit";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import {apiGetGasSentHistory} from "../services";
import CopyText from "@/components/CopyText";

export const Component = () => {
  usePageTitle("Gas Sent History");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => apiGetGasSentHistory(page, limit, search),
    queryKey: ["admin-get-gas-sent", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <TransitionPage>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search in Bonus Distribution' />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Deposit ID</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Amount </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Base Coin Type </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>From Address</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>To Address</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>TX Hash</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Created AT</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading
                ? Array.from({length: 10}).map((_, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                    </TableBoxedLayoutTR>
                  ))
                : data?.data.map((item, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutTD>{item.deposit_id}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.coin_type}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <CopyText text={item.admin_address} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <CopyText text={item.user_address} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <CopyText text={item.transaction_hash} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={String(item.deposit_status)} />
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

Component.displayName = "GasSentHistory";
