import '../Styles/ShopList.css'
import Button from "./Button";

function ShopList({ searchQuery, modifyRoute }) {
  function renderShops() {
    if (searchQuery.length === 0) return "No matching results"
    else {
      return searchQuery.map((shop) =>
        <li key={shop.location}>
          <div className="shop">
            <span className="shopName">{shop.name}</span>
            <span className="shopLocation">{shop.location}</span>
          </div>
          <Button shop={shop} modifyRoute={modifyRoute} />
        </li>
    )}
  }

  return (
    <ul className="directory">
      {renderShops()}
    </ul>
  );
}

export default ShopList;