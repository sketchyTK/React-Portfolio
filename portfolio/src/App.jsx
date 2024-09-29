import './App.css'
import Header  from "./components/header";
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <div>
    <div className='header-bg'>
      <Header />
    </div>
      <div className='main-section'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
