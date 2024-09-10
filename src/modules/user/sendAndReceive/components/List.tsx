import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Status from "@/components/Status";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import {fakeDataSentCoinHistory} from "@/fakeData";

import dayjs from "dayjs";

const List = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Sender</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Receiver</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataSentCoinHistory.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.sender}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.receiver}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinName}</TableBoxedLayoutTD>
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
  );
};

export default List;
