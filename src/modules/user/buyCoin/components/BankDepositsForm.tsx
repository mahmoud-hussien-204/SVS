import Select, {TOptionItem} from "@/components/Select";

import {IBuyCoinPageData} from "../interfaces";

import AppHelper from "@/helpers/appHelper";

import Label from "@/components/Label";

import ImageUploader from "../../profile/components/ImageUplaoder";

type IProps = Pick<IBuyCoinPageData, "banks">;

function BankDepositsForm({banks}: IProps) {
  return (
    <div>
      <div className='mb-1.25rem w-full'>
        <Label htmlFor='buy-coin'>Select Bank</Label>
        <Select
          options={
            AppHelper.handleSelectBoxOptions<IBank>(banks, "bank_name", "id") as TOptionItem[]
          }
          id='buy-coin'
          defaultValue=''
        />
      </div>

      <ImageUploader locale={true} name='bank_image' title='Bank Logo' />
    </div>
  );
}

export default BankDepositsForm;
