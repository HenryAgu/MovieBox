import React from 'react'
import Hero from './components/Hero/Hero'
import TopMovies from './components/TopMovies/TopMovies'
import Footer from './components/Footer/Footer'

const Home = () => {
  return (
    <main>
        <Hero/>
        <TopMovies/>
        <Footer/>
    </main>
  )
}

export default Home