
import personsService from '../ejercicios2.6-2.10/services/agenda'

const List =({persons, edit, setMsjExito, editarUs})=>{

 

 const eliminar =(id)=>{
  const confirmar= confirm('seguro de eliminar este contacto de la agenda?')
 

  if(confirmar){
personsService.delet(id)
setMsjExito('Usuario eliminado con Exito')

setTimeout(() => {
  setMsjExito(null)
}, 2000);
  }
 }

 const pasar=(el)=>{
  edit(el)
 }
 
 return(
  <>
  <ul>
   {persons.map((el)=>
       
    <li key={el.id} className="note"> 
    {el.name} {el.number} 
    {editarUs ? 
    <button disabled> editar </button> 
    : <button onClick={(e)=>{pasar(el)}}> editar </button>}
    
    <button onClick={()=>eliminar(el.id)}>Borrar</button>
    </li> 
   )}   
  </ul>
  </>
 )
}

export default List