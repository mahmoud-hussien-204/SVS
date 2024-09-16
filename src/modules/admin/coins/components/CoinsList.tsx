import {fakeDataCoinsList} from "@/fakeData";

import {
  TableBoxedLayoutActionButtonEdit,
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

import dayjs from "dayjs";

const CoinsList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Coin Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Minimum Withdraw Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Maximum Withdraw Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Fees</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataCoinsList.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.coinName}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.minWithdrawAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.maxWithdrawAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.feesPercentage}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <div>change</div>
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.updatedAt).format("MMMM D, YYYY h:mm A")}
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <TableBoxedLayoutActions>
                  <TableBoxedLayoutActionButtonEdit data={item} />
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

export default CoinsList;
