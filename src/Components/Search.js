import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Search.css'

function Search({ onChange, page}) {
  return(
    <div className={`searchbox ${page}`}>
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input type="search" onChange={onChange} placeholder="Search for..." />
  </div>
  )
}

export default Search;