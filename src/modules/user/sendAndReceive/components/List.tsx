import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

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

import dayjs from "dayjs";

import { IRqquestCoinHistory } from "../interfaces";
import DataNotFound from "@/components/DataNotFound";

const List = ({ data, isLoading, totalPages }: { data: IRqquestCoinHistory[], isLoading: boolean, totalPages: number }) => {
  return (
    <Box>
      <TableBoxedLayoutContainer className="mt-2rem">
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
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => <TableBoxedLayoutTR key={index}>
              <TableBoxedLayoutSkeleton />
              <TableBoxedLayoutSkeleton />
              <TableBoxedLayoutSkeleton />
              <TableBoxedLayoutSkeleton />
              <TableBoxedLayoutSkeleton />
              <TableBoxedLayoutSkeleton />
            </TableBoxedLayoutTR>)
          ) : data.length > 0 ? data.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.sender_user_id}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.receiver_user_id}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coin_type}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <Status status={String(item.status)} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
              </TableBoxedLayoutTD>
            </TableBoxedLayoutTR>
          )) : <DataNotFound colSpan={6} />}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={totalPages} />
      </div>
    </Box>
  );
};

export default List;
