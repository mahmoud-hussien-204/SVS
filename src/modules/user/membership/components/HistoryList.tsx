import Box from "@/components/Box";
import DataNotFound from "@/components/DataNotFound";
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
import {IMembershipHistoryData} from "../interfaces";

interface IProps {
  historyData: IMembershipHistoryData[];
  isLoading: boolean;
  totalPages: number;
}

function HistoryList({historyData, isLoading, totalPages}: IProps) {
  return (
    <div className='mt-2rem'>
      <Box>
        <TableBoxedLayoutContainer>
          <TableBoxedLayoutTHead>
            <TableBoxedLayoutTR>
              <TableBoxedLayoutTH>Member</TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Plan Name</TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Wallet Name </TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Bonus Amount </TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Coin Type </TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
              <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
            </TableBoxedLayoutTR>
          </TableBoxedLayoutTHead>

          <TableBoxedLayoutTBody>
            {isLoading ? (
              Array.from({length: 10}).map((_, index) => (
                <TableBoxedLayoutTR key={index}>
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                  <TableBoxedLayoutSkeleton />
                </TableBoxedLayoutTR>
              ))
            ) : historyData.length > 0 ? (
              historyData.map((item) => (
                <TableBoxedLayoutTR key={item.id}>
                  <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.plan.plan_name}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.wallet.name}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.bonus_amount}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.bonus_coin_type}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    <Status status={item.status} />
                  </TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                  </TableBoxedLayoutTD>
                </TableBoxedLayoutTR>
              ))
            ) : (
              <DataNotFound colSpan={7} />
            )}
          </TableBoxedLayoutTBody>
        </TableBoxedLayoutContainer>

        <div className='mt-2rem flex items-center justify-between'>
          <PageLimit />
          <Pagination totalPages={totalPages} />
        </div>
      </Box>
    </div>
  );
}

export default HistoryList;
