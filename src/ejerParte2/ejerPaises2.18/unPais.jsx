import { useState,useEffect } from "react"
import servisPaises from './serviciosPaises'

const UnPais =(i)=>{
 
 const indice = Number(i.i)
 
 const [selecPais,setSelecPais] = useState({})
 const [resOk,setResOk] = useState(false)
 

 useEffect(()=>{

  servisPaises.getPaises()
  .then((res) => {
   setResOk(true)
   const unoPais = res[indice]
   setSelecPais(unoPais)
   
   const lat = res[indice].latlng[0]
   const long = res[indice].latlng[1]

servisPaises.getClima(lat,long)
.then((respuesta)=>{
 console.log(respuesta);
})
   })
 },[])
 

  
 
 return(
  <>
  {resOk? (<div>

   <h2>{selecPais.name.official}</h2>
    <p> Capital: {selecPais.capital}</p>
    <p> Area: {selecPais.area}</p>
    <p>población: {selecPais.population}</p>
    <img src={selecPais.flags.png} alt={selecPais.flags.alt} />
  </div>):'esperando respuesta'}
  </>
 )
}

export default UnPais