import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects'

export default function Project() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!project) return <p style={{ padding: '40px', textAlign: 'center' }}>Proyecto no encontrado</p>

  const images = project.gallery?.length > 0 ? project.gallery : [project.image]

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length)
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length)

  return (
    <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700' }}>
        {project.title}
      </h1>

      {/* Contenedor de la imagen principal con flechas */}
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${project.title} ${currentIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
        />

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button onClick={prevImage} style={{
              position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff',
              fontSize: '2rem', padding: '8px 12px', cursor: 'pointer', borderRadius: '6px'
            }}>‹</button>

            <button onClick={nextImage} style={{
              position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)', border: 'none', color: '#fff',
              fontSize: '2rem', padding: '8px 12px', cursor: 'pointer', borderRadius: '6px'
            }}>›</button>
          </>
        )}
      </div>

      {/* Miniaturas debajo */}
      {images.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '10px',
          overflowX: 'auto',
          paddingBottom: '10px'
        }}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
                cursor: 'pointer',
                border: currentIndex === i ? '3px solid #2563EB' : '2px solid #ccc',
                transition: 'border 0.3s'
              }}
            />
          ))}
        </div>
      )}

      {/* Descripción */}
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        {project.details}
      </p>

      {/* Video (si existe) */}
      {project.video && (
        <video
          src={project.video}
          controls
          style={{ width: '100%', borderRadius: '12px', marginTop: '20px' }}
        />
      )}

      {/* Botón para volver */}
      <Link to="/portfolio" style={{ display: 'inline-block', marginTop: '20px', color: '#2563EB', textDecoration: 'underline', fontWeight: '500' }}>
        ← Volver al Portfolio
      </Link>
    </section>
  )
}
