import './index.scss'
import Footer from './components/footer/Footer.jsx'
import NavBar from './components/navbar/NavBar.jsx'
import NewProjects from './pages/new-project/NewProject.jsx'

const App = () => {
  return (
    <>
    <NavBar />
    <NewProjects />
    <Footer />    
    </>
  )
}

export default App