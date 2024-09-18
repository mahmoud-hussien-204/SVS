import {fakeDataBuyCoinOrders} from "@/fakeData";

import {
  TableBoxedLayoutActionButtonAccept,
  TableBoxedLayoutActionButtonReject,
  TableBoxedLayoutActions,
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Status from "@/components/Status";

import dayjs from "dayjs";

const BuyCoinOrdersList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Payable Coin</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Payment</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Date</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataBuyCoinOrders.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.payableCoin}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.paymentType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.address}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <Status status={item.status} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.date).format("MMMM D, YYYY h:mm A")}
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <TableBoxedLayoutActions>
                  <TableBoxedLayoutActionButtonAccept data={item} />
                  <TableBoxedLayoutActionButtonReject data={item} />
                </TableBoxedLayoutActions>
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
  );
};

export default BuyCoinOrdersList;
