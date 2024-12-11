/*
1.12*: anecdotes, paso 1
El mundo de la ingeniería de software está lleno de anécdotas que destilan verdades atemporales de nuestro campo en breves frases.

Expande la siguiente aplicación agregando un botón en el que se pueda hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software:

-------------------------

1.14*: anecdotes, paso 3
Ahora implementa la versión final de la aplicación que muestra la anécdota con el mayor número de votos
Si varias anécdotas empatan en el primer lugar, es suficiente con solo mostrar una de ellas.
*/

import { useState } from "react"
const Anecdotes = ()=>{
 
 const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const anecdotas = [
 'Si duele, hazlo más a menudo.',
 'Añadir más personal a un proyecto de software atrasado lo hace más tarde.',
 'El primer 90 por ciento del código representa el 10 por ciento del tiempo de desarrollo... El 10 por ciento restante del código representa el otro 90 por ciento del tiempo de desarrollo.',
 'Cualquier tonto puede escribir un código que una computadora pueda entender. Los buenos programadores escriben código que los humanos puedan entender.',
 'La optimización prematura es la raíz de todos los males.',
 'Depurar es el doble de difícil que escribir el código en primer lugar. Por lo tanto, si escribes el código de la manera más ingeniosa posible, por definición, no eres lo suficientemente inteligente para depurarlo.',
 'Programar sin un uso intensivo de console.log es lo mismo que si un médico se negara a usar rayos X o análisis de sangre para diagnosticar a los pacientes.',
 'La única manera de ir rápido es hacerlo bien.'
];

const [selected, setSelected] = useState(0)
const [seleccionar, setSeleccionar] = useState(0)
const [puntos, setPuntos] = useState(new Array(anecdotas.length).fill(0));
const [aleatorio,setAleatorio] = useState(0)
const [maximo,setMaximo] = useState(0)
const [indice,setIndice] = useState(0)



const selec = ()=>{
 const selRandom = Math.round(Math.random()*anecdotes.length)
 setSelected(anecdotes[selRandom])
 setSeleccionar(anecdotas[selRandom])
 setAleatorio(selRandom)

 const max = Math.max(...puntos)
setMaximo(max)
const ind = puntos.indexOf(max)
setIndice(ind)
}

const votar = ()=>{
 const arraySuma = [...puntos]
 arraySuma[aleatorio]+=1
 setPuntos(arraySuma)
}



 return(
  <>
  <h2>Anecdotes</h2>

  {selected?
  (<>
  <p>{selected} <br></br> <br />
  {seleccionar}</p> <br></br>
  <p>puntos: {puntos[aleatorio]} </p>
  </>)
  :<p>click para empezar</p>}

{maximo?
(<>
<h3>frace mas votada:</h3>
<p>{anecdotas[indice]} con {maximo} puntos</p>
</>)
 :<p>todavia no hubo votaciones</p>}
 

  {selected ? 
  (<>
     <button onClick={selec}>next</button>
     <button onClick={votar}>votar</button>
   </>)
  : <button onClick={selec}> start </button>}
  
  </>
 )
}

export default Anecdotes