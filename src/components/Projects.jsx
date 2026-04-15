import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Projects(){

const { lang } = useContext(LanguageContext)

const [repos, setRepos] = useState([])

useEffect(()=>{
fetch("https://api.github.com/users/marianinahub/repos")
.then(res=>res.json())
.then(data=>setRepos(data))
},[])

return(

<section id="projects">

<h2>
{lang === "ua" ? "Мої проєкти" : "My Projects"}
</h2>

<div className="projects">

{Array.isArray(repos) && repos
  .filter(repo => repo.name !== "my-portfolio") 
  .slice(0,6)
  .map(repo => (
<div className="card" key={repo.id}>
<h3>{repo.name}</h3>
<p>{repo.description}</p>
<a href={repo.html_url} target="_blank">GitHub</a>
</div>
))}

</div>

</section>

)

}