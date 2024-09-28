import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import Modal from "@/components/Modal";

import TransferCoinForm from "../components/TransferCoinForm";

import { fakeDataSwapHistory } from "@/fakeData";

import Box from "@/components/Box";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import dayjs from "dayjs";

import useQuery from "@/hooks/useQuery";

import { apiGetMemberShipHistory, apiGetMemberShipPlans } from "../services";
import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("My Membership");

  const { data: walletsData } = useQuery({
    queryFn: apiGetMemberShipPlans,
    queryKey: ["membership-plans"],
  });

  const { data } = useQuery({
    queryFn: apiGetMemberShipHistory,
    queryKey: ["membership-plans-history"],
  });

  console.log(data);

  return (
    <ModalProvider>
      <TransitionPage>
        <Head wallets={walletsData?.wallets || []} />

        <div className='mt-2rem'>
          <Box>
            <TableBoxedLayoutContainer>
              <TableBoxedLayoutTHead>
                <TableBoxedLayoutTR>
                  <TableBoxedLayoutTH>From Wallet</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>To Wallet</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Requested Amount</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Converted Amount</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Rate</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
                </TableBoxedLayoutTR>
              </TableBoxedLayoutTHead>

              <TableBoxedLayoutTBody>
                {fakeDataSwapHistory.length > 0 ? (
                  fakeDataSwapHistory.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.fromWallet}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.toWallet}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.requestedAmount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.convertedAmount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.rate}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.createdAt).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                    </TableBoxedLayoutTR>
                  ))
                ) : (
                  <DataNotFound colSpan={6} />
                )}
              </TableBoxedLayoutTBody>
            </TableBoxedLayoutContainer>

            <div className='mt-2rem flex items-center justify-between'>
              <PageLimit />
              <Pagination totalPages={5} />
            </div>
          </Box>
        </div>
      </TransitionPage>
      <Modal transfer={TransferCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "MemberShipHistoryPage";
