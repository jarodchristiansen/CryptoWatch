import React from 'react';
import Directory from '../../components/directory/directory.component';

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
      {symbol}
      </div>
    );
  }
}

export default AssetPage;
