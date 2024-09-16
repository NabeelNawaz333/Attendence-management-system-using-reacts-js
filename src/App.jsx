import React from 'react'
import Sidebar from './components/Sidebar.jsx';
import Attendencesystem from './components/attendencesystem.jsx';
import Infotable from './infotable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
     <div className="app-container">
      <Sidebar/>
      <Attendencesystem/>
      <Infotable/>
    </div>
  )
}
export default App
