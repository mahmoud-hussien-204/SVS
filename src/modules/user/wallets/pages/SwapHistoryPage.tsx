import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import Search from "@/components/Search";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import {fakeDataSwapHistory} from "@/fakeData";

import dayjs from "dayjs";

export const Component = () => {
  usePageTitle("Swap History");
  return (
    <TransitionPage>
      <div className='w-[450px] max-w-full'>
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
              {fakeDataSwapHistory.map((item) => (
                <TableBoxedLayoutTR key={item.id}>
                  <TableBoxedLayoutTD>{item.fromWallet}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.toWallet}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.requestedAmount}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.convertedAmount}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.rate}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    {dayjs(item.createdAt).format("MMMM D, YYYY h:mm A")}
                  </TableBoxedLayoutTD>
                </TableBoxedLayoutTR>
              ))}
            </TableBoxedLayoutTBody>
          </TableBoxedLayoutContainer>

          <div className='mt-2rem flex items-center justify-between'>
            <PageLimit />
            <Pagination totalPages={5} />
          </div>
        </Box>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "SwapHistoryPage";
