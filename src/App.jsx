import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import Registration from "./Components/Registration/Registration";

function layOut() {
  return (
    <div className="wraper container">
      <Body />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/register" element={<Navigate to="/registration" />} />
        <Route path="/join" element={<Navigate to="/registration" />} />
        <Route path="/apply" element={<Navigate to="/registration" />} />
      </Routes>
    </div>
  );
}

export default layOut;
