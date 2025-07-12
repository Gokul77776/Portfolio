export function SkillIKnow() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1
        className="text-2xl md:text-6xl py-4 m-2 text-center font-bold"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        Skills I Know
      </h1>

      {/* Frontend Skills */}
      <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-8">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4"
          data-aos="fade-right"
        data-aos-delay="300">
          <h2 className="text-3xl font-semibold">Frontend Development</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-1">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>HTML5 & CSS3</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/frontend.svg"
            alt="Frontend Skills"
            className="w-[300px] md:w-[400px] object-contain"
            data-aos="fade-right"
        data-aos-delay="300"
          />
        </div>
      </div>

      {/* Backend Skills (Reverse layout) */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between my-12 gap-8">
        {/* Text Right */}
        <div className="w-full md:w-1/2 space-y-4"
          data-aos="fade-right"
        data-aos-delay="300"
        >
          <h2 className="text-3xl font-semibold">Backend Development</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-1">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Image Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/backend.svg"
            alt="Backend Skills"
            className="w-[300px] md:w-[400px] object-contain"
            data-aos="fade-left"
        data-aos-delay="300"
          />
        </div>
      </div>

      {/* Other Skills */}
      <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-8">
        {/* Text Left */}
        <div className="w-full md:w-1/2 space-y-4"
          data-aos="fade-right"
        data-aos-delay="300"
        >
          <h2 className="text-3xl font-semibold">Other Skills</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-1">
            <li>Cloud Computing</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Vercel & Netlify Deployment</li>
            <li>EmailJS</li>
            <li>JWT & Environment Variables</li>
          </ul>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/other.svg"
            alt="Other Skills"
            className="w-[300px] md:w-[400px] object-contain"
            data-aos="fade-right"
        data-aos-delay="300"
          />
        </div>
      </div>
    </section>
  );
}
