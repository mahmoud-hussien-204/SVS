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

import {fakeDataReferrals} from "@/fakeData";

import Title from "@/components/Title";

const MyReferralsList = () => {
  return (
    <TransitionPage>
      <Title>My Referrals</Title>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Level one</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Level Two</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Level Three</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataReferrals.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.level1}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.level2}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.level3}</TableBoxedLayoutTD>
            </TableBoxedLayoutTR>
          ))}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='flex items-center justify-between mt-2rem'>
        <PageLimit />
        <Pagination totalPages={5} />
      </div>
    </TransitionPage>
  );
};

export default MyReferralsList;
