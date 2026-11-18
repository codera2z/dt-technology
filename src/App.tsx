import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
