/*
1.3: Información del Curso, paso 3
Avancemos para usar objetos en nuestra aplicación. Modifica las definiciones de las variables del componente App de la siguiente manera y también refactoriza la aplicación para que siga funcionando:


*/
const Eje1_3 = ()=>{

 const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
    <h2>{course}</h2>

    <h3>Course: {part1.name}: exercises:{part1.exercises}</h3>
    <h3>Course: {part2.name}: exercises:{part2.exercises}</h3>
    <h3>Course: {part3.name}: exercises:{part3.exercises}</h3>
    <h4> total the exercises: {part1.exercises + part2.exercises + part3.exercises}</h4>
    </>
  )
}

export default Eje1_3