import { useState } from 'react';

function Button({ shop, modifyRoute }) {
  const [destAdded, setDestAdded] = useState(false);

  function onClick(shop) {
    modifyRoute(shop);
    setDestAdded((destAdded) => !destAdded);
  }

  return (
    <button onClick={()=> onClick(shop)}>{destAdded ? "Remove from Route" : "Add to Route"}</button>
  )
}

export default Button;