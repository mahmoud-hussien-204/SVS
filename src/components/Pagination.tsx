import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import IconArrowLeft from "./icons/IconArrowLeft";

import IconArrowRight from "./icons/IconArrowRight";

import AppHelper from "@/helpers/appHelper";

interface IProps {
  totalPages: number;
}

const Pagination = ({totalPages}: IProps) => {
  const {pageSearchParams, searchParams, setSearchParams} = useApiUrlFilter();

  const onClick = (n: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", n.toString());
    setSearchParams(newSearchParams);
  };

  return (
    <div className='flex items-center gap-1rem'>
      <button
        type='button'
        className='h-2.5rem min-h-0 text-12 text-neutral-400 hover:text-primary disabled:opacity-10 disabled:hover:text-neutral-400'
        disabled={pageSearchParams === 1}
        onClick={() => onClick(pageSearchParams - 1)}
      >
        <IconArrowLeft />
      </button>
      <div className='flex items-center'>
        {Array.from({length: totalPages}).map((_, i) => (
          <button
            key={i}
            className={AppHelper.classes(
              "h-2.5rem w-2.5rem rounded-0.5rem text-12 font-semibold text-white",
              {
                "bg-primary": pageSearchParams === i + 1,
              }
            )}
            onClick={() => onClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        type='button'
        className='h-2.5rem min-h-0 text-12 text-neutral-400 hover:text-primary disabled:opacity-10 disabled:hover:text-neutral-400'
        disabled={pageSearchParams === totalPages}
        onClick={() => onClick(pageSearchParams + 1)}
      >
        <IconArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
