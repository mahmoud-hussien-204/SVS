import TransitionPage from "@/components/TransitionPage";

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

import {fakeDataEarnings} from "@/fakeData";

import Title from "@/components/Title";

import dayjs from "dayjs";

import Status from "@/components/Status";

import DataNotFound from "@/components/DataNotFound";

const MyEarningsList = () => {
  // const {data} = useQuery({
  //   queryKey: ["user-referral-earnings"],
  //   queryFn: apiGetEarningsData,
  // });

  return (
    <TransitionPage>
      <Title>My Earnings</Title>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>From Child</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created At</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataEarnings.length > 0 ? (
            <DataNotFound colSpan={5} />
          ) : (
            fakeDataEarnings.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.fromChild}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.coinAmount}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.coinName}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.createdAt).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          )}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={1} />
      </div>
    </TransitionPage>
  );
};

export default MyEarningsList;
