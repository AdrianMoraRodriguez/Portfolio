import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function Portfolio() {
  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px', // espacio entre tarjetas
      boxSizing: 'border-box',
    }}>
      {projects.map(project => (
        <Link 
          key={project.id} 
          to={project.link} 
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '300px', // altura de la tarjeta
            borderRadius: '12px',
            overflow: 'hidden',
            textDecoration: 'none',
            color: '#fff',
            cursor: 'pointer',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay para mejorar legibilidad del texto */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700', marginBottom: '8px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', textAlign: 'center' }}>
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}
