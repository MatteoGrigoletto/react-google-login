import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [userLoged, setUserLoged] = useState(true);

  const ProtectedRoute = ({ children }) => {
    if (!userLoged) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div className="App">
        <Navbar user={userLoged} />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Post />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
