import './App.css';
import React, { useState } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
 import {
   Routes,
   Route,
   BrowserRouter as Router
 } from "react-router-dom";



const App=()=> {
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343d40';
      
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
 const  pageSize=5
   const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [mode, setmode] = useState('light');
    return (
      <div>
        <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
        <Routes>
        <Route path="/" element={<News  mode ={mode}setProgress ={setProgress}apiKey={apiKey}  key='general' pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News  mode ={mode}setProgress ={setProgress}apiKey={apiKey} key='business'  pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News  mode ={mode}setProgress ={setProgress}apiKey={apiKey} key='entertainment'  pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News  mode ={mode}setProgress ={setProgress}apiKey={apiKey} key='general'  pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News  mode ={mode}setProgress ={setProgress}apiKey={apiKey} key='health'  pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News mode ={mode} setProgress ={setProgress}apiKey={apiKey} key='science'  pageSize={pageSize} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News  mode ={mode}setProgress ={setProgress}apiKey={apiKey} key='sports'  pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News mode ={mode} setProgress ={setProgress}apiKey={apiKey}  key='technology}>' pageSize={pageSize} country="in" category="technology"/>}></Route>
          </Routes>
          </Router>
      </div>
    )
  }
  export default App
