const Hola = ({name,age})=>{


 const bornYear = () => new Date().getFullYear() - age
 return(
  <>
  <h3>hola {name} tengo {age} años</h3>
  <p>So you were probably born in {bornYear()}</p>
  </>
 )
}
export default Hola