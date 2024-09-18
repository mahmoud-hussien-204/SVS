import Box from "@/components/Box";

import CopyText from "@/components/CopyText";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Status from "@/components/Status";

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

import {fakeDataWithdrawalsRequests} from "@/fakeData";

import dayjs from "dayjs";

const DepositsRequestsList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Sender</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Receiver</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Fees</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Transaction ID</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataWithdrawalsRequests.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.sender}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.type}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <CopyText text={item.address} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <Status status={item.status} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.receiver}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.fees}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <CopyText text={item.transactionId} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.updateDate).format("MMMM D, YYYY h:mm A")}
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

export default DepositsRequestsList;
