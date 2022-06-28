import { Routes, Route } from "react-router-dom";
import DirectoryMapPage from './Pages/DirectoryMapPage';
import MallPage from "./Pages/MallPage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MallPage />} />
        <Route path="stores/:mallName" element={<DirectoryMapPage />} />
      </Routes>
    </div>
  );
}

export default App;
