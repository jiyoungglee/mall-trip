import Button from "./Button";

function ShopList({ searchQuery, modifyRoute }) {
  function renderShops() {
    if (searchQuery.length === 0) return "No matching results"
    else {
      return searchQuery.map((shop) =>
        <li key={shop.location}>
          {shop.name}
          <Button shop={shop} modifyRoute={modifyRoute} />
        </li>
    )}
  }

  return (
    <ul>
      {renderShops()}
    </ul>
  );
}

export default ShopList;