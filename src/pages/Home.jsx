import React from 'react'

export default function Home() {
  return (
    <section style={{
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
    }}>
      <div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '16px' }}>
          Bienvenido a mi portfolio
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
          Soy Adrián Mora, estudiante del Máster en Desarrollo de Videojuegos en la Universidad de La Laguna.
          Aquí podrás explorar mis proyectos, investigación y trabajos más recientes.
        </p>
      </div>
    </section>
  )
}
