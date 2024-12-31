import axios from "axios";
const baseUrl = 'http://localhost:3002/persons'

const getAll = async()=>{
const respuesta = axios.get(baseUrl);
const res = await respuesta;
return res.data
}

const create = async(usuario)=>{
const respuesta = axios.post(baseUrl,usuario);
const res = await respuesta;
return res.data
}

const delet = async(id)=>{
const respuesta = axios.delete(`${baseUrl}/${id}`);
const res=await respuesta;

}

const upDate = async(id,newObjet)=>{
 const respuesta =axios.put(`${baseUrl}/${id}`,newObjet)
 const res = await respuesta

 
 return res
}

export default {getAll, create, delet, upDate}