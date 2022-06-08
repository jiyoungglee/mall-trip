import Directory from './Directory';
import { useState } from 'react';
import RouteMap from './RouteMap';

function Page() {
  const shops = [
    {location:'A1', name: 'Gucci'}, 
    {location:'B2', name: 'Louis Vuitton'},
    {location:'C12', name: 'Abercrombie Kids'},
    {location:'D34', name: 'Abercrombie & Fitch'},
  ];
  const [destinations, setDestinations] = useState([]);

  function modifyRoute(selectedShop) {
    if (destinations.some((destination) => destination.location === selectedShop.location)) {
      setDestinations((destinations) => destinations.filter((destination) => selectedShop.location !== destination.location));
    }
    else setDestinations((destinations) => [...destinations, selectedShop]);
  }

  return (
    <div>
      <Directory shops={shops} modifyRoute={modifyRoute} />
      <RouteMap selectedShops={destinations} />
    </div>
  );
}

export default Page;