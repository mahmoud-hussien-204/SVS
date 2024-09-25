import {CSSProperties, useState} from "react";

const verifyCodeTimer = 30;

export default function ResendCode() {
  const [isCountDown, setIsCountDown] = useState(false);

  const [countdown, setCountdown] = useState(verifyCodeTimer);

  function triggerTest() {
    setIsCountDown(true);

    let countValue = verifyCodeTimer;

    const interval = setInterval(() => {
      if (countValue === 1) {
        clearInterval(interval);
        setIsCountDown(false);
        setCountdown(verifyCodeTimer);
        return;
      }

      setCountdown((prev) => {
        countValue = prev;
        return prev - 1;
      });
    }, 1000);
  }

  return (
    <div className='absolute bottom-0 end-1rem top-0 text-sm font-medium text-primary'>
      {isCountDown ? (
        <div className='flex h-3rem items-center overflow-hidden'>
          <span className='countdown'>
            <span style={{"--value": countdown} as CSSProperties}></span>
          </span>
        </div>
      ) : (
        <button
          type='button'
          className='h-3rem'
          onClick={() => triggerTest()}
          disabled={isCountDown}
        >
          Get Code
        </button>
      )}
    </div>
  );
}
