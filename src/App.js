import React from 'react'
import Sidebar from './components/Sidebar.jsx';
import Attendencesystem from './components/attendencesystem.jsx';
import Infotable from './infotable.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Sidebar/>
      <Attendencesystem/>
      <Infotable/>
    </div>
  )
}

export default App
