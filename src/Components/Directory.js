import '../Styles/Directory.css'
import React, { useState } from 'react';
import ShopList from './ShopList';
import Search from './Search';

function Directory({ shops, modifyRoute }) {
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredShops = shops.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="directory-page">
      <div className="directory-top">
        <h1>Directory</h1>
        <Search onChange={searchHandler} page="directory"/>
      </div>
      <ShopList setSearchValue={setSearchValue} searchQuery={filteredShops} modifyRoute={modifyRoute} />
    </div>
  )
}

export default Directory;



