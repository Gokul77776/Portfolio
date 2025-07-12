import AnimatedBeamDemo from "@/components/ui/animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



export function WhatIDo() {
    const navigate = useNavigate();
    return (
        <section className="h-full w-full"
            data-aos="fade-down" data-aos-delay="200"
            >
            <h1 className="text-center text-3xl md:text-7xl font-bold font-lora"
                data-aos="fade-down" data-aos-delay="300"
            >What I Do</h1>
            <div className="md:flex md:items-center md:mx-8 m-5 " 
                data-aos="fade-down" data-aos-delay="400"
            >
                <div  >
                <p className="font-cinzel text-base md:text-xl font-normal leading-8" >
                    I build responsive, scalable, and visually engaging web applications using the MERN stack,
                    seamlessly integrating frontend interfaces with powerful backend systems.
                    I focus on clean UI/UX design, efficient code structure, and cloud-ready deployment
                    to deliver modern digital experiences.
                </p>
                <Button onClick={()=>navigate('/about')}>Know More</Button>
                </div>
                    <AnimatedBeamDemo
                        data-aos="fade-down" data-aos-delay="500"
                    />
            </div>

        </section>
    );
}
