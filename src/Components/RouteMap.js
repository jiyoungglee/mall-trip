function RouteMap({ selectedShops }) {
  return(
    <div>
      Selected Route
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