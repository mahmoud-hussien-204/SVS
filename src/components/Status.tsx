import {constantStatusColors} from "@/constants";

import AppHelper from "@/helpers/appHelper";

interface IProps {
  status: string;
}

const Status = ({status}: IProps) => {
  return (
    <span
      className={AppHelper.classes(
        "inline-flex h-2rem min-w-[7.5rem] items-center justify-center gap-0.75rem rounded-full border px-1.2rem text-12 font-medium capitalize",
        constantStatusColors[status.toLowerCase() as keyof typeof constantStatusColors]
      )}
    >
      {status}
    </span>
  );
};

export default Status;
