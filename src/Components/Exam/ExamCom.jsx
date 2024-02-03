import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./ExamCom.css"

const API ="https://www.themealdb.com/api/json/v1/1/categories.php"

function ExamCom() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const res = await axios.get(API)
        setFood(res.data.categories)
        console.log(res.data.categories);
      }catch(error) {
        console.log(error);
      }
    }
    getFood();
  }, []);
  return (
    <div className='box'>
     {
      food.map((item) => (
        <Link style={{textDecoration: "none", color: "black"}} key={item.idCategory} className='cart' to={`/category/${item.strCategory}`}>
          <img src={item.strCategoryThumb} alt={item.strCategory}/>
          <h2>{item.strCategory}</h2>
        </Link>
      ))
     }
    </div>
  )
}

export default ExamCom
