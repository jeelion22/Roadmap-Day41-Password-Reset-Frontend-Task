import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
