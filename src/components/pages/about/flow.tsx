import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/scroll";
import { useNavigate } from "react-router-dom";


export function Flow() {
  const navigate = useNavigate();

  const content = [
    {
      title: "Project Planning",
      description:
        "Define goals, identify user needs, and plan deliverables effectively. A clear roadmap ensures smooth development and strong collaboration.",
      content: (
        <img
          src="/analysis.svg"
          alt="Project Planning"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Design & Prototyping",
      description:
        "Create intuitive interfaces and user-centric prototypes. Our design phase focuses on clarity, usability, and responsiveness.",
      content: (
        <img
          src="/design.svg"
          alt="Design and Prototyping"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Development",
      description:
        "Bring designs to life using clean, scalable, and secure code. Whether frontend or backend, we ensure performance and reliability.",
      content: (
        <img
          src="/code.svg"
          alt="Development"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Testing & QA",
      description:
        "Ensure bug-free and stable performance through rigorous testing. We validate functionality, performance, and user experience before launch.",
      content: (
        <img
          src="/test.svg"
          alt="Testing and QA"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Deployment & Delivery",
      description:
        "Launch your product with confidence. We handle deployment, monitor systems, and ensure smooth delivery across platforms.",
      content: (
        <img
          src="/delivery.jpg"
          alt="Deployment and Delivery"
          className="h-full w-full object-cover"
        />
      ),
    },
  ];

  return (
    <section className="py-10">
      <h1
        className="text-2xl md:text-6xl text-center font-bold mb-8"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Work Flow
      </h1>
      <StickyScroll content={content} />

      <div className="flex justify-center items-center"> 
       <Button className="cursor-pointer"
                        onClick={()=> navigate('/contact')}
                        >Contact Me</Button>

      </div>

    </section>
  );
}
