import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

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

import {fakeDataMyWallets} from "@/fakeData";

import dayjs from "dayjs";

import Search from "@/components/Search";

export const Component = () => {
  usePageTitle("Wallets");
  return (
    <TransitionPage>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search in wallets' />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Balance</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>User Name</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>User Email</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {fakeDataMyWallets.map((item) => (
                <TableBoxedLayoutTR key={item.id}>
                  <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.coinType}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.balance}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.userName}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.userEmail}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    {dayjs(item.updatedAt).format("MMMM D, YYYY h:mm A")}
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

Component.displayName = "WalletsPage";
