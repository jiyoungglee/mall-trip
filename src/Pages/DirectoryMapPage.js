import { useState } from 'react';
import { Link } from "react-router-dom";
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Directory from '../Components/Directory';
import RouteMap from '../Components/RouteMap';
import '../Styles/DirectoryMapPage.css';



function DirectoryMapPage() {
  const shops = [
    {location:'A1', name: 'Gucci'}, 
    {location:'B2', name: 'Louis Vuitton'},
    {location:'C12', name: 'Abercrombie Kids'},
    {location:'D34', name: 'Abercrombie & Fitch'},
    {location:'L23', name: 'AGAINST ALL ODDS'},
    {location:'B3', name: 'Saks Fifth Avenue'},
    {location:'F16', name: 'Urban Outfitters'},
    {location:'G4', name: 'Foot Locker'},
    {location:'A15', name: 'Tiffany & Co.'},
    {location:'D230', name: 'Swarovski'},
    {location:'C22', name: 'Tesla Motors'},
    {location:'G15', name: 'Venus Et Fleur'},
    {location:'J20', name: 'Apple'},
  ];
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);

  function toggleDirectory() {
    setDirectoryOpen((directoryOpen) => !directoryOpen);
  }

  function modifyRoute(selectedShop) {
    if (destinations.some((destination) => destination.location === selectedShop.location)) {
      setDestinations((destinations) => destinations.filter((destination) => selectedShop.location !== destination.location));
    }
    else setDestinations((destinations) => [...destinations, selectedShop]);
  }

  return (
    <div>
      <Directory open={directoryOpen} shops={shops} modifyRoute={modifyRoute} onClose={toggleDirectory} />
      <div className="route-page-header">
        <div className="icon-container">
          <button onClick={toggleDirectory}>
            <FontAwesomeIcon icon={faBars} inverse />
          </button>
          <Link to="/"><FontAwesomeIcon icon={faHouse} inverse /></Link>
        </div>
      </div>
      <RouteMap selectedShops={destinations} />
    </div>
  );
}

export default DirectoryMapPage;