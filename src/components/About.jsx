import { motion } from "framer-motion"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function About(){

const { lang } = useContext(LanguageContext)

return(

<section id="about">
<h2>
{lang === "en" ? "About me" : "Про мене"}
</h2>

<p>
{lang === "en"
? `Full Stack Developer focused on building modern web applications.

I work with HTML, CSS, JavaScript, React, TypeScript, Node.js and MongoDB.
I learn quickly, love clean code, and modern design.

Open to new opportunities and team collaboration.`
: `Full Stack Developer з фокусом на створення сучасних веб-додатків.

Працюю з HTML, CSS, JavaScript, React, TypeScript, Node.js та MongoDB.
Швидко навчаюсь, люблю чистий код та сучасний дизайн.

Відкрита до нових можливостей та команди.`}
</p>
</section>

)

}