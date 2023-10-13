import React, {useState} from 'react';
import './App.css';
import { Route, Routes, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Create from './components/Create'
import Edit from './components/Edit'
import Notes from './components/Notes';
import {itemStateContext} from './components/Context'

function App() {
const [post, setPost] = useState([])

  return (
    <div >
    

   
    <itemStateContext.Provider value={{ post, setPost}}>
      <Nav />
      <Home/>
      <Routes>
        
        <Route path='/' >
        <Route path='Create' element={<Create/>}/>
        <Route path='Notes' element={<Notes/>}/>
        <Route path='Edit' element={<Edit/>}/>
        </Route>
      </Routes>
      </itemStateContext.Provider>
    </div>
  );
}

export default App;
