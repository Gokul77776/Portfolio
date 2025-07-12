import { Button } from "@/components/ui/button";
import OrbitingCirclesDemo from "@/components/ui/circle";
import { useNavigate } from "react-router-dom";


 


export function Tools(){
    const navigate = useNavigate();

    return(
        <section className=" w-full h-screen overflow-hidden m-5">
            <h1 className="text-center text-3xl md:text-7xl font-bold font-lora mt-5 pt-8 "
                data-aos="fade-down" data-aos-delay="200"
            >Tools & Technologies</h1>
             <div className="md:flex md:items-center  md:mx-8  w-full"
                 data-aos="fade-down" data-aos-delay="200"
             >
                <div className="w-full md:w-2/3 ">
                    <p className="font-cinzel text-base md:text-xl font-normal leading-8" >
                    I have hands-on experience with a wide range of tools and technologies across the full web development stack. On the frontend, I work with HTML5, CSS3, JavaScript (ES6+), and TypeScript, along with modern libraries and frameworks like React.js, Vite, and Next.js. I specialize in building responsive user interfaces using Tailwind CSS, ShadCN UI, and Bootstrap, and manage state using Redux, React Router, and Context API. On the backend, I develop scalable applications using Node.js and Express.js</p>
                    <Button onClick={()=>navigate('/skills')}>Know More</Button>
                </div>
            <OrbitingCirclesDemo/>
            </div>
            

                
        </section>
    )
}