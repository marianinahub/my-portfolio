import { motion } from "framer-motion"

export default function Experience(){

const data = [
{
title:"Frontend Developer",
company:"Freelance",
date:"2025 — зараз",
desc:"Розробка адаптивних веб-додатків та лендингів з використанням React, HTML, CSS та JavaScript. Інтеграція REST API, оптимізація продуктивності та створення сучасного UI/UX. Робота з клієнтськими задачами, внесення правок та підтримка проєктів."
},
{
title:"Full Stack Developer Student",
company:"GoIT",
date:"2025 — 2026",
desc:"Навчання за програмою Full Stack розробки (HTML, CSS, JavaScript, React, TypeScript, Node.js). Реалізація кількох проєктів, робота з REST API, адаптивна верстка та сучасні практики розробки. Отримала навички командної роботи та підготовки до працевлаштування."
}
]

return(

<section id="experience">

<h2>Досвід</h2>

<div className="timeline">

{data.map((item, i) => (

<motion.div
className="timeline-item"
key={i}
initial={{ opacity:0, x:-50 }}
whileInView={{ opacity:1, x:0 }}
transition={{ delay:i*0.2 }}
>

<h3>{item.title}</h3>
<p>{item.place}</p>
<span>{item.year}</span>
<p>{item.desc}</p>

</motion.div>

))}

</div>

</section>

)

}