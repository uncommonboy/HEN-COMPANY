import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Foundation from "./Components/Foundation/Foundation";
import Header from "./Components/Header/Header";
import Investors from "./Components/Investors/Investors";
import News from "./Components/News/News";
import Registration from "./Components/Registration/Registration";

function layOut() {
  return (
    <div className="wraper container">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/register" element={<Navigate to="/registration" />} />
        <Route path="/join" element={<Navigate to="/registration" />} />
        <Route path="/apply" element={<Navigate to="/registration" />} />
        <Route path="/investors" element={<Investors/>}/>
        <Route path="/heh-news" element={<News/>}/>
        <Route path="/heh-foundation" element={<Foundation/>}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default layOut;
