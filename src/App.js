import "./App.css";
import Clinic from "./Clinic";
import ArrayOfEditableBoxes from "./components/exercises/ArrayOfEditableBoxes";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Calculator from "./components/exercises/Calculator";
import { Crosel } from "./components/exercises/Crosel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clinic" element={<Clinic />} />
        <Route path="arrays" element={<ArrayOfEditableBoxes />} />
        <Route path="calc" element={<Calculator />} />
        <Route path="crosel" element={<Crosel />} />
      </Routes>
    </div>
  );
}

export default App;
