
interface IUserPlanProps {
  data: {
    value: string | number;
    label: string;
  }[];
  title: string;
}

function UserPlan({ data, title }: IUserPlanProps) {
  return (
    <div className='rounded-box border border-base-300 bg-base-300 p-1rem'>
      <h2 className='mb-4 text-neutral-300'>{title}</h2>
      <>
        <ul className='mt-1rem flex flex-col gap-0.75rem'>
          {data.map(({ label, value }) => <li className='flex justify-between items-center gap-0.5rem text-14'>
            <span>
              {label}
            </span>
            <span className='text-neutral-400'>
              <strong>{value}</strong>
            </span>
          </li>)}
        </ul>
      </>
    </div>
  );
}

export default UserPlan;
