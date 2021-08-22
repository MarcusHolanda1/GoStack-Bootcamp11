import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'

function App(){
    const [projects, setProjects] = useState(['Desenvolvimento de app'])
    
    function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`)



        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return  <>
                <Header title="Projects" />;

                <img src={backgroundImage} width={300}></img>

                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>

                <button class="buttonRegist" type="button" onClick={handleAddProject}>Adicionar projeto</button>
            </>
}

export default App;