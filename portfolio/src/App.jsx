import { useState, useEffect } from "react"

import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Loader from "./components/Loader"

function App(){

const [loading, setLoading] = useState(true)
const [active, setActive] = useState("")

useEffect(()=>{
setTimeout(()=>setLoading(false),1500)
},[])

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

<nav className="nav">
<a className={active==="about" ? "active":""} href="#about">Про мене</a>
<a className={active==="projects" ? "active":""} href="#projects">Проєкти</a>
<a className={active==="experience" ? "active":""} href="#experience">Досвід</a>
<a href="#contact">Контакти</a>
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
