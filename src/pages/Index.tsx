import Header from "@/components/raise/Header";
import Hero from "@/components/raise/Hero";
import Problem from "@/components/raise/Problem";
import StatsBand from "@/components/raise/StatsBand";
import Pillars from "@/components/raise/Pillars";
import SocialProof from "@/components/raise/SocialProof";
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
        <StatsBand />
        <Pillars />
        <SocialProof />
        <QualifyForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
