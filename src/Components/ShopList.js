import '../Styles/ShopList.css'

function ShopList({ searchQuery, modifyRoute }) {
  function renderShops() {
    if (searchQuery.length === 0) return "No matching results"
    else {
      return searchQuery.map((shop) =>
        <label key={shop.location}>
          <li>
            <div className="checklist-left">
              <input type="checkbox" onClick={() => modifyRoute(shop)}/>
              <div className="shop">
                <span className="shop-name">{shop.name}</span>
                <span className="shop-location">{shop.location}</span>
              </div>
            </div>
          </li>
        </label>
    )}
  }

  return (
    <ul className="shop-list">
      {renderShops()}
    </ul>
  );
}

export default ShopList;