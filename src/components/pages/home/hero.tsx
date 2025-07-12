import { BackgroundBeams } from "@/components/ui/background-beams";
import { Typewriter } from 'react-simple-typewriter'
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



export function Hero() {
  const navigate = useNavigate();

   

 const socialLinks = [
  {
    title: "GitHub",
    icon: <Github className="w-6 h-6 text-[#333]" />,  
    href: "https://github.com/Gokul77776",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 text-[#0A66C2]" />,  
    href: "https://linkedin.com/in/gokul-c7/",
  },
  {
    title: "Email",
    icon: <Mail className="w-6 h-6 text-[#EA4335]" />,  
    href: "mailto:gokuldj07@gmail.com",
  },
  {
    title: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,  
    href: "https://wa.me/9743328473",
  },
];
    return (
        <section className="relative w-full h-screen overflow-hidden"
        data-aos="fade-down" data-aos-delay="200"
        >
            <div className="relative z-10 flex flex-col-reverse md:flex-row  justify-around items-center mx-auto h-full px-4 ">
                <div className="w-full md:w-1/2 md:m-10">
                    <h1 className="text-2xl md:text-6xl py-4 m-2"
                    data-aos="fade-down" data-aos-delay="300"
                    >Hi All, I'm Gokul</h1>
                    <p className="text-base md:text-2xl m-2 p-2 "
                    data-aos="fade-down" data-aos-delay="400"
                    >I am a passionate Full Stack Web Developer with expertise in cloud technologies, experienced in designing, developing, and managing modern, scalable web applications using the MERN stack and other contemporary tools. </p>
                    <h2 className="text-xl font-medium px-2 m-2"
                    data-aos="fade-down" data-aos-delay="500"
                    >
                        Skilled in{' '}
                        <span className="text-purple-900 font-bold">
                            <Typewriter
                                words={['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Cloud Computing']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <FloatingDock
                    data-aos="fade-down" data-aos-delay="600"
                    items={socialLinks}
                    />
                    <div className="flex gap-5 items-center my-5 mx-4 "
                    data-aos="fade-down" data-aos-delay="600"
                    >
                        <Button className="cursor-pointer"
                        onClick={()=> navigate('/contact')}
                        >Contact Me</Button>
                        <Button className="cursor-pointer"
                          onClick={() => window.open("/newCv.pdf", "_blank")}
                        >Resume</Button>
                    </div>
                </div>

                <div className=" md:flex w-full md:w-1/2 justify-center items-center mb-8 md:mb-0">
                    <img
                        src="/web.png"
                        alt="Web Illustration"
                        className="w-[300px] md:w-[500px] lg:w-[550px] object-contain"
                    />
                </div>
            </div>
            <BackgroundBeams /> 
        </section>
    )
}