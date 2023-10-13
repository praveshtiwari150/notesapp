import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  
  return (
    <div>
      <header class="hero bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4">Welcome to NotePal</h1>
            <p class="lead">Capture Ideas, Anytime, Anywhere.</p>
            <Link to='/Create' href="#contact" class="btn btn-danger btn-lg">Get Started</Link>
        </div>
    </header>
    </div>
  )
}

export default Home