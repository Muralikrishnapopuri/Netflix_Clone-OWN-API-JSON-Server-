
import './App.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/login'
// import Signup from './pages/signup'
import Netflix from './pages/netflix'
import Player from './pages/player'
import Watch from './pages/watch';
import Upcoming from './pages/Upcoming'
import Telugu from './pages/Telugu'
import Hindi from './pages/Hindi'
import English from './pages/English'
import Signupp from './pages/Signupp'


function App() {
 

  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Signupp/>} />
      <Route exact path="/netflix" element={<Netflix/>} />
      <Route exact path="/player" element={<Player/>} />
      <Route exact path="/watch" element={<Watch/>} />
       <Route exact path="/upcoming" element={<Upcoming/>}/>
       <Route exact path="/telugu" element={<Telugu/>}/>
       <Route exact path="/hindi" element={<Hindi/>}/>
       <Route exact path="/english" element={<English/>}/>
    </Routes>
    </BrowserRouter>
   
    
    


  )
} 

export default App
