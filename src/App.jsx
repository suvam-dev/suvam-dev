import './App.css'
import Navbar from './section/navbar.jsx'
import Landing from './section/Landing.jsx'
import Project from './section/project.jsx'
import Carousel from './section/carousel.jsx'
import ContactMe from './section/ContactMe.jsx'
import ContactSection from './section/ContactSection.jsx'
import Footer from './section/footer.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Project />
      <Carousel />
      <ContactMe />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App;
