import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Retrieve from "./pages/Retrieve";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"; // ✅ Import the navbar

const App = () => {
  const [user, setUser] = useState(null);
  const [storedUser, setStoredUser] = useState(() => {
    const savedUser = localStorage.getItem("registeredUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <>
      <Navbar /> {/* ✅ Only render navbar once here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/retrieve" element={<Retrieve />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} storedUser={storedUser} />}
        />
        <Route
          path="/signup"
          element={<Signup setStoredUser={setStoredUser} />}
        />
      </Routes>
    </>
  );
};

export default App;
