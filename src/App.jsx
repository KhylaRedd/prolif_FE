
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Index from './pages/Index';
import Show from './pages/Show';
import Edit from './pages/Edit';
import Network from './components/Network';
import Add from './pages/Add';
import FourOfour from './pages/FourOfour';
import Kara from './pages/Kara';
import Mentions from './pages/Mentions';


function App() {



  return (
    <>
    <div>
      <NavBar/>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/artists" element={<Index/>}/>
             <Route path="/artists/:id" element={<Show/>}/>
             <Route path="/artists/:id/edit" element={<Edit/>}/>
             <Route path="/kara" element={<Kara/>}/>
             <Route path="/newartist" element={<Add/>}/>
             <Route path="*" element={<FourOfour/>}/>
             <Route path="/artists/404" element={<FourOfour/>}/>
             <Route path="/honerable" element={<Mentions/>}/>
        </Routes>
      <Network/>
    </div>
    </>
  )
}

export default App
