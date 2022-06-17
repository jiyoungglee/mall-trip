import MallList from '../Components/MallList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function MallPage() {
  return(
    <div>
      <h1>Select a Mall</h1>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="search" placeholder="Search for mall" />
      </div>
      <MallList />
    </div>
  )
}

 export default MallPage;