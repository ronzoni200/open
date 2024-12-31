

const Note = ({ note, toggleImportance }) => {

const label = note.important ? 'SI es importante':'NO es importante'

 return (
  <>
  <li className='note'>
   {note.content}
   <button onClick={toggleImportance}>
{label}
   </button>
   </li> 
  </>
 )
}

export default Note