import '../Styles/Button.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function Button({ shop, modifyRoute }) {
  const [destAdded, setDestAdded] = useState(false);

  function onClick(shop) {
    modifyRoute(shop);
    setDestAdded((destAdded) => !destAdded);
  }

  return (
    <button onClick={()=> onClick(shop)}>
      {destAdded ? <FontAwesomeIcon icon={faCircleMinus} size="2x" /> : <FontAwesomeIcon icon={faCirclePlus} size="2x" />}
    </button>
  )
}

export default Button;