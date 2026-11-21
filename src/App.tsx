import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
