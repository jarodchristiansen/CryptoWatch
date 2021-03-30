import React from 'react';
import Assets from '../../assetData/assetData';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: Assets  
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.slice(0,80).map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
