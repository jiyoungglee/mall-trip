import React, { useState } from 'react';
import ShopList from './ShopList';

function Directory({ shops, modifyRoute }) {
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredList = shops.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <div>Directory</div>
      <input type="search" onChange={searchHandler} />
      <ShopList searchQuery={filteredList} modifyRoute={modifyRoute} />
    </div>
  )
}

export default Directory;



