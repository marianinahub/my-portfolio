import { motion } from "framer-motion"

export default function About(){

return(

<motion.section
id="about"
initial={{ opacity:0, y:50 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
viewport={{ once:true }}
>

<h2>Про мене</h2>

<p>
Full Stack Developer з фокусом на створення сучасних веб-додатків.

Працюю з React, Node.js та MongoDB.
Швидко навчаюсь, люблю чистий код та сучасний дизайн.

Відкрита до нових можливостей та команди.
</p>

</motion.section>

)

}