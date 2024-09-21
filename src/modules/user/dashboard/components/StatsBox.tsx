import AppHelper from "@/helpers/appHelper";

interface IProps {
  className?: string;
  title: string;
  value: number;
  isLoading?: boolean;
}

const StatsBox = ({ className, title, value, isLoading }: IProps) => {
  return (
    <div
      className={AppHelper.classes(
        "rounded-md bg-gradient-to-r from-blue-500 to-blue-400 p-1.25rem",
        className
      )}
    >
      <div className='text-md font-semibold'>{title}</div>
      <div className='mt-1.5rem flex items-center'>
        {isLoading ? <span className="loading" /> : <div className='text-32 font-bold'> {value} </div>}
      </div>
    </div>
  );
};

export default StatsBox;
