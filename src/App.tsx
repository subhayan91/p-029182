
    import { Toaster } from "@/components/ui/toaster";
    import { Toaster as Sonner } from "@/components/ui/sonner";
    import { TooltipProvider } from "@/components/ui/tooltip";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Index from "./pages/Index";
    import LoginPage from "./pages/Login"; // Renamed for clarity
    import SignupPage from "./pages/Signup"; // Renamed for clarity
    import CreateTopic from "./pages/CreateTopic";
    import NotFound from "./pages/NotFound";
    import UserProfilePage from "./pages/UserProfilePage";
    import OrganizationProfilePage from "./pages/OrganizationProfilePage";
    import CreateOrganizationPage from "./pages/CreateOrganizationPage";
    import { ProtectedRoute } from "./components/ProtectedRoute";
    import { AuthRoutes } from "./components/AuthRoutes";

    const queryClient = new QueryClient();

    const App = () => (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Routes accessible only when logged out */}
              <Route element={<AuthRoutes />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
              </Route>

              {/* Protected Routes - accessible only when logged in */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Index />} />
                <Route path="/create-topic" element={<CreateTopic />} />
                <Route path="/user" element={<UserProfilePage />} />
                <Route path="/organization-profile" element={<OrganizationProfilePage />} />
                <Route path="/create-organization" element={<CreateOrganizationPage />} />
              </Route>

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );

    export default App;
    