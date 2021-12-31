import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddData from "./Component/AddData";
import EditData from "./Component/EditData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/adduser" element={<AddData />} />
          <Route path="/edituser/:id" element={<EditData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
