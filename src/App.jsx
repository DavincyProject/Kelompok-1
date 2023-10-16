import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./Components/NavbarComponent";
import Details from "./pages/Details";
import Footer from "./Components/Footer/Footer";
import SearchMovie from "./pages/SearchMovie";
import Error from "./pages/Error";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/details/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchMovie />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* handle error path */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
