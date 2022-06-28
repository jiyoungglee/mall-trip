import { useState } from 'react';
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
    {location:'q20', name: 'Apple'},
    {location:'w20', name: 'Apple'},
    {location:'s20', name: 'Apple'},
    {location:'Jd20', name: 'Apple'},
    {location:'Js20', name: 'Apple'},
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
      <div className="route-page">
        <Directory open={directoryOpen} shops={shops} modifyRoute={modifyRoute} onClose={toggleDirectory} />
        <div className="route-page-right">
          {!directoryOpen && <button className="stores-button" onClick={toggleDirectory}>Stores</button>}
          <RouteMap selectedShops={destinations} />
        </div>
      </div>
  );
}

export default DirectoryMapPage;