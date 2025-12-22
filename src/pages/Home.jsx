import React from 'react'

export default function Home() {
  return (
    <section style={{
      width: '100vw',
      height: '100vh',  // altura completa de la ventana
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#1E3A8A', // color de fondo por si la imagen no carga
      color: '#000000ff',
      boxSizing: 'border-box',
      padding: '20px',
      backgroundImage: 'url(img/home.jpg)', // Ruta de la imagen
      backgroundSize: 'cover',  // Hace que la imagen cubra toda la sección
      backgroundPosition: 'center',  // Centra la imagen
      backgroundRepeat: 'no-repeat',  // Evita que la imagen se repita
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Fondo blanco con 70% de opacidad
        padding: '20px',
        borderRadius: '8px',  // Opcional: para bordes redondeados
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '16px' }}>
          Bienvenido
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
          Soy Adrián Mora, estudiante del Máster en Desarrollo de Videojuegos en la Universidad de La Laguna.
          Aquí podrás explorar mis proyectos, investigación y trabajos más recientes.
        </p>
      </div>
    </section>
  )
}
