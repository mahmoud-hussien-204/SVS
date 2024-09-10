import Box from "@/components/Box";
import PageLimit from "@/components/PageLimit";
import Pagination from "@/components/Pagination";

import Search from "@/components/Search";
import Status from "@/components/Status";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import TransitionPage from "@/components/TransitionPage";

import {fakeDataBuyCoinHistory} from "@/fakeData";

import usePageTitle from "@/hooks/usePageTitle";

import dayjs from "dayjs";

export const Component = () => {
  usePageTitle("Buy Coin Referral History");
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
                <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Coin Amount</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Payment Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {fakeDataBuyCoinHistory.map((item) => (
                <TableBoxedLayoutTR key={item.id}>
                  <TableBoxedLayoutTD>{item.address}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.coinAmount}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.paymentType}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    <Status status={item.status} />
                  </TableBoxedLayoutTD>
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

Component.displayName = "ReferralHistoryPage";
