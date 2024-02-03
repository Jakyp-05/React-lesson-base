import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

let PRO_API = `http://178.128.162.248:8070/api/v1/advertisement/ads/`

function Product() {
	const { id } = useParams()
	const [result, setResult] = useState({})

	useEffect(() => {
		const getResult = async () => {
			try {
				const res = await axios.get(PRO_API + id)
				console.log(res)
				if (res.status === 200) {
					setResult(res.data)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getResult()
	}, [])
	console.log(result)

	return (
		<div>
			<img src={result.image} />
			<h2>{result.title}</h2>
		</div>
	)
}

export default Product
