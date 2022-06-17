import { useNavigate } from "react-router-dom";

function MallList() {
  const malls = ["Westfield Garden State Plaza", "American Dream Mall", "Woodbury Commons", "Short Hills Mall"];
  const navigate = useNavigate();
  return(
    <div>
      {malls.map((mall, i) => {
        return(
        <button key={i} onClick={() => navigate(`/stores/${mall}`)}>
          {mall}
        </button>
        )
      })}
    </div>
  )
}

 export default MallList;