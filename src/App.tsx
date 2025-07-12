import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./homepage";
import { Layout } from "./layout";
import { Contact } from "./contactpage";  
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { About } from "./aboutpage";
import { Skills } from "./skillspage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
