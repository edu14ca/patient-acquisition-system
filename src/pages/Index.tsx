import Header from "@/components/raise/Header";
import Hero from "@/components/raise/Hero";
import StatsBand from "@/components/raise/StatsBand";
import Solutions from "@/components/raise/Solutions";
import DeliveryModels from "@/components/raise/DeliveryModels";
import Combinations from "@/components/raise/Combinations";
import SocialProof from "@/components/raise/SocialProof";
import Diagnostico from "@/components/raise/Diagnostico";
import Differentiation from "@/components/raise/Differentiation";
import FAQ from "@/components/raise/FAQ";
import QualifyForm from "@/components/raise/QualifyForm";
import Footer from "@/components/raise/Footer";
import WhatsAppFloat from "@/components/raise/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <StatsBand />
        <Solutions />
        <DeliveryModels />
        <Combinations />
        <SocialProof />
        <Diagnostico />
        <Differentiation />
        <FAQ />
        <QualifyForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
