import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { bindWhatsAppClickListener, trackPageView } from "@/lib/fbpixel";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
const Index = lazy(() => import("./pages/Index.tsx"));
const Clinicas = lazy(() => import("./pages/Clinicas.tsx"));
const Restaurantes = lazy(() => import("./pages/Restaurantes.tsx"));
const Lojas = lazy(() => import("./pages/Lojas.tsx"));
const Servicos = lazy(() => import("./pages/Servicos.tsx"));
const Educacao = lazy(() => import("./pages/Educacao.tsx"));
const Imobiliarias = lazy(() => import("./pages/Imobiliarias.tsx"));
const Gyms = lazy(() => import("./pages/Gyms.tsx"));
const QuizRenda = lazy(() => import("./pages/QuizRenda.tsx"));
const Renda = lazy(() => import("./pages/Renda.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteTracker = () => {
  const location = useLocation();
  useEffect(() => {
    bindWhatsAppClickListener();
  }, []);
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clinicas" element={<Clinicas />} />
          <Route path="/restaurantes" element={<Restaurantes />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/educacao" element={<Educacao />} />
          <Route path="/imobiliarias" element={<Imobiliarias />} />
          <Route path="/gyms" element={<Gyms />} />
          <Route path="/quiz-renda" element={<QuizRenda />} />
          <Route path="/renda" element={<Renda />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
