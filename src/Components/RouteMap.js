function RouteMap({ selectedShops }) {
  return(
    <div>
      Selected Route
      <ol>
        {selectedShops.map((shop) =>
          <li>{shop}</li>
        )}
      </ol>
    </div>
  )

}

export default RouteMap;