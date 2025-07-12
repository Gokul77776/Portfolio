import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <Icons.react />
        <Icons.nodejs />
        <Icons.mongo />
        <Icons.gitHub />
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.javascript />
        <Icons.express />
        <Icons.vercel />
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  react: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#61DAFB]">
      <img src="/react.svg" alt="React" className="w-6 h-6" />
    </div>
  ),
  nodejs: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#339933]">
      <img src="/nextdotjs.svg" alt="Node.js" className="w-6 h-6" />
    </div>
  ),
  express: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#000000]">
      <img src="/cloudinary.svg" alt="Express.js" className="w-6 h-6 invert" />
    </div>
  ),
  mongo: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#47A248]">
      <img src="/mongodb.svg" alt="MongoDB" className="w-6 h-6" />
    </div>
  ),
  gitHub: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#181717]">
      <img src="/github.svg" alt="GitHub" className="w-6 h-6 invert" />
    </div>
  ),
  tailwind: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#38BDF8]">
      <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-6 h-6" />
    </div>
  ),
  javascript: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F7DF1E]">
      <img src="/nodedotjs.svg" alt="JavaScript" className="w-6 h-6" />
    </div>
  ),
  vercel: () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#000000]">
      <img src="/vercel.svg" alt="Vercel" className="w-6 h-6 invert" />
    </div>
  ),
};
