import { BackgroundBeams } from "@/components/ui/background-beams";
import { Typewriter } from 'react-simple-typewriter'
 
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



export function Hero() {
  const navigate = useNavigate();
  
    return (
        <section className="relative w-full h-screen overflow-hidden"
        data-aos="fade-down" data-aos-delay="200"
        >
            <div className="relative z-10 flex flex-col-reverse md:flex-row justify-around items-center mx-auto h-full px-4 ">
                <div className="w-full md:w-1/2 md:m-10">
                    <h1 className="text-2xl md:text-6xl py-4 m-2"
                    data-aos="fade-down" data-aos-delay="300"
                    >About</h1>
                    <p className="text-base md:text-2xl m-2 p-2 "
                    data-aos="fade-down" data-aos-delay="400"
                    >I'm a Full Stack Web Developer with expertise in cloud technologies.
                    I’ve built 5+ projects and contributed to 3 real-time  applications.
                    My skills span frontend, backend, and cloud deployment.
                    I’m driven by clean code, scalable systems, and real-world appilcation, I specialize in building responsive websites and dynamic applications using the latest technologies Our mission is to deliver clean, scalable, and efficient code while ensuring every project reflects creativity, performance, and attention to detail. </p>
                    <h2 className="text-xl font-medium px-2 m-2"
                    data-aos="fade-down" data-aos-delay="500"
                    >
                        Mainly Focus on{' '}
                        <span className="text-purple-900 font-bold">
                            <Typewriter
                                words={['Website-Speed', 'Website-Responsiveness', 'File-Structure', 'Cost-Optimization']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                     
                    <div className="flex gap-5 items-center my-5 mx-4 "
                    data-aos="fade-down" data-aos-delay="600"
                    >
                        <Button className="cursor-pointer"
                        onClick={()=> navigate('/contact')}
                        >Contact Me</Button>
                         
                    </div>
                </div>

                <div className=" md:flex w-full md:w-1/2 justify-center items-center mt-5 pt-5  mb-8 md:mb-0">
                    <img
                        src="/about.png"
                        alt="Web Illustration"
                        className="w-[300px] md:w-[500px] lg:w-[550px] object-contain"
                    />
                </div>
            </div>
            <BackgroundBeams /> 
        </section>
    )
}