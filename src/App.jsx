import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider1 as UserProvider } from "./context1/UserContext1";
import Header1 from "./components1/layout1/Header1";
import Footer1 from "./components1/layout1/Footer1";
import Navbar1 from "./components1/common1/Navbar1";
import Home1 from "./pages1/Home1";
import Login1 from "./pages1/Login1";
import Signup1 from "./pages1/Signup1";
import Dashboard1 from "./pages1/Dashboard1";
import Profile1 from "./pages1/Profile1";

const App = () => (
  <UserProvider>
    <Router>
      <Header1 />
      <Navbar1 />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/login" element={<Login1 />} />
          <Route path="/signup" element={<Signup1 />} />
          <Route path="/dashboard" element={<Dashboard1 />} />
          <Route path="/profile/:userId" element={<Profile1 />} />
        </Routes>
      </main>
      <Footer1 />
    </Router>
  </UserProvider>
);

export default App;
