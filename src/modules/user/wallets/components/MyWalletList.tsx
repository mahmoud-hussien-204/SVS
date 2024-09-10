import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import {
  TableBoxedLayoutActionButtonDeposit,
  TableBoxedLayoutActionButtonMakePrimary,
  TableBoxedLayoutActionButtonSwap,
  TableBoxedLayoutActionButtonWithdraw,
  TableBoxedLayoutActions,
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import {fakeDataMyWallets} from "@/fakeData";

import dayjs from "dayjs";

const MyWalletList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Balance</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataMyWallets.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.balance}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.updatedAt).format("MMMM D, YYYY h:mm A")}
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <TableBoxedLayoutActions>
                  <TableBoxedLayoutActionButtonDeposit />
                  <TableBoxedLayoutActionButtonWithdraw />
                  <TableBoxedLayoutActionButtonSwap />
                  <TableBoxedLayoutActionButtonMakePrimary />
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

export default MyWalletList;
