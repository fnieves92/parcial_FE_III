import React from 'react'
import { useState } from 'react'

const Form = ({deporte}) => {

    const [cliente, setCliente] = useState({
        nombre: '',
        edad: ''
    })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    console.log(cliente)
    
    const handleSubmit = () => {
        if(cliente.nombre.length > 3 && cliente.edad > 10) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
        <h3>Inscribirme {deporte.nombre}</h3>
        <label>Nombre del cliente </label>
        <input type="text" onChange={(event) => setCliente({...cliente, nombre: event.target.value})}/>
        <label>Edad </label>
        <input type="text" onChange={(event) => setCliente({...cliente, edad: event.target.value})}/>
        <button onClick={handleSubmit}>Enviar</button>
        {enviado && <h3>Inscripción exitosa para el deporte, bienvenido: {cliente.nombre}</h3>}
        {error && <h3 style={{color: 'red'}}>Por favor llene los campos correctamente, nombre y edad mayor a 10 años</h3>}
    </div>
  )
}

export default Form