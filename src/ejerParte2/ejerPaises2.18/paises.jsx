import { useEffect,useState } from 'react'
import servisPaises from './serviciosPaises'
import UnPais from './unPais'

const Pais =()=>{

const [arrayPaises,setArrayPaises] = useState([]) 
const [busqueda, setBusqueda] = useState('')
const [selecPais,setSelecPais] = useState({})
const [resOk,setResOk] = useState(false)
const [ver,setVer]=useState(false)





useEffect(() => {
 servisPaises.getPaises()
   .then((res) => {
     const nombresPaises = res
       .filter((el) => el.name && el.name.official)
       .map((el) => el.name.official);
     setArrayPaises(nombresPaises);
   })
   .catch((error) => console.error("Error al obtener países:", error));
}, []);

const filtroBusqueda = arrayPaises
.map((pais, index) => ({ nombre: pais, posicion: index })) // Añadir posición
.filter((p) =>
  p.nombre.toLowerCase().includes(busqueda.toLowerCase())
); // Filtrar por nombre


const uno =(i)=>{
 servisPaises.getPaises()
 .then((res) => {
  setResOk(true)
  const unoPais = res[i]
  setSelecPais(unoPais)
 })
 
}
 
return (
 <>
   <input
     type="text"
     placeholder="buscar paises"
     onChange={(e) => setBusqueda(e.target.value)}
     value={busqueda}
   />

   {filtroBusqueda.length > 10 ? (
     "Sé más específico"
   ) 
   : filtroBusqueda.length < 10 && filtroBusqueda.length > 2 
   ? ( filtroBusqueda.map((pais) => (
    <div key={pais.posicion}>
      <p >
       {pais.nombre} (posición: {pais.posicion})
       </p> <button> ver </button>
    
    </div>
     ))
   ) 
   
   : filtroBusqueda.length === 1 
   ? ( filtroBusqueda.map((pais) => (
     <div key={pais.posicion}>
       <p >
         {pais.nombre} (posición: {pais.posicion})
       </p>
     <button onClick={()=>setVer(true)}> ver </button>


     {ver?
      <UnPais i={pais.posicion}/>
      :<p>Esperando...</p>}
     </div>
     ))
   ) : (
     ""
   )}

  
 </>
);
}

export default Pais

/*
for (const key in selecPais.languages) {
  console.log(`Clave: ${key}, Valor: ${selecPais.languages[key]}`);}

*/