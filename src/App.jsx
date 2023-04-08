import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const userLoged = true;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={userLoged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/post/:id"
            element={userLoged ? <Post /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={userLoged ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
