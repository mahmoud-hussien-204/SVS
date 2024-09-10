import AppHelper from "@/helpers/appHelper";

import {Link, To, useLocation, useSearchParams} from "react-router-dom";

interface IProps {
  tabs: {label: string; value: string}[];
  to?: (item: unknown) => To;
}

const Tabs = ({tabs, to}: IProps) => {
  const [searchParams] = useSearchParams();

  const tabSearchParams = searchParams.get("tab");

  const {pathname} = useLocation();

  return (
    <div role='tablist' className='inline-flex tabs-boxed'>
      {tabs.map((tab, index) => (
        <Link
          key={index}
          role='tab'
          to={
            to
              ? to(tab)
              : {
                  search: `?tab=${tab.value}`,
                }
          }
          className={AppHelper.classes("tab max-w-fit", {
            "tab-active": tabSearchParams === tab.value || pathname.endsWith(tab.value),
          })}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
