import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dasboard";
import Profile from "./Pages/Profile";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
