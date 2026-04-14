import { motion } from "framer-motion"

export default function Loader(){

return(

<motion.div
className="loader"
initial={{ opacity:1 }}
animate={{ opacity:0 }}
transition={{ delay:1.5, duration:0.8 }}
>

<h1>Maria-Nina Aksenich</h1>

</motion.div>

)

}