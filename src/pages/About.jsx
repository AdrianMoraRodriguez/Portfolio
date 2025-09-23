import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function About() {
  return (
    <motion.section
      style={{
      width: '100vw',
      height: '100vh',           // altura completa de la ventana
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#1E3A8A', // color de fondo
      color: '#F9FAFB',
      boxSizing: 'border-box',
      padding: '20px',
    }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Imagen */}
      <div
        style={{
          flexShrink: 0,
          width: 'clamp(256px, 15vw, 96px)',
          height: 'clamp(256px, 15vw, 96px)',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <img
          src="/img/profile.jpg"
          alt="Adrián Mora"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '75%',
            border: '1px solid #F9FAFB', // borde claro sobre gris
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Texto */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(4px, 1vw, 12px)',
          textAlign: 'center', // centrado en móvil
          minWidth: '250px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 1.75rem)',
            fontWeight: 700,
            color: '#F9FAFB', // título blanco
          }}
        >
          Hola, soy Adrián Mora
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            lineHeight: 1.75,
            color: '#D1D5DB', // párrafo gris claro
          }}
        >
          Actualmente estoy cursando el Máster en Desarrollo de Videojuegos en la Universidad de La Laguna. Desde niño me han fascinado los videojuegos, tanto por su creatividad como por su capacidad de contar historias y desafiar la lógica. Me apasiona la investigación, explorando nuevas tecnologías y técnicas para crear experiencias interactivas innovadoras y memorables. También soy desarrollador y estoy muy interesado en la ciencia de datos, la visualización de gráficos, la inteligencia artificial y la computación en general. Aquí comparto algunos de mis proyectos más recientes.
        </p>

        {/* Enlaces */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(12px, 2vw, 16px)',
            marginTop: 'clamp(4px, 1vw, 8px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: '#60A5FA', // color de los iconos
          }}
        >
          <a href="https://github.com/AdrianMoraRodriguez" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/adri%C3%A1n-mora-9387232a3/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:moradrian03@gmail.com" style={{ color: 'inherit' }}>
            <FaEnvelope size={24} />
          </a>
</div>

      </div>
    </motion.section>
  )
}
