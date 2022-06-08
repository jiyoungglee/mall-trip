import Directory from './Directory';
import { useState } from 'react';
import RouteMap from './RouteMap';

function Page() {
  const shops = ['Gucci', 'Louis Vuitton', 'Abercrombie Kids', 'Abercrombie & Fitch'];
  const [destinations, setDestinations] = useState([]);

  function addDestination(selectedShop) {
    setDestinations((destinations) => [...destinations, selectedShop]);
  }

  return (
    <div>
      <Directory shops={shops} onAdd={addDestination} />
      <RouteMap selectedShops={destinations} />
    </div>
  );
}

export default Page;