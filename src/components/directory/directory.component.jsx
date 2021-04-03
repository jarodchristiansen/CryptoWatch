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


  handleSearchData = (newSections, sections, res, query) => {
    // {query.length >= 3 ? newSections.push(sections.find(res => res.symbol.includes(query.toUpperCase())))
    if(sections.filter(res => this.state.query.toUpperCase === res.symbol || res.title)) {
      newSections.push(sections.find(res => this.state.query === res.symbol || res.title))
      console.log(res)
    }
  }

  render() {
    const {query} = this.state;
    const {sections} = this.state;
    const newSections = [];
    const noValues = [];
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

        {sections.find(res => res.symbol == query.toUpperCase()) ? newSections.push(sections.find(res => res.symbol == query.toUpperCase())) :       
        sections.find(res => res.symbol == query.toUpperCase()) == -1 ?
        noValues.push(<h1>'No matching Values'</h1>) :
        sections.slice(0,80).map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
        }
        

      </div>
      <div className="searchResult">
        {noValues.length >= 0 ? newSections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} categories={id.categories} {...otherSectionProps} />
        )) : noValues.map(({y}) => (
          <h1 key={y}>{y}</h1>
        ))
        }

        </div>
      </div>
    );
  }
}

export default Directory;
