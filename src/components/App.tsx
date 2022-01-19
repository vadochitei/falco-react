import React from 'react'

import './App.css'
import MainLeft from './MainLeft'
import ContactForm from './ContactForm'
import Topbar from './Topbar'
import Projects from './Projects'

const App = () => {
    return (
        <>
            <Topbar />
            <div className='main-container'>
                <MainLeft />
                <ContactForm />
            </div>
            <Projects />
        </>
    )
}

export default App