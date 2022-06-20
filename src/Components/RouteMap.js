import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/RouteMap.css';

function RouteMap({ selectedShops }) {

  function renderRoute() {
    return (selectedShops.map((shop, i) =>
        <div key={shop.location} className="selection-container">
          <div className="map-icon">
            {(i>0) && <div className="ellipsis"></div>}
            <FontAwesomeIcon className="bullet" icon={faCircle} />
          </div>
          <span className="selection">
            {shop.name}
          </span>
        </div>
    ))
  }

  return(
    <div className="selected-route">
      <h1>Selected Route</h1>
      <div className="route-body">
        {renderRoute()}
        <button>Get Directions</button>
      </div>
    </div>
  )
}

export default RouteMap;