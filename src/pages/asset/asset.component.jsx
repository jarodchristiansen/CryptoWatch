import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import '../asset/asset.styles.scss';
import FirstChart from '../../components/charts/firstChart.components';

class AssetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'symbol': '',
      'imageURL': this.props.location.imageUrl,
      'title': this.props.location.title 
    }
  }

    symbolCheck() {
      if(this.props.location.symbol) {
        return this.props.location.symbol
      }
      return 'BTC'
    }
    
    componentDidMount() {
    
    const data = JSON.parse(localStorage.getItem('token'));
    const imageLink = JSON.parse(localStorage.getItem('image'));
    const tokenTitle = JSON.parse(localStorage.getItem('tokenTitle'));

    this.setState({
      symbol: data,
      imageURL: imageLink,
      title: tokenTitle
     })
    console.log(data)
  }
  render() {
    return (
      <div className='shop-page'>
        <div className="symbol-row">
      <h2 className="symbol">{this.state.symbol} </h2><h2 className="symbol"> - {this.state.title}  - </h2><img className="symbol-image" src={this.state.imageURL} />
        </div>
        <div className="firstCharts">
      <TradingViewEmbed
              widgetType={widgetType.ADVANCED_CHART}
              widgetConfig={{
                interval: "1D",
                colorTheme: "dark",
                width: "100%",
                symbol: localStorage.getItem('token').replace(/['"]+/g, '') + "USD" || 'BTCUSD',
                studies: [
                  "MACD@tv-basicstudies",
                  "StochasticRSI@tv-basicstudies",
                  "TripleEMA@tv-basicstudies"
                ]
              }}
            />
          <FirstChart symbol={this.state.symbol}/>
      </div>
      </div>

    );
  }
}

export default AssetPage;
