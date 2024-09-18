import {fakeDataPlansList} from "@/fakeData";

import Status from "@/components/Status";

import {
  TableBoxedLayoutActionButtonDelete,
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

const UsersList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Plan Name </TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Minimum Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Duration</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataPlansList.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.planName}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.minimumAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.duration}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.bonus}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.bonusType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.bonusCoinType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <Status status={item.status} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                {dayjs(item.createdAt).format("MMMM D, YYYY h:mm A")}
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <TableBoxedLayoutActions>
                  <TableBoxedLayoutActionButtonEdit data={item} />
                  <TableBoxedLayoutActionButtonDelete data={{id: item.id}} />
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

export default UsersList;
