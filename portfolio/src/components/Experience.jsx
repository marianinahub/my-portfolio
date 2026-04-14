import { motion } from "framer-motion"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Experience(){

const { lang } = useContext(LanguageContext)

const data = [
{
title:"Frontend Developer",
company:"Freelance",
date:"2025 — зараз",
desc:
lang === "en"
? "Development of responsive web applications using React, JavaScript, HTML and CSS. Creation of modern UI/UX, REST API integration, performance optimization. Handling client requests, functional refinement and project support."
: "Розробка адаптивних веб-додатків з використанням React, JavaScript, HTML та CSS. Створення сучасного UI/UX, інтеграція REST API, оптимізація продуктивності. Робота з клієнтськими запитами, доопрацювання функціоналу та підтримка проєктів."
},
{
title:"Full Stack Developer Student",
company:"GoIT",
date:"2025 — 2026",
desc:
lang === "en"
? "Training in Full Stack development (HTML, CSS, JavaScript, React, TypeScript, Node.js). Implementation of several projects, work with REST API, responsive layout and modern development practices. Gained teamwork skills and preparation for employment."
: "Навчання за програмою Full Stack розробки (HTML, CSS, JavaScript, React, TypeScript, Node.js). Реалізація кількох проєктів, робота з REST API, адаптивна верстка та сучасні практики розробки. Отримала навички командної роботи та підготовки до працевлаштування."
}
]

return(

<section id="experience">

<h2>{lang === "ua" ? "Досвід" : "Experience"}</h2>

<div className="timeline">

{data.map((item,i)=>(
<motion.div
className="timeline-item"
key={i}
initial={{ opacity:0, y:50 }}
whileInView={{ opacity:1, y:0 }}
transition={{ delay:i*0.2 }}
viewport={{ once:true }}
>

<div className="timeline-dot"></div>

<div className="timeline-content">

<h3>{item.title}</h3>
<p className="company">{item.company}</p>
<span className="date">{item.date}</span>
<p>{item.desc}</p>

</div>

</motion.div>
))}

</div>

</section>

)

}