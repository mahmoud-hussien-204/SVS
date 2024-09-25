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

import Status from "@/components/Status";

import CopyText from "@/components/CopyText";

const BanksList = () => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Bank Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Holder Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>IBAN</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Country</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {fakeDataCoinsList.map((item) => (
            <TableBoxedLayoutTR key={item.id}>
              <TableBoxedLayoutTD>{item.coinName}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.coinType}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <CopyText text={"dkfjdkfjdkfjkdfjnvn"} />
              </TableBoxedLayoutTD>
              <TableBoxedLayoutTD>{item.maxWithdrawAmount}</TableBoxedLayoutTD>
              <TableBoxedLayoutTD>
                <Status status={item.status} />
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

export default BanksList;
