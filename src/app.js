import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard'
import Statistics from './pages/statistics/statistics'
import Stocks from "./pages/stocks/stocks";
import Settings from "./pages/settings/settings";
import Profile from "./pages/profile/profile";
import bootstrapcss from 'bootstrap/dist/css/bootstrap.css'
import bootstrapjs from 'bootstrap/dist/js/bootstrap.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;