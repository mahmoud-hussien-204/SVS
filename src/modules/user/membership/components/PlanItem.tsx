import IconCheck from "@/components/icons/IconCheck";

import {fakeDataPlans} from "@/fakeData";

interface IProps {
  data: (typeof fakeDataPlans)[number];
}

const PlanItem = ({data}: IProps) => {
  return (
    <div className='rounded-box border border-base-300 bg-base-300 p-1rem'>
      <h6
        className='text-18 font-semibold'
        style={{
          color: data.color,
        }}
      >
        {data.planName}
      </h6>

      <ul className='mt-2rem flex flex-col gap-0.75rem'>
        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <IconCheck
            svgProps={{
              className: "w-1rem",
            }}
          />
          <span className='text-neutral-400'>
            <strong>{data.minimumAmount}</strong> Minimum Amount
          </span>
        </li>

        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <IconCheck
            svgProps={{
              className: "w-1rem",
            }}
          />
          <span className='text-neutral-400'>
            <strong>{data.minimumDuration}</strong> Minimum Duration
          </span>
        </li>

        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <IconCheck
            svgProps={{
              className: "w-1rem",
            }}
          />
          <span className='text-neutral-400'>
            <strong>{data.bonusPercentage}</strong> Bonus Percentage
          </span>
        </li>
      </ul>

      <div
        className='mt-2rem h-0.25rem rounded-full opacity-45'
        style={{
          backgroundColor: data.color,
        }}
      ></div>
    </div>
  );
};

export default PlanItem;
