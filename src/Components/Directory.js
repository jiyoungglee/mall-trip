import React, { useState } from 'react';
import ShopList from './ShopList';

function Directory({ shops, onAdd }) {
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredList = shops.filter((shop) => shop.includes(searchValue));

  return (
    <div>
      <div>Directory</div>
      <input type="search" onChange={searchHandler} />
      <ShopList searchQuery={filteredList} onClick={onAdd} />
    </div>
  )
}

export default Directory;



