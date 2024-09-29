import IconCheck from "@/components/icons/IconCheck";
import {IPlan} from "../interfaces";
import {plansColor} from "../planColors";

const getRandomColor = () => plansColor[Math.floor(Math.random() * plansColor.length)];

const PlanItem = (data: IPlan) => {
  const color = getRandomColor();

  return (
    <div className='rounded-box border border-base-300 bg-base-300 p-1rem'>
      <div className='mb-3 grid w-full place-items-center'>
        <img src={data.image} alt={data.plan_name} className='' />
      </div>
      <h6
        className='text-18 font-semibold'
        style={{
          color: color,
        }}
      >
        {data.plan_name}
      </h6>

      <ul className='mt-2rem flex flex-col gap-0.75rem'>
        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <span>
            <IconCheck
              svgProps={{
                className: "w-1rem",
              }}
            />
          </span>
          <span className='text-neutral-400'>
            <strong>{Number(data.amount).toFixed(2)}</strong> Minimum Amount
          </span>
        </li>

        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <span>
            <IconCheck
              svgProps={{
                className: "w-1rem",
              }}
            />
          </span>
          <span className='text-neutral-400'>
            <strong>{Number(data.duration).toFixed(2)}</strong> Minimum Duration
          </span>
        </li>

        <li className='flex items-center gap-0.5rem text-14 text-success'>
          <span>
            <IconCheck
              svgProps={{
                className: "w-1rem",
              }}
            />
          </span>
          <span className='text-neutral-400'>
            <strong>{Number(data.bonus).toFixed(2)}</strong> Bonus Percentage
          </span>
        </li>
      </ul>

      <div
        className='mt-2rem h-0.25rem rounded-full opacity-45'
        style={{
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default PlanItem;
