import React from 'react';
import Directory from '../../components/directory/directory.component';

class AssetsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ''
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
      <Directory />
      </div>
    );
  }
}

export default AssetsPage;
