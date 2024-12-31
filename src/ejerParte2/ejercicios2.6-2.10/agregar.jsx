import { useState, useEffect } from "react"
import personsService from '../ejercicios2.6-2.10/services/agenda'
import List from "./listas"
import Filtro from "./busqueda"
import '../../index.css'
import MsjExito from "../apuntesPart2/msjExito"
import Notification from "../apuntesPart2/msjError"


const EjercAgenda =()=>{
 
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [numero, setNumero] = useState('')
  const [editarUs,setEditarUs] = useState(false)
  const [laPersona,setLaPersona] = useState({})
  const [msjExito, setMsjExito] = useState(null)
  const [msjError, setMsjError] = useState(null)
  
  useEffect(()=>{
   personsService.getAll()
   .then((data)=>setPersons(data))
  },[persons])

 const EjercAgenda = (e)=>{

  e.preventDefault()
 
  if (persons.some((el) => el.name.toLowerCase() === newName.toLowerCase()) || newName==='') {
  alert(`${newName} ya existe o se encuentra vacio`);
  return;
}
if(persons.some((el)=> el.number === numero) || numero === ''){
  alert(` el número ${numero} ya le pertenece a otro usuario / o se encuentra vacio`)
  return
}


const id = persons.length+1;
const idString = id.toString()

     const usuario = {
       name:newName,
       id: idString,
       number:numero
     }
 
     personsService.create(usuario)
     .then(data=>{
       setPersons(persons.concat(data))
       setMsjExito('Usuario agregado con Exito')
       setTimeout(() => {
        setMsjExito(null)
       }, 3000);

       setNewName('')
       setNumero('')
     })
 }

 
 const edit=(el)=>{  
    setNewName(el.name)
    setNumero(el.number)
    setEditarUs(true)

   const agenda = persons.find(persona=>persona.id===el.id)
   setLaPersona(agenda)
   
   
  }
  
  
  const guardar=(e)=>{
    e.preventDefault()
    const personaObjeto = {...laPersona, name:newName, number:numero}

    const confirmar = confirm('estas seguro de guardar los cambios?')
    if(confirmar){
    personsService.upDate(personaObjeto.id, personaObjeto)
    .then(res=>{
      if(res.ok){
    setPersons( persons.map((i)=>{i.id !== personaObjeto.id ? i : res.data}))
    console.log(laPersona);
    }

  setMsjExito('Usuario Editado con exito')
  setTimeout(() => {
    setMsjExito(null)
  }, 2000);

  setNewName('')
  setNumero('')
  setEditarUs(false)
    })
    .catch((e)=>{
      console.log(e);
      setMsjError(`error ${e.message} `)

      setTimeout(() => {
        setMsjError(null)
        setNewName('')
        setNumero('')
        setEditarUs(false)
      }, 2000);
    }) 
  
  }else{
   
      setMsjExito('cancelar edicions')
      setTimeout(() => {
        
        setEditarUs(false)
        setMsjExito(null)
        setNewName('')
        setNumero('')
      }, 1000);

    }
 }


 return(
  <>
  <Filtro persons={persons}/>
  <br /> <br />
          <h3>ingrese datos</h3>
  <MsjExito mensaje={msjExito}/>     
  <Notification mensaje={msjError}/>   
  <form>
        <div>
          name:  <input 
          onChange={(e) => setNewName(e.target.value)} 
          value={newName} />
<br /> <br />
          number: <input 
          onChange={(e)=> setNumero(e.target.value)}
          value={numero} />
        </div>
        <br />
        <div>
          {editarUs? <button onClick={(e)=>guardar(e)}>guardar</button>
          :<button type="submit" onClick={EjercAgenda}>add</button>}
          
        </div>
      </form>
        <List persons={persons} edit={edit} setMsjExito={setMsjExito} editarUs={editarUs}/>
      
        
  </>
 )
}

export default EjercAgenda