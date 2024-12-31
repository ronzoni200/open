import { useState } from "react"


const Filtro =({persons})=>{

 const [busqueda, setBusqueda] = useState('')

 
 const filtroBusqueda = persons.filter((el)=>
  el.name.toLowerCase().includes(busqueda.toLowerCase()))


 return(

  <>
  busqueda: <input type="text" 
      placeholder='ingrese nombre' 
      onChange={(e)=>setBusqueda(e.target.value)}
      value={busqueda} />

      
      {busqueda ? 
      filtroBusqueda.map((el)=> <p key={el.id}>{el.name}:  {el.number}</p>)
      :''}
  </>
 )
}

export default Filtro