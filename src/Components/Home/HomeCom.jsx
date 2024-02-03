import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./HomeCom.css"
 
const API = "https://reqres.in/api/users/"

function HomeCom() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(API)
        console.log(response.data.data);
        setUser(response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUser()
  }, [])


  return (
    <div className='home'>
        {
          user.map((item) => (
            <Link style={{textDecoration: "none", color: "black"}} key={item.id} to={`/user/${item.id}`}>
              <img src={item.avatar} alt={item.first_name}/>
              <p>{item.first_name}</p>
            </Link>
          ))
        }
    </div>
  )
}

export default HomeCom
