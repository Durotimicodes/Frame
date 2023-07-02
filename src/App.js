import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";
import { createContext, useState } from "react";
import ReactSwitch from 'react-switch'




export const ThemeContext = createContext(null)




function App() {


  const [theme, setTheme] = useState("dark")
  const toogleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
    
    <div id={theme} className="bg-white text-black">
    <Navbar/>
    <Home/>
    <div className="switch" >
    <ul>
    <li>Switch</li>
    <li> <ReactSwitch onChange={toogleTheme} checked={ theme === "light"} /></li>
    </ul>
    </div>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
