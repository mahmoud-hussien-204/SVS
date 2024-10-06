import Box from "@/components/Box";

import {
  TableBoxedLayoutActionButtonDeposit,
  TableBoxedLayoutActionButtonSwap,
  TableBoxedLayoutActionButtonViewLink,
  TableBoxedLayoutActionButtonWithdraw,
  TableBoxedLayoutActions,
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import dayjs from "dayjs";

import {IWallet} from "../interfaces";

import Pagination from "@/components/Pagination";

import PageLimit from "@/components/PageLimit";

import DataNotFound from "@/components/DataNotFound";

interface IProps {
  Wallets: IWallet[];
  isLoading: boolean;
  totalPages: number;
}
const MyWalletList = ({Wallets, isLoading, totalPages}: IProps) => {
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
          {isLoading ? (
            Array.from({length: 5}).map((_, index) => (
              <TableBoxedLayoutTR key={index}>
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
              </TableBoxedLayoutTR>
            ))
          ) : Wallets.length > 0 ? (
            Wallets.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.coin_type}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{Number(item.balance).toFixed(2)}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.updated_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutActions>
                    <TableBoxedLayoutActionButtonDeposit data={item} />
                    <TableBoxedLayoutActionButtonWithdraw data={item} />
                    <TableBoxedLayoutActionButtonViewLink
                      to={`/user/my-wallets-wallet-logs?id=${item.id}`}
                    />
                    <TableBoxedLayoutActionButtonSwap data={item} />
                  </TableBoxedLayoutActions>
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          ) : (
            <DataNotFound colSpan={5} />
          )}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={totalPages} />
      </div>
    </Box>
  );
};

export default MyWalletList;
