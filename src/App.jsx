import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<h1>Menu</h1>} />
          <Route path="/location" element={<h1>Location</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
