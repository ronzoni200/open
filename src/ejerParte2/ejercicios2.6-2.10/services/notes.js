import axios from "axios";
const baseUrl = 'http://localhost:3003/api/notes/'

const getAll = async ()=> {
 const respuesta = axios.get(baseUrl)
 const res = await respuesta;
 return res.data;}


const create = async (newObjet)=> {
 const respuesta = axios.post(baseUrl,newObjet)
 const res = await respuesta;
 return res.data;}
 
const upDate = async(id,newObjet)=>{ 
 const respuesta = axios.put(`${baseUrl}/${id}`,newObjet)
const res = await respuesta
return res.data}


export default{ getAll, create, upDate}

/*

--probar un error--

const getAll = async () => {
 const request = axios.get(baseUrl)
 const nonExisting = {
   id: 10000,
   content: 'This note is not saved to server',
   important: true,
 }
 const response = await request;
 return response.data.concat(nonExisting);
}
*/