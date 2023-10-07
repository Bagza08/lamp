import { Route, Routes } from "react-router-dom";
import Home from "./features/home/component/home";
import CardDetail from "./features/home/component/CardDetail";
import DasboardTeacher from "./features/home/component/DasboardTeacher";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carddetail" element={<CardDetail />} />
        <Route path="/DasboardTeacher" element={<DasboardTeacher />} />
      </Routes>
    </>
  );
}

export default App;
