import {useCallback, useRef, useState} from "react";

const useCopy = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  const copiedCallback = useCallback(() => {
    setCopied(true);
    const copiedTimeOut = setTimeout(() => {
      setCopied(false);
      clearTimeout(copiedTimeOut);
    }, 1000);
  }, []);

  const copy = useCallback(async () => {
    if (!elementRef.current) return;
    await navigator.clipboard.writeText(elementRef.current.innerText);
    copiedCallback();
  }, [copiedCallback]);


  
  return {
    elementRef,
    copied,
    copy,
  };
};

export default useCopy;
