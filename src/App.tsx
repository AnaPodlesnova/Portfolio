import './App.css'

import { Header } from './Layout/header/Header'
import { About } from './Layout/sections/about/About'
import { Contacts } from './Layout/sections/contacts/Contacts'
import { Experience } from './Layout/sections/experience/Experience'
import { Main } from './Layout/sections/main/Main'
import { Portfolio } from './Layout/sections/portfolio/Portfolio'
import { Skills } from './Layout/sections/skills/Skills'



function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <About />
            <Skills/>
            <Portfolio/>
            <Experience />
            <Contacts />

        </div>
    )
}

export default App

