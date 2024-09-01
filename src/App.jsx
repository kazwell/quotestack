import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeedPage from "./pages/FeedPage";
import UpdatesPage from "./pages/UpdatesPage";
import ProfilePage from "./pages/ProfilePage";
import UserProfile from "./components/UserProfile";
import UserQuotesPage from "./pages/UserQuotesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/review" element={<Index />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/user/:username/quotes" element={<UserQuotesPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;