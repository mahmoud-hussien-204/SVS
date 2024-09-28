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

import {fakeDataReferences} from "@/fakeData";

import Title from "@/components/Title";

import dayjs from "dayjs";

import DataNotFound from "@/components/DataNotFound";

const MyReferencesList = () => {
  return (
    <TransitionPage>
      <Title>My References</Title>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Full Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Level</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Joining Date</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Balance</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataReferences.length > 0 ? (
            <DataNotFound colSpan={5} />
          ) : (
            fakeDataReferences.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.fullName}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.level}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.joiningDate).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.balance}</TableBoxedLayoutTD>
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

export default MyReferencesList;
