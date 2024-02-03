import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../Components/Exam/ExamCom.css'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

function FoodUser() {
	const { name } = useParams()
	const [exam, setExam] = useState([])
	console.log('name')

	useEffect(() => {
		const getExam = async () => {
			try {
				const res = await axios.get(API_URL + name)
				setExam(res.data.meals)
				console.log(res.data.meals)
			} catch (error) {
				console.log(error)
			}
		}
		getExam()
	}, [])

	return (
		<div className='box-food'>
			{exam.map(item => (
				<Link style={{textDecoration: "none", color: "black"}} key={item.idMeal} className='food' to={`/food/${item.idMeal}`}>
					<img src={item.strMealThumb} alt={item.strMeal} />
					<h2>{item.strMeal}</h2>
				</Link>
			))}
		</div>
	)
}

export default FoodUser
