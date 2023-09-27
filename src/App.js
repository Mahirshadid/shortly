import React from 'react'
import {Header, Navbar, Apiadv, Boost} from './components'

import './app.css'

const App = () => {
    return (
        <div className='App'>
        <div className='bg'>
            <Navbar />
        </div>
        <div>
            <Header />
            <Apiadv />
            <Boost />
        </div>
        </div>
    )
}

export default App