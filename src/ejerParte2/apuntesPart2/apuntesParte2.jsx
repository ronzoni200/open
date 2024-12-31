
import noteService from '../ejercicios2.6-2.10/services/notes.js'
import Note from "./note"
import { useEffect, useState } from "react"
import Notification from './msjError.jsx'
import '../../index.css'
import Footer from './footer.jsx'

const ApuntesParteDos = ()=>{
  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect(()=>{
      noteService.getAll()
      .then((data)=>setNotes(data))
    },[])
 

 const addNotes = (e)=>{
   e.preventDefault()
   
   const id = notes.length+1
  const idString = id.toString()
  
   const noteObject = {
     content: newNote,
     important: Math.random()< 0.5,
     id:idString
   }

   noteService.create(noteObject)
    .then(data => {
      setNotes(notes.concat(data))
      setNewNote('')
    })
 }
 
 const handleNoteChange = (event) => {
   setNewNote(event.target.value)
 }

 const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }

  noteService.upDate(id,changedNote)
  .then(data => {    
    setNotes(notes.map(note => note.id !== id ? note : data))
  }).catch(error => {
    
    setErrorMessage(
    `Note '${note.content}' was already removed from server`
  )
  setTimeout(() => {
    setErrorMessage(null)
  }, 2000)

    setNotes(notes.filter(n => n.id !== id))
  })
}
 
 const notesToShow = showAll
 ? notes
 : notes.filter(note => note.important === true)
 
 return(
   <>
   <hr />
   <h1>Notes</h1>
   <Notification message={errorMessage} />
   <div>
     <button onClick={()=> setShowAll(!showAll)}>
     {showAll ? 'important':'all'}
     </button>
   </div>
   
     <ul>
       {notesToShow.map(note => 
         <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
       )}
     </ul>

     <form  >
       <input value={newNote} onChange={handleNoteChange}/>
       
       <button type="submit" onClick={addNotes}> save </button>
     </form>
   <hr />

   <Footer/>
   </>
 )
}

export default ApuntesParteDos