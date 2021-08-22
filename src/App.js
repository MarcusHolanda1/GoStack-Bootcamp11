import React, { useState, useEffect } from 'react';

import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'

function App(){
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        
       const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`, 
            owner: "Marcola bolado"
        })

        const project = response.data

        setProjects([... projects, project])
        // setProjects([...projects, `Novo projeto ${Date.now()}`])
    }

    return  (<>
                <Header title="Projects" />;

                <img src={backgroundImage} width={300}></img>

                <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>

                <button class="buttonRegist" type="button" onClick={handleAddProject}>Adicionar projeto</button>
            </>
    )}

export default App;