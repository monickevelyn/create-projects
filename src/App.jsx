import './index.scss'
import Footer from './components/footer/Footer.jsx'
import NavBar from './components/navbar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <NavBar />
      <main>
        <Outlet />
      </main>
    <Footer />    
    </>
  )
}

export default App