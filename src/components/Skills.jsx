export default function Skills(){

return(

<section id="skills">

<h2>Навички</h2>

<div className="skills">

<div>HTML</div>
<div>CSS</div>
<div>JavaScript</div>
<div>React</div>
<div>Node.js</div>
<div>MongoDB</div>

</div>

</section>

)

}

<motion.div
initial={{ opacity:0, y:100 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.7 }}
viewport={{ once:true }}
></motion.div>