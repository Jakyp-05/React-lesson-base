import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Components/Exam/ExamCom.css'

const API = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

function IdFood() {
	const { id } = useParams()
	const [category, setCategory] = useState({})

	useEffect(() => {
		const getCategory = async () => {
			try {
				const res = await axios.get(API + id)
				setCategory(res.data.meals[0])
				console.log(res.data.meals[0])
			} catch (error) {
				console.log(error)
			}
		}
		getCategory()
	}, [])
	return (
		<div className='food-category'>
			<div className='category'>
				<img src={category.strMealThumb} alt={category.strArea} />
				<h2>{category.strMeal}</h2>
			</div>
			<div className='title'>
				<h2>ingredients</h2>
				<div className='category-title'>
					<div className='category-texts'>
						<h2>{category.strIngredient1 && category.strIngredient1}</h2>
						<h2>{category.strIngredient2 && category.strIngredient2}</h2>
						<h2>{category.strIngredient3 && category.strIngredient3}</h2>
						<h2>{category.strIngredient4 && category.strIngredient4}</h2>
						<h2>{category.strIngredient5 && category.strIngredient5}</h2>
						<h2>{category.strIngredient6 && category.strIngredient6}</h2>
						<h2>{category.strIngredient7 && category.strIngredient7}</h2>
						<h2>{category.strIngredient8 && category.strIngredient8}</h2>
						<h2>{category.strIngredient9 && category.strIngredient9}</h2>
						<h2>{category.strIngredient10 && category.strIngredient10}</h2>
						<h2>{category.strIngredient11 && category.strIngredient11}</h2>
						<h2>{category.strIngredient12 && category.strIngredient12}</h2>
						<h2>{category.strIngredient13 && category.strIngredient13}</h2>
						<h2>{category.strIngredient14 && category.strIngredient14}</h2>
						<h2>{category.strIngredient15 && category.strIngredient15}</h2>
						<h2>{category.strIngredient16 && category.strIngredient16}</h2>
						<h2>{category.strIngredient17 && category.strIngredient17}</h2>
						<h2>{category.strIngredient18 && category.strIngredient18}</h2>
						<h2>{category.strIngredient19 && category.strIngredient19}</h2>
						<h2>{category.strIngredient20 && category.strIngredient20}</h2>
					</div>
					<div className='category-ingredients'>
						<h2>{category.strMeasure1 && category.strMeasure1}</h2>
						<h2>{category.strMeasure2 && category.strMeasure2}</h2>
						<h2>{category.strMeasure3 && category.strMeasure3}</h2>
						<h2>{category.strMeasure4 && category.strMeasure4}</h2>
						<h2>{category.strMeasure5 && category.strMeasure5}</h2>
						<h2>{category.strMeasure6 && category.strMeasure6}</h2>
						<h2>{category.strMeasure7 && category.strMeasure7}</h2>
						<h2>{category.strMeasure8 && category.strMeasure8}</h2>
						<h2>{category.strMeasure9 && category.strMeasure9}</h2>
						<h2>{category.strMeasure10 && category.strMeasure10}</h2>
						<h2>{category.strMeasure11 && category.strMeasure11}</h2>
						<h2>{category.strMeasure12 && category.strMeasure12}</h2>
						<h2>{category.strMeasure13 && category.strMeasure13}</h2>
						<h2>{category.strMeasure14 && category.strMeasure14}</h2>
						<h2>{category.strMeasure15 && category.strMeasure15}</h2>
						<h2>{category.strMeasure16 && category.strMeasure16}</h2>
						<h2>{category.strMeasure17 && category.strMeasure17}</h2>
						<h2>{category.strMeasure18 && category.strMeasure18}</h2>
						<h2>{category.strMeasure19 && category.strMeasure19}</h2>
						<h2>{category.strMeasure20 && category.strMeasure20}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IdFood
