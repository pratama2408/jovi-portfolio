import { Routes, Route, Link } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import CrudApp from "./CrudApp";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
      <nav className="p-4 flex justify-center gap-6 bg-black border-b border-white/10">
        <Link to="/" className="hover:text-amber-400">
          Home
        </Link>
        <Link to="/crud" className="hover:text-amber-400">
          CRUD App
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<CompanyProfile />} />
        <Route path="/crud" element={<CrudApp />} />
      </Routes>
    </div>
  );
}

export default App;
