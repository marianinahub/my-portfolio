import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="hero">

<div className="hero-overlay"></div>

<motion.div
className="hero-content"
initial={{ opacity:0, y:40 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:1 }}
>

<h1>Марія-Ніна</h1>
<p>Full Stack Developer</p>

</motion.div>

</section>

)

}