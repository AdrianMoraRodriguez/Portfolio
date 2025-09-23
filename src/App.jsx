import { HashRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Project from './pages/Project'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <HashRouter>
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.875rem', padding: '2rem 0' }}>
        &copy; {new Date().getFullYear()} Adrián Mora. All rights reserved.
      </footer>
    </HashRouter>
  )
}