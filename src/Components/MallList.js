import { useNavigate } from "react-router-dom";
import "../Styles/MallList.css"

function MallList({ searchQuery }) {
  const navigate = useNavigate();
  return(
    <div className="mall-list-outer">
      <div className="mall-list">
        {searchQuery.map(({ name, hours }, i) => {
          return(
          <button className="mall-card" key={i} onClick={() => navigate(`/stores/${name}`)}>
            <div className="mall-details">
              <div className="mall-name">{name}</div>
              <div className="mall-hours">{hours}</div>
            </div>
          </button>
          )
        })}
      </div>
    </div>
  )
}

 export default MallList;