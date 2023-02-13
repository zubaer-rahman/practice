import ComboBox from './pages/ComboBox';
import Tags from './pages/tags';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchApi from './pages/FetchAPI';


function App() {
  return (
    <div style={{display: "flex", alignItem: "center", justifyContent: "center" , marginTop: "100px"}}>
    <Router>
      <Routes>
        <Route path="/tags" element={<Tags/>} />
        <Route path="/combo-box" element={<ComboBox/>} />
        <Route path="/api" element={<FetchApi/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
