import '../Styles/RouteMap.css'
function RouteMap({ selectedShops }) {
  return(
    <div>
      <h1>Selected Route</h1>
      <ol>
        {selectedShops.map((shop) =>
          <li key={shop.location}>
            {shop.name}
          </li>
        )}
      </ol>
    </div>
  )
}

export default RouteMap;