import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { PatientSearch } from "./pages/PatientSearch";
import { StyledContainer } from "./app.styled";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="PatientSearch" element={<PatientSearch />} />
      </Routes>
    </>
  );
}

export default App;
