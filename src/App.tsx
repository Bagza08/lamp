import { Route, Routes } from "react-router-dom";
import Home from "./features/home/component/home";
import LoginTc from "./features/home/component/LoginTc";
import Register from "./features/home/component/Register";
import Role from "./features/home/component/Role";
import LoginSd from "./features/home/component/LoginSd";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<Role />} />
        <Route path="/logintc" element={<LoginTc />} />
        <Route path="/loginsd" element={<LoginSd />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
