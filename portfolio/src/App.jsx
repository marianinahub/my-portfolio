import { useState, useEffect } from "react"
import { useContext } from "react"
import { LanguageContext } from "./context/LanguageContext"

import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Loader from "./components/Loader"

function App(){

const { lang, toggleLang } = useContext(LanguageContext)

const [loading, setLoading] = useState(true)
const [active, setActive] = useState("")

// loader
useEffect(()=>{
setTimeout(()=>setLoading(false),1500)
},[])

// scroll active section
useEffect(()=>{
const sections = document.querySelectorAll("section")

const handleScroll = () => {
sections.forEach(sec=>{
if(window.scrollY >= sec.offsetTop - 100){
setActive(sec.id)
}
})
}

window.addEventListener("scroll", handleScroll)

return () => window.removeEventListener("scroll", handleScroll)

},[])

if(loading) return <Loader/>

return(

<div>

<div className="lang-switch" onClick={toggleLang}>
  <div className={`switch ${lang === "en" ? "en" : "ua"}`}>
    <span>UA</span>
    <span>EN</span>
  </div>
</div>

<nav className="nav">

<a href="#about">
{lang === "ua" ? "Про мене" : "About"}
</a>

<a href="#projects">
{lang === "ua" ? "Проєкти" : "Projects"}
</a>

<a href="#experience">
{lang === "ua" ? "Досвід" : "Experience"}
</a>

<a href="#contact">
{lang === "ua" ? "Контакти" : "Contact"}
</a>

</nav>

<Hero/>
<About/>
<Projects/>
<Experience/>
<Contact/>

</div>

)

}

export default App