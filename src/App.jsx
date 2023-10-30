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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
<<<<<<< HEAD
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
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
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <Error />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
=======
    return (
        <Provider store={store}> 
        <GoogleOAuthProvider
            clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
        >
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
                    <Route
                        path="*"
                        element={
                            <ProtectedRoute>
                                <Error />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
            
        </GoogleOAuthProvider>
        </Provider>
<<<<<<< HEAD
    );
>>>>>>> fcc98c4dce77c2e75e5d1631cf5fca052f43a7e9
=======
    )
>>>>>>> f1bbc58e4ccf69a06f087a1e56b45d659c580abc
}

export default App;
