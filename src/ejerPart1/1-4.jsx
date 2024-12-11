/**
 1.4: Información del Curso paso 4
Coloca los objetos en un array. Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras partes de la aplicación que sean necesarias para que continue funcionando:

 */
const Eje1_4 = ()=>{
 const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
    <h2>{course}</h2>
    <h3>course: {parts[0].name} exercises: {parts[0].exercises}</h3>
    <h3>course: {parts[1].name} exercises: {parts[1].exercises}</h3>
    <h3>course: {parts[2].name} exercises: {parts[2].exercises}</h3>

    <h4> total the exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h4>
    </>
  )
}

export default Eje1_4