import { useNavigate } from "react-router-dom";
import "../Styles/MallList.css"

function MallList({ searchQuery }) {
  const navigate = useNavigate();
  return(
    <div className="mall-list">
      {searchQuery.map(({ name, hours }, i) => {
        return(
        <button className="mall-card" key={i} onClick={() => navigate(`/stores/${name}`)}>
          <div className="card-contents">
            <img 
              src="https://fastly.4sqi.net/img/general/600x600/3148104_isXtYX0d4ca_svpW_9h-c9JuBIUCgegiFnVtO5Duf84.jpg"
              alt={name}
              width="150"
              height="150"
            />
            <div className="mall-details">
              <div className="mall-name">{name}</div>
              <div className="mall-hours">{hours}</div>
            </div>
          </div>
        </button>
        )
      })}
    </div>
  )
}

 export default MallList;