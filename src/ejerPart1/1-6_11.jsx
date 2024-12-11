/*
1.6: unicafe, paso 1
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. Tu aplicación final podría verse así:

---------------------

1.7: unicafe, paso 2
Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: el número total de comentarios recopilados, la puntuación promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.

-----------------------

1.8: unicafe, paso 3
Refactoriza tu aplicación para que la visualización de las estadísticas se extraiga en su propio componente Statistics. El estado de la aplicación debe permanecer en el componente raíz App.

Recuerda que los componentes no deben definirse dentro de otros componentes:

----------------

1.9: unicafe paso 4
Cambia tu aplicación para mostrar estadísticas solo una vez que se hayan recopilado los comentarios.

---------------------

1.10: unicafe paso 5
Continuemos refactorizando la aplicación. Extrae los siguiente dos componentes:

Button para definir los botones utilizados para enviar comentarios
StatisticLine para mostrar una única estadística, por ejemplo, la puntuación media.
Para ser claros: el componente StatisticLine siempre muestra una única estadística, lo que significa que la aplicación utiliza varios componentes para representar todas las estadísticas:

------------------------

1.11*: unicafe, paso 6
Muestra las estadísticas en una tabla HTML, de modo que tu aplicación se vea más o menos así:


*/

import { useState } from "react"

const Statistics = ({bueno, malo, neutro, total})=>{
 
 const positive = bueno*100/total
 const negative = malo*100/total

 return(
  <>
  <table>
   <thead>
    <tr>
     <th>Datos</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>Buenos</td>
     <td>{bueno}</td>
    </tr>
    <tr>
     <td>Malos</td>
     <td>{malo}</td>
    </tr>
    <tr>
     <td>Neutros</td>
     <td>{neutro}</td>
    </tr>
    <tr>
     <td>Total</td>
     <td>{total}</td>
    </tr>
    <tr>
     <th>promedios</th>
    </tr>
    <tr>
     <td>positivos</td>
     <td>{positive.toFixed(2)}</td>
    </tr>
    <tr>
     <td>negativos</td>
     <td>{negative.toFixed(2)}</td>
    </tr>
   </tbody>
  </table>

  </>
 )
}


const Boton = ({coment,text})=>{
 return <button onClick={coment}> {text} </button>
}

const Eje1_6 = ()=>{

 const [bueno, setBueno] = useState(0);
 const [malo, setMalo] = useState(0);
 const [neutro, setNuetro] = useState(0);

 const good =()=> setBueno(bueno +1)
 const bad = ()=> setMalo(malo + 1)
 const neut =()=> setNuetro(neutro +1)
 const total = bueno+malo+neutro


 return(
  <>
  <h2>give feedback</h2>
  <Boton coment={good} text='me gusto'/>
  <Boton coment={bad} text='no me gusto'/>
  <Boton coment={neut} text='mas o menos'/>

  <h2>estadisticas</h2>

 {total > 0
 ? <Statistics bueno={bueno} malo={malo} neutro={neutro} total={total}/>
 :<h2>no hay estadisticas todavia</h2>
}
  </>
 )
}

export default Eje1_6