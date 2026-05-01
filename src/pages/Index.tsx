import Header from "@/components/raise/Header";
import Hero from "@/components/raise/Hero";
import Problem from "@/components/raise/Problem";
import Diagnostico from "@/components/raise/Diagnostico";
import Pillars from "@/components/raise/Pillars";
import Services from "@/components/raise/Services";
import DeliveryModel from "@/components/raise/DeliveryModel";
import SocialProof from "@/components/raise/SocialProof";
import CaseStudy from "@/components/raise/CaseStudy";
import Differentiation from "@/components/raise/Differentiation";
import FAQ from "@/components/raise/FAQ";
import FinalCTA from "@/components/raise/FinalCTA";
import QualifyForm from "@/components/raise/QualifyForm";
import Footer from "@/components/raise/Footer";
import WhatsAppFloat from "@/components/raise/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <Problem />
        <Diagnostico />
        <Pillars />
        <Services />
        <DeliveryModel />
        <SocialProof />
        <CaseStudy />
        <Differentiation />
        <QualifyForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
