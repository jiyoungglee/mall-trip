import React, { useState } from 'react';
import ShopList from './ShopList';

function Directory({ onAdd }) {
  const shops = ['Gucci', 'Louis Vuitton', 'Abercrombie Kids', 'Abercrombie & Fitch'];
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div>Directory</div>
      <input type="search" onChange={searchHandler}/>
      <ShopList directory={shops} searchQuery={searchValue} onClick={onAdd} />
    </div>
  )
}

export default Directory;



