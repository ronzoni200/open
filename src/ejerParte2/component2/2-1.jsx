
import courses from "./dbCpurses"

const Eje2_1 = ()=>{
 
 

const cursosCero = []
const nuevoCourse = [...courses[0].parts] 
nuevoCourse.map((el)=> cursosCero.push(el.exercises))
const sumaCursos = cursosCero.reduce((laSuma,laCantidad)=>laSuma+laCantidad,0)

const cursosUno =[]
const nuevoCourseUno = [...courses[1].parts]
nuevoCourseUno.map((el)=> cursosUno.push(el.exercises))
const sumaCursosUno = cursosUno.reduce((laSuma,laCantidad)=>laSuma+laCantidad,0)



 return(
  <>
   <h3>Web Development curriculum</h3>
   <h2>{courses[0].name}</h2>
   
   {nuevoCourse.map((el)=> <p key={el.id}> {el.name} {el.exercises} </p>)}
   {<p> <b> Total of {sumaCursos}  exercises </b></p>}

   <br />
   <h2>{courses[1].name}</h2>
   {courses[1].parts.map((el)=>  <p key={el.id}> {el.name} {el.exercises}</p>)}
   {<p> <b> Total of {sumaCursosUno}  exercises </b></p>}
  </>
 )
}

export default Eje2_1