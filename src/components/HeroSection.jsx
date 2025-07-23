import sectionVideo from "../assets/section1.mp4"; // Make sure this video file exists in assets
import Features from "./Features";
import HowItWorks from "../pages/HowItWorks.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import StatsSection from "./StatsSection.jsx";
export function HeroSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-10 md:p-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transform Your Workplace Management
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Streamline attendance tracking, automate payroll processing, and
            enhance employee productivity with our comprehensive management
            system.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-white text-blue-600 rounded font-semibold">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-white rounded">
              Login
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <video
            src={sectionVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded shadow-lg w-full"
          />
        </div>
      </section>
      <div>
        <StatsSection />
        <Features />
        <HowItWorks />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default HeroSection;
