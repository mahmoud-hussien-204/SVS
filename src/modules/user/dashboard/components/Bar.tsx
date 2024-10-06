import {useEffect} from "react";

const TradingViewTickerTape = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {proName: "BITSTAMP:BTCUSD", title: "Bitcoin"},
        {proName: "BITSTAMP:ETHUSD", title: "Ethereum"},
        {description: "SOL", proName: "BINANCE:SOLUSDT"},
        {description: "XRP", proName: "BINANCE:XRPUSDT"},
        {description: "PEPE", proName: "BINANCE:PEPEUSDT"},
        {description: "BNB", proName: "BINANCE:BNBUSDT"},
        {description: "SHIB", proName: "BINANCE:SHIBUSDT"},
        {description: "LINK", proName: "BINANCE:LINKUSDT"},
        {description: "DOGE", proName: "COINBASE:DOGEUSD"},
        {description: "POL", proName: "BINANCE:POLUSDT"},
        {description: "CAKE", proName: "BINANCE:CAKEUSDT"},
        {description: "ADA", proName: "BINANCE:ADAUSDT"},
        {description: "IDEX", proName: "BINANCE:IDEXUSDT"},
        {description: "TRX", proName: "BINANCE:TRXUSDT"},
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });
    (document.getElementById("tradingview-widget") as HTMLDivElement).appendChild(script);
  }, []);

  return (
    <div className='mb-2rem'>
      <div className='tradingview-widget-container'>
        <div id='tradingview-widget' className='tradingview-widget-container__widget'></div>
        {/* <div className='tradingview-widget-copyright'>
        <a href='https://www.tradingview.com/' rel='noopener nofollow' target='_blank'>
        <span className='blue-text'>Track all markets on TradingView</span>
        </a>
        </div> */}
      </div>
    </div>
  );
};

export default TradingViewTickerTape;
