import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './About.css'

const API = 'http://178.128.162.248:8070/api/v1/category/categories/'

function AboutCom() {
	const [category, setCategory] = useState([])
	const [product, setProduct] = useState([])

	useEffect(() => {
		const getCategory = async () => {
			try {
				const res = await axios.get(API)
				// console.log(res);
				if (res.status === 200) {
					setCategory(res.data)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getCategory()
	}, [])

	let PRO_API = `http://178.128.162.248:8070/api/v1/advertisement/ads/`

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(PRO_API)
				console.log(res.data.results)
				if (res.status === 200) {
					setProduct(res.data.results)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getProduct()
	}, [])

	return (
		<>
			<div className='about'>
				{category.map(item => (
					<div key={item.id} className='item-about'>
						<img src={item.image} alt={item.title_kg} />
						<h2>{item.title_kg}</h2>
					</div>
				))}
			</div>
			<div className='main'>
				{product.map(item => (
					<Link key={item.id} className='main-product' to={`/ads/${item.id}`}>
						<img src={item.image} alt={item.title} />
						<div className='main-product-text'>
							<h2>{item.title}</h2>
							<p>
								{item.price} {item.currency}
							</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default AboutCom
