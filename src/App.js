import { Routes, Route } from "react-router-dom";
import DirectoryMapPage from './Pages/DirectoryMapPage';
import MallPage from "./Pages/MallPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MallPage />} />
        <Route path="stores/:mallName" element={<DirectoryMapPage />} />
      </Routes>
    </div>
  );
}

export default App;
