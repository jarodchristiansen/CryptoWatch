import React from 'react';
import Assets from '../../assetData/assetData';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: Assets,
      query:''  
    };
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };


  render() {
    const {query} = this.state;
    const {sections} = this.state;
    const newSections = [];
    return (
    <div>
    <div>
      <input
        placeholder="Search for a token"
        ref={(input) => (this.search = input)}
        onChange={this.handleInputChange}
        className="dataRequest"
      />
      <h3>{query}</h3>
    </div>
      {/* <div className='directory-menu'>
        {this.state.sections.slice(0,80).map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div> */}

      <div className='directory-menu'>
        {query.length >= 2 ? newSections.push(sections.find(res => res.symbol.includes(query.toUpperCase()))) :
       sections.slice(0,80).map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
        
        {newSections.slice(0,80).map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}

      </div>
      </div>
    );
  }
}

export default Directory;
