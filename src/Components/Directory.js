import '../Styles/Directory.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShopList from './ShopList';
import Search from './Search';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Directory({ shops, modifyRoute, onClose }) {
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredShops = shops.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <div className="directory-page">
        <div className="directory-top">
          <h1>Directory</h1>
          <Search onChange={searchHandler} page="directory"/>
        </div>
        <ShopList setSearchValue={setSearchValue} searchQuery={filteredShops} modifyRoute={modifyRoute} />
      </div>
      <div className="backdrop">
        <button onClick={onClose}>
          <FontAwesomeIcon className="" icon={faXmark} size="3x" inverse />
        </button>
      </div>
    </div>
  )
}

export default Directory;



