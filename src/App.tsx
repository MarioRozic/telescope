import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Form from "./routes/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold">Telescope</div>
            <div className="space-x-6">
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
              <a href="/add" className="hover:text-blue-300">
                Add
              </a>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/add" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
