import React from 'react';


class AssetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: this.props.symbol
    };
  }

  render() {
    const { symbol } = this.state;
    return (
      <div className='shop-page'>
      <h1>Hello</h1>
      <h2>{symbol}</h2>
      </div>
    );
  }
}

export default AssetPage;
