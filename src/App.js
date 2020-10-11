import React from 'react';
import './App.css'
import Random from './Components/Random_v1';
import Tag from './Components/Tag_V1';

const App = () =>(
    <div>
        <h1>Random GIF App</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
    </div>
)
export default App