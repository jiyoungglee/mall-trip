import { useState } from 'react';
import MallList from '../Components/MallList';
import Search from '../Components/Search';
import '../Styles/MallPage.css'

function MallPage() {
  const malls = [
    {
      name: "Westfield Garden State Plaza",
      hours: "XAM-XPM",  
    }, 
    {
      name: "American Dream Mall",
      hours: "XAM-XPM",  
    }, 
    {
      name: "Woodbury Commons",
      hours: "XAM-XPM",  
    }, 
    {
      name: "Short Hills Mall",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 1",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 2",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 3",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 4",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 5",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 6",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 7",
      hours: "XAM-XPM",  
    },
    {
      name: "Mall 8",
      hours: "XAM-XPM",  
    },
  ];
  const [searchValue, setSearchValue] = useState('');

  function searchHandler(event) {
    setSearchValue(event.target.value);
  };

  const filteredMalls = malls.filter(({ name }) => name.toLowerCase().includes(searchValue.toLowerCase()));

  return(
    <div className="mall-page">
      <div className="mall-page-top">
        <h1>Select a Mall</h1>
        <Search onChange={searchHandler} page="mall" />
      </div>
      <MallList searchQuery={filteredMalls} />
    </div>
  )
}

 export default MallPage;