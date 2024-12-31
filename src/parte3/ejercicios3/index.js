const express = require('express')
const appEje3 = express()
appEje3.use(express.json())
const morgan = require('morgan');

//appEje3.use(morgan('tiny'));

morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});

appEje3.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);


let person = [
 { 
   "id": 1,
   "name": "Arto Hellas", 
   "number": "040-123456"
 },
 { 
   "id": 2,
   "name": "Ada Lovelace", 
   "number": "39-44-5323523"
 },
 { 
   "id": 3,
   "name": "Dan Abramov", 
   "number": "12-43-234345"
 },
 { 
   "id": 4,
   "name": "Mary Poppendieck", 
   "number": "39-23-6423122"
 }

]

appEje3.get('/person',(request,response)=>{
 response.json(person)
})

appEje3.get('/info',(request,response)=>{
 const fechaActual = new Date(); 
 const horaRecibida = fechaActual.toLocaleTimeString(); 
 response.send(`se recibió la petición a las ${horaRecibida}`)
})

appEje3.get('/person/:id',(request, response)=>{
 const id = Number(request.params.id)
 const onePerson = person.find(el=>el.id===id)

 if(onePerson){
  response.json(onePerson)
 }else{
  console.log('404');
  response.status(404).end()
 }
})

appEje3.delete('/person/:id',(request,response)=>{
 const id = Number(request.params.id)
 person = person.filter(el=>el.id !== id)
 response.status(204).end()
})

const generarId = ()=>{
 const newId = person.length+1
 return newId
}

appEje3.post('/person',(request, response)=>{
 const body = request.body
 
 const coincidencia = person.some(el=>el.name === body.name)
 
if(coincidencia){
 return response.status(400).json({ 
  error: 'este nombre ya existe' 
})
}
 if(!body.name){
  return response.status(400).json({ 
   error: 'nombre vacio' 
 })
}

 if(!body.number){
  return response.status(400).json({ 
   error: 'numero vacio' 
 })
 }

 const newPerson = {
  name:body.name,
  number:body.number,
  id:generarId()
 }

 person= person.concat(newPerson)
 response.json(newPerson)
})


const PORT = 3004
appEje3.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})