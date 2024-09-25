function TodayCoinRate() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <span className='flex w-full items-center justify-between rounded-lg bg-neutral-800 px-8 py-6'>
        <p>1 NETWORK</p>
        <p>=</p>
        <p>10.000000 USD</p>
      </span>
      <img
        src='/buy-coin-vector.svg'
        alt='buy-coin-vector'
        className=' '
        width={430}
        height={430}
      />
    </div>
  );
}

export default TodayCoinRate;
