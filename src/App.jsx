import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {

  const [turno, setTurno] = useState({
    deporte: {},
    form: false
  })

  let deportes = [
    {id: 1, nombre: 'Futbol'},
    {id: 2, nombre: 'Baloncesto'},
    {id: 3, nombre: 'Rugby'},
    {id: 3, nombre: 'Beisbol'},
    {id: 3, nombre: 'Natación'},
    {id: 3, nombre: 'Patinaje'},
  ]

  return (
    <>
      <h1>De los siguientes deportes, elige uno para inscribirte</h1>
      <h3>La edad debe ser superior a 10 años</h3>
      {deportes.map((deporte) => <Card deporte={deporte} key={deporte.id} setTurno={setTurno}/>)}
      {turno.form && <Form deporte={turno.deporte}/>}
    </>
  )
}

export default App