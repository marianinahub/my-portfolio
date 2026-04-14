import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact(){

const [status, setStatus] = useState("")

const handleSubmit = async (e) => {
e.preventDefault()

const formData = new FormData(e.target)

try{

const res = await fetch("https://formspree.io/f/mojyvapo", {
method:"POST",
body:formData,
headers:{
Accept:"application/json"
}
})

if(res.ok){
setStatus("Дякую! Повідомлення надіслано 💌")
e.target.reset()
}else{
setStatus("Помилка 😢")
}

}catch{
setStatus("Помилка мережі 😢")
}

}

return(

<motion.section
id="contact"
initial={{ opacity:0, y:100 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.7 }}
viewport={{ once:true }}
>

<h2>Контакти</h2>

<div className="contact-info">

<div 
className="contact-item"
onClick={()=>{
navigator.clipboard.writeText("maruaninashved1488@gmail.com")
setStatus("Email скопійовано 📋")
}}
>
<div className="icon">✉️</div>
<div>
<h4>Email</h4>
<p>Натисни щоб скопіювати</p>
</div>
</div>

<a href="https://github.com/marianinahub" target="_blank" className="contact-item">
<div className="icon">💻</div>
<div>
<h4>GitHub</h4>
<p>marianinahub</p>
</div>
</a>

<a href="https://www.linkedin.com/in/maria-nina-shved-381085362/" target="_blank" className="contact-item">
<div className="icon">💼</div>
<div>
<h4>LinkedIn</h4>
<p>Profile</p>
</div>
</a>

</div>

<div className="contact-box">

<h3>Написати мені</h3>

<form onSubmit={handleSubmit} className="contact-form">

<div className="input-group">
<input type="email" name="email" required />
<label>Email</label>
</div>

<div className="input-group">
<textarea name="message" required />
<label>Повідомлення</label>
</div>

<button type="submit">Надіслати</button>

</form>

<p className="status">{status}</p>

</div>

</motion.section>

)

}