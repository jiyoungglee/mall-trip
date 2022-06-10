import '../Styles/Directory.css'
import React, { useState } from 'react';
import ShopList from './ShopList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Directory({ shops, modifyRoute }) {
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredList = shops.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="directory-page">
      <div className="directory-top">
        <h1>Directory</h1>
        <div className="searchbox">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="search" onChange={searchHandler} placeholder="Search for..." />
        </div>
      </div>
      <ShopList searchQuery={filteredList} modifyRoute={modifyRoute} />
    </div>
  )
}

export default Directory;



