import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Pillars from "@/components/landing/Pillars";
import Proof from "@/components/landing/Proof";
import OfferForm from "@/components/landing/OfferForm";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Pillars />
      <Proof />
      <OfferForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
