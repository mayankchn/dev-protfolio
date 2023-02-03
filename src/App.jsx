import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import ProjectsPage from "./components/ProjectsPage"
import Contact from "./components/Contact"

function App() {
  return (
    <main>
      <Navbar/>
      <About />
      <Skills />
      <ProjectsPage />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
