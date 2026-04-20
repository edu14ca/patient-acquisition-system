import Header from "@/components/raise/Header";
import Hero from "@/components/raise/Hero";
import Problem from "@/components/raise/Problem";
import Pillars from "@/components/raise/Pillars";
import Services from "@/components/raise/Services";
import DeliveryModel from "@/components/raise/DeliveryModel";
import CaseStudy from "@/components/raise/CaseStudy";
import Differentiation from "@/components/raise/Differentiation";
import FinalCTA from "@/components/raise/FinalCTA";
import Footer from "@/components/raise/Footer";
import WhatsAppFloat from "@/components/raise/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Problem />
        <Pillars />
        <Services />
        <DeliveryModel />
        <CaseStudy />
        <Differentiation />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
