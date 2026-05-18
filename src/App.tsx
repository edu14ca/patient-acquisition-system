import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { bindWhatsAppClickListener, trackPageView } from "@/lib/fbpixel";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Clinicas from "./pages/Clinicas.tsx";
import Restaurantes from "./pages/Restaurantes.tsx";
import Lojas from "./pages/Lojas.tsx";
import Servicos from "./pages/Servicos.tsx";
import Educacao from "./pages/Educacao.tsx";
import Imobiliarias from "./pages/Imobiliarias.tsx";
import Gyms from "./pages/Gyms.tsx";
import QuizRenda from "./pages/QuizRenda.tsx";
import Renda from "./pages/Renda.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
