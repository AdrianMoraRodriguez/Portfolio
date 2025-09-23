import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header style={{
      width: '100vw',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // fondo blanco semi-transparente
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <nav style={{
        width: '75%',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'flex-end', // mueve todo a la derecha
        alignItems: 'center',
        gap: '24px' // espacio entre enlaces
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#111827', fontWeight: '500', fontSize: '16px', transition: 'color 0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#2563EB'}
          onMouseOut={e => e.currentTarget.style.color = '#111827'}
        >
          Home
        </Link>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: '#111827', fontWeight: '500', fontSize: '16px', transition: 'color 0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#2563EB'}
          onMouseOut={e => e.currentTarget.style.color = '#111827'}
        >
          Portfolio
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#111827', fontWeight: '500', fontSize: '16px', transition: 'color 0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#2563EB'}
          onMouseOut={e => e.currentTarget.style.color = '#111827'}
        >
          About
        </Link>
      </nav>
    </header>
  )
}
