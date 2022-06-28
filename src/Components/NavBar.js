import { Link, useLocation } from 'react-router-dom';
import '../Styles/NavBar.css';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  const format = useLocation().pathname === "/" ? "" : "stores"
  return (
    <div className= {`navbar ${format}`}>
      <Link to="/"><FontAwesomeIcon icon={faHouse} size="2x" /></Link>
      <div className={`mobile-heading ${format}`}>Select a Mall</div>
    </div>
  )
};

export default NavBar;