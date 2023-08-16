import React from 'react'

const Card = ({deporte, setTurno}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <h3 style={{marginRight: 100}}>{deporte.nombre}</h3>
        <button onClick={() => setTurno({deporte: deporte, form: true})}>Inscribirme</button>
    </div>
  )
}

export default Card