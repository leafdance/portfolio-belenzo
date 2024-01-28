/*
* 
* Jasper Belenzo
* 301329283
*
*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './src/About'
import Services from './src/Services'
import Qualifications from './src/Qualifications'
import Contact from './src/Contact'
import Projects from './src/Projects'

const MainRouter = () => {
	return (<div>
                <Layout/>
				<Routes>
					<Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/qualifications" element={<Qualifications />} />
				</Routes>
			</div>)
}

export default MainRouter