import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Loading from "./components/loading";
import AboutMe from "./pages/About_me";
import Home from "./pages/Home";
import WhyHireMe from "./pages/WhyHireMe";
import Projects from "./pages/projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Home id="mainy" />
            <AboutMe id="aboutMey" />
            <WhyHireMe />
            <Skills id="skills" />
            <Projects id="project" />
            <ContactForm id="contact" />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
