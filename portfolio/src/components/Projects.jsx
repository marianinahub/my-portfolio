import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Projects(){

const [repos, setRepos] = useState([])

useEffect(() => {

fetch("https://api.github.com/users/marianinahub/repos")
.then(res => res.json())
.then(data => {
  if(Array.isArray(data)){
    setRepos(data)
  }
})

}, [])

return(

<section id="projects">

<h2>Мої проєкти</h2>

<motion.div
className="projects"
initial="hidden"
whileInView="visible"
viewport={{ once:true }}
variants={{
hidden:{},
visible:{
transition:{ staggerChildren:0.2 }
}
}}
>

{repos.slice(0,6).map(repo => (

<motion.div
className="card"
key={repo.id}
variants={{
hidden:{ opacity:0, y:50 },
visible:{ opacity:1, y:0 }
}}
whileHover={{ scale:1.05 }}
>

<h3>{repo.name}</h3>

<p>{repo.description || "No description"}</p>

<a href={repo.html_url} target="_blank">
GitHub
</a>

</motion.div>

))}

</motion.div>

</section>

)

}