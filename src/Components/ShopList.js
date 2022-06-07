import { useState, useEffect } from 'react';

function ShopList({ directory, searchQuery, onClick }) {
  const [list, setList] = useState(directory)

  function renderShops() {
    return list.map((shop) =>
      <li>
        {shop}
        <button onClick={()=> onClick(shop)}>Add</button>
      </li>
    )
  }

  return (
    <ul>
      {renderShops(list)}
    </ul>
  );
}

export default ShopList;