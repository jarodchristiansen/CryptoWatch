import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match, symbol, categories }) => (
  <div
    // className={`${size} menu-item`}
    // onClick={() => history.push(`${match.url}-${linkUrl}`, [{symbol}])}
 className={`${size} menu-item`}
    onClick={() => 
     history.push({
      'pathname': '/' + symbol,
      'title': localStorage.setItem('tokenTitle', JSON.stringify(title)),
      'imageUrl': imageUrl,
      'match': match.url,
      'symbol': symbol,
       match,
      'ImageStorage': localStorage.setItem('image', JSON.stringify(imageUrl)),
      'storage' : localStorage.setItem('token', JSON.stringify(symbol)) 
    })}

  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      {title.length < 12 ?
      <h1 className='title'>{title.toUpperCase()}</h1>:
      <h1 className="title">{symbol.toUpperCase()}</h1>}
      {/* <span className='subtitle'>SHOP NOW</span> */}
    </div>
  </div>
);

export default withRouter(MenuItem);
