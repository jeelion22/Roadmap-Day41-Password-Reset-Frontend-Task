import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Forgotpassword from "./Forgotpassword";
import Resetpassword from "./Resetpassword";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<Forgotpassword />} />
        <Route path="/resetPassword/:resetToken" element={<Resetpassword />} />
      </Routes>
    </>
  );
}

export default App;
