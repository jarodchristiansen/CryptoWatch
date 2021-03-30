import React from 'react';

import Directory from '../../components/directory/directory.component';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
              showSymbolLogo: true,
              isTransparent: true,
              displayMode: "adaptive",
              colorTheme: "dark",
              autosize: true,
              symbols: [
                {
                  proName: "BITSTAMP:ETHUSD",
                  title: "ETH/USD"
                },
                {
                  proName: "BITSTAMP:BTCUSD",
                  title: "BTC/USD"
                },
                {
                  proName: "BINANCE:BNBUSDT",
                  title: "BNB/USDT"
                },
                {
                  proName: "BINANCE:ADAUSD",
                  title: "ADA/USD"
                },
                {
                  proName: "BINANCE:DOTUSDT",
                  title: "DOT/USDT"
                },
                {
                  proName: "BINANCE:UNIUSDT",
                  title: "UNI/USDT"
                }
              ]
            }}
          />
  </div>
);

export default HomePage;
