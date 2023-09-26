import React from 'react'
import {Header, Navbar, Apiadv} from './components'

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
        </div>
        </div>
    )
}

export default App