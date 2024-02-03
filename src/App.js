import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import ItemUser from './Pages/ItemUser'
import Exam from './Pages/Exam'
import FoodUser from './Pages/FoodUser'
import IdFood from './Pages/IdFood'
import Product from './Pages/Product'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/ads/:id' element={<Product />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/user/:id' element={<ItemUser />} />
					<Route path='/exam' element={<Exam />} />
					<Route path='/category/:name' element={<FoodUser />} />
					<Route path='/food/:id' element={<IdFood />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
