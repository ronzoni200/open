
const MsjExito = ({mensaje}) =>{

 if(mensaje === null) {
  return null}
 
 return(
  <>
   <div className="exito">
    <h3>{mensaje}</h3>
   </div>
  </>
 )
}
export default MsjExito