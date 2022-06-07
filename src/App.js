import './App.css';
import Directory from './Components/Directory';
import { useState } from 'react';
import RouteMap from './Components/RouteMap';

function App() {
  const [destinations, setDestinations] = useState([]);

  function addDestination(selectedShop) {
    setDestinations((destinations) => [...destinations, selectedShop]);
  }

  return (
    <div>
      <Directory onAdd={addDestination} />
      <RouteMap selectedShops={destinations} />
    </div>
  );
}

export default App;
