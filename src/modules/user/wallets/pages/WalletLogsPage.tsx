import Box from "@/components/Box";

import DataNotFound from "@/components/DataNotFound";

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

import useQuery from "@/hooks/useQuery";

import dayjs from "dayjs";

import {apiGetWalletLogs} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import PageFilterSelect from "@/components/PageFilterSelect";

import {Navigate} from "react-router";

import Status from "@/components/Status";

import {constantWalletLogsFilter} from "../constants";

import usePageTitle from "@/hooks/usePageTitle";

export const Component = () => {
  usePageTitle("Wallet Logs");

  const {idParams, filterSearchParams} = useApiUrlFilter();

  const tab = (filterSearchParams as "deposit" | "withdraw") || "deposit";

  const {isLoading, data} = useQuery({
    queryFn: () => apiGetWalletLogs(idParams, tab),
    queryKey: ["get-wallet-logs", idParams, tab],
    enabled: !!idParams,
  });

  if (!idParams) return <Navigate to='/user/my-wallets' replace />;

  return (
    <TransitionPage>
      <PageFilterSelect options={constantWalletLogsFilter} />
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Transaction Hash</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
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
                  </TableBoxedLayoutTR>
                ))
              ) : data?.histories && data.histories.length > 0 ? (
                data.histories.map((item) => (
                  <TableBoxedLayoutTR key={item.id}>
                    <TableBoxedLayoutTD>{item.address}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.transaction_id}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      <Status status={item.status} />
                    </TableBoxedLayoutTD>
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
        </Box>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "WalletLogsPage";
