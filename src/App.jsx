import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
return (
  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-800">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className="container mx-auto px-8"></div>
    <NavBar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Projects/>
    <Contact/>
  </div>
  )
}
 export default App;