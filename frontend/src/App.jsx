import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicPortfolio from "./pages/PublicPortfolio";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<LandingPage />} />

        {/* Public Portfolio */}
        <Route path="/:slug" element={<PublicPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
