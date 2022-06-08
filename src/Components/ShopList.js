function ShopList({ searchQuery, onClick }) {

  function renderShops() {
    return searchQuery.map((shop) =>
      <li>
        {shop}
        <button onClick={()=> onClick(shop)}>Add</button>
      </li>
    )
  }

  return (
    <ul>
      {renderShops()}
    </ul>
  );
}

export default ShopList;