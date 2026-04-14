import { motion } from "framer-motion"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Hero(){

const { lang } = useContext(LanguageContext)

return(

<section className="hero">

<div className="hero-overlay"></div>

<motion.div
className="hero-content"
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:1 }}
>

<h1>{lang === "en"
? "Maria-Nina"
: "Марія-Ніна"}</h1>

<p>
{lang === "en"
? "Full Stack Developer"
: "Full Stack Developer"}
</p>

</motion.div>

</section>

)

}