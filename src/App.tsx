
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import YouthLearnMore from "./pages/YouthLearnMore";
import NotFound from "./pages/NotFound";
import ScrollToSection from "./components/ScrollToSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs/youth/learn-more" element={<YouthLearnMore />} />
          <Route path="/schedule" element={<Navigate to="/#schedule" replace />} />
          <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
          <Route path="/faq" element={<Navigate to="/#faq" replace />} />
          <Route path="/instructors" element={<Navigate to="/#instructors" replace />} />
          <Route path="/programs" element={<Navigate to="/#divisions" replace />} />
          <Route path="/divisions" element={<Navigate to="/#divisions" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
