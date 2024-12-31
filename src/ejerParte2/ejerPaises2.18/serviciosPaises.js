import axios from "axios";
const apiKey = import.meta.env.VITE_clima

const urlPaises = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getPaises = async () => {
  try {
    const respuesta = await axios.get(urlPaises); 
    return respuesta.data; 
  } catch (error) {
    console.error("Error al obtener los países:", error);
    throw error; 
  }
};

const getClima = async(lat,lon)=>{
 console.log(lat,lon);
 // http://my.meteoblue.com/packages/basic-1h_basic-day?lat=${lat}&lon=${lon}&apikey=${apiKey}
 //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}
 try {
  const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  console.log(respuesta);
  
  return respuesta
 } catch (error) {
  console.error( error.response.data.cod, error.response.data.message);
    throw error.response.data.cod, error.response.data.message; 
 }
}

export default { getPaises,getClima };
