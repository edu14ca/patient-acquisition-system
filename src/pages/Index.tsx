import Header from "@/components/raise/Header";
import Hero from "@/components/raise/Hero";
import Problem from "@/components/raise/Problem";
import Diagnostico from "@/components/raise/Diagnostico";
import Services from "@/components/raise/Services";
import SocialProof from "@/components/raise/SocialProof";
import DeliveryModel from "@/components/raise/DeliveryModel";
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
        <Problem />
        <Diagnostico />
        <Services />
        <SocialProof />
        <DeliveryModel />
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
