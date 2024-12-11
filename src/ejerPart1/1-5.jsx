
/*
1.5: Información del Curso paso 5
Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript. Arregla todo lo que se rompa.
*/

const Eje1_5 = () =>{
 
 const course = {
  name: 'Half Stack application development',
  parts: [
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
}
 return(
  <>
  <h2>{course.name}</h2>
  <h3>course: {course.parts[0].name} exercises: {course.parts[0].exercises}</h3>
  <h3>course: {course.parts[1].name} exercises: {course.parts[1].exercises}</h3>
  <h3>course: {course.parts[2].name} exercises: {course.parts[2].exercises}</h3>

  <h4> total the exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</h4>
  </>
 )
}

export default Eje1_5