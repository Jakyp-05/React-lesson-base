import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "../Components/Home/HomeCom.css"

const API = "https://reqres.in/api/users"

function ItemUser() {
  const {id} = useParams()
  const [about, setAbout] = useState({})

  useEffect(() => {
    const getItemUser = async () => {
      try {
        const res = await axios.get(`${API}/${id}`)
        setAbout(res.data.data);
      } catch(error) {
        console.log(error);
      }
    }
    getItemUser()
  }, [])

  console.log(about);
  return (
    <div className='home-result'>
      <img src={about.avatar} alt={about.first_name}/>
      <p>{about.first_name}</p>
      <p>{about.last_name}</p>
      <p>{about.email}</p>
    </div>
  )
}

export default ItemUser
